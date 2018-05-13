package in.paperwrk.safetycollabproject.customviews;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.support.v4.graphics.ColorUtils;
import android.support.v7.widget.AppCompatTextView;
import android.util.AttributeSet;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.utils.TypefaceUtils;


public class CustomButton extends AppCompatTextView {

    /**
     * An int {@link android.graphics.Color} to set as for {@link android.widget.TextView#setTextColor(int)} with alpha color state list
     */
    private int btnTxtColor;
    private int btnTxtTypeface;

    public CustomButton(Context context) {
        super(context);
    }

    public CustomButton(Context context, AttributeSet attrs) {
        super(context, attrs);
        TypedArray typedArray = getContext().getTheme().obtainStyledAttributes(attrs, R.styleable.CustomButton, 0, 0);
        setCustomTypeface(typedArray); //Sets custom typeface
        setAlphaColorStates(typedArray); //Sets alpha color state list
        /*typedArray.recycle(); //Recommended to recycle after use*/
    }

    private void setCustomTypeface(TypedArray typedArray) {
        int typeface = typedArray.getInteger(R.styleable.CustomButton_typeface, 0);
        switch (typeface){
            case TypefaceUtils.INT_CODE_REGULAR:
                setTypeface(TypefaceUtils.getInstance().getRegularTypeface(getContext()));
                break;

            case TypefaceUtils.INT_CODE_REGULAR_ITALIC:
                setTypeface(TypefaceUtils.getInstance().getRegularItalicTypeface(getContext()));
                break;

            case TypefaceUtils.INT_CODE_LIGHT:
                setTypeface(TypefaceUtils.getInstance().getLightTypeface(getContext()));
                break;

            case TypefaceUtils.INT_CODE_LIGHT_ITALIC:
                setTypeface(TypefaceUtils.getInstance().getLightItalicTypeface(getContext()));
                break;

            case TypefaceUtils.INT_CODE_BOLD:
                setTypeface(TypefaceUtils.getInstance().getBoldTypeface(getContext()));
                break;

            case TypefaceUtils.INT_CODE_BOLD_ITALIC:
                setTypeface(TypefaceUtils.getInstance().getBoldItalicTypeface(getContext()));
                break;

            case TypefaceUtils.INT_CODE_BOLD_HEAVY:
                setTypeface(TypefaceUtils.getInstance().getBoldHeavyTypeface(getContext()));
                break;
        }
    }

    /**
     * Initializes our customization
     * <p>
     * Initially, we are setting alpha channel only for selector states.
     * Later, do anything with dedicated and separate methods.
     * <p>
     * Being used in {@link #CustomButton(Context, AttributeSet)}
     *
     * @param typedArray A {@link TypedArray} from {@link #CustomButton(Context, AttributeSet)}
     * @since 1.0
     */
    private void setAlphaColorStates(TypedArray typedArray) {
        setBtnTxtColor(typedArray.getInteger(R.styleable.CustomButton_btnTxtColor, 0));
        try {
            setColorStateList(getBtnTxtColor());
        } finally {
            typedArray.recycle();
        }
    }

    /**
     * Sets color state list (selector) programmatically
     * <p>
     * This works same as how selector drawable works.
     * <p>
     * Being used in {@link #setAlphaColorStates(TypedArray)}
     *
     * @param btnTxtColor An int color specified by custom property either in xml or by programmatically
     * @since 1.0
     */
    private void setColorStateList(int btnTxtColor) {
        int[][] states = new int[][]{
                new int[]{android.R.attr.state_pressed},
                new int[]{android.R.attr.state_focused},
                new int[]{android.R.attr.state_enabled}
        };

        int[] colors = new int[]{
                getAlphaTxtColor(btnTxtColor),
                getAlphaTxtColor(btnTxtColor),
                btnTxtColor
        };
        ColorStateList colorStateList = new ColorStateList(states, colors);
        setTextColor(colorStateList);
    }

    /**
     * Gives the value of {@link #btnTxtColor} programmatically
     *
     * @since 1.0
     */
    public int getBtnTxtColor() {
        return btnTxtColor;
    }

    /**
     * Gives color with alpha channel
     * <p>
     * Sets 50% opacity and hence 50% transparency as we are using static int value 128 for alpha.
     * We have set it so to keep the consistency throughout the app.
     * <p>
     * Being used in {@link #setColorStateList(int)}
     *
     * @param color A {@link #btnTxtColor} either set through xml or by programmatically
     * @return New value for {@link #btnTxtColor} having alpha channel added
     * @since 1.0
     */
    private int getAlphaTxtColor(int color) {
        return ColorUtils.setAlphaComponent(color, 128);
    }

    /**
     * Sets the value of {@link #btnTxtColor} programmatically
     *
     * @param btnTxtColor A {@link #btnTxtColor} to be set for {@link CustomButton}
     * @since 1.0
     */
    public void setBtnTxtColor(int btnTxtColor) {
        this.btnTxtColor = btnTxtColor;
    }

    public CustomButton(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr); //Do anything after super() here if we want to play with style (theme) as well
    }

    /**
     * Gives the value of {@link #btnTxtTypeface} programmatically
     *
     * @since 1.0
     */
    public int getBtnTxtTypeface() {
        return btnTxtTypeface;
    }

    /**
     * Sets the value of {@link #btnTxtTypeface} programmatically
     *
     * @param btnTxtTypeface A {@link #btnTxtTypeface} to be set for {@link CustomButton}
     * @since 1.0
     */
    public void setBtnTxtTypeface(int btnTxtTypeface) {
        this.btnTxtTypeface = btnTxtTypeface;
    }
}
