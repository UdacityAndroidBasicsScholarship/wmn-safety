package in.paperwrk.safetycollabproject.utils;

import android.content.Context;
import android.graphics.Typeface;


/**
 * Created by srdpatel on 2/25/2018.
 * Uses reflection-proof, serialization-proof, thread safe (AsyncTask, AsyncLoader), Double check lock, volatile and lazy (initialization) singleton pattern for {@link Typeface}
 *
 * @see <a href="https://www.ibm.com/developerworks/library/j-dcl/index.html">http://google.com</a>
 * @since 1.0
 */
public class TypefaceUtils {

    //region Enum int code for typeface to set
    public static final int INT_CODE_REGULAR = 1;
    public static final int INT_CODE_REGULAR_ITALIC = 2;
    public static final int INT_CODE_LIGHT = 3;
    public static final int INT_CODE_LIGHT_ITALIC = 4;
    public static final int INT_CODE_BOLD = 5;
    public static final int INT_CODE_BOLD_ITALIC = 6;
    public static final int INT_CODE_BOLD_HEAVY = 7;
    //endregion

    //region String path of custom typeface for asset manager
    private static final String BOLD = "fonts/bold.ttf";
    private static final String BOLD_ITALIC = "fonts/bold_italic.ttf";
    private static final String BOLD_HEAVY = "fonts/heavy_bold.ttf";
    private static final String LIGHT = "fonts/light.ttf";
    private static final String LIGHT_ITALIC = "fonts/light_italic.ttf";
    private static final String REGULAR = "fonts/regular.ttf";
    private static final String REGULAR_ITALIC = "fonts/rg_italic.ttf";
    //endregion

    //region Volatile singletons
    private static volatile TypefaceUtils mTypefaceUtils;
    private static volatile Typeface boldTypeface;
    private static volatile Typeface boldItalicTypeface;
    private static volatile Typeface boldHeavyTypeface;
    private static volatile Typeface lightTypeface;
    private static volatile Typeface lightItalicTypeface;
    private static volatile Typeface regularTypeface;
    private static volatile Typeface regularItalicTypeface;
    //endregion

    //Private constructor
    private TypefaceUtils() {
        //Prevent from the reflection
        if (mTypefaceUtils != null) {
            throw new RuntimeException(AppConstantStrings.STR_MSG_ERROR_TYPEFACE_REFLECTION);
        }
    }

    /**
     * Gives {@link #mTypefaceUtils} instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile {@link #mTypefaceUtils}
     * see {@link #mTypefaceUtils}
     * @since 1.0
     */
    public static TypefaceUtils getInstance() {
        if (mTypefaceUtils == null) {
            synchronized (TypefaceUtils.class) {
                if (mTypefaceUtils == null) {
                    mTypefaceUtils = new TypefaceUtils();
                }
            }
        }
        return mTypefaceUtils;
    }

    /**
     * Gives {@link #boldTypeface} instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile {@link #boldTypeface}
     * see {@link #boldTypeface}
     * @since 1.0
     */
    public Typeface getBoldTypeface(Context mContext) {
        if (boldTypeface == null) {
            synchronized (TypefaceUtils.class) {
                if (boldTypeface == null) {
                    boldTypeface = Typeface.createFromAsset(mContext.getAssets(), BOLD);
                }
            }
        }
        return boldTypeface;
    }

    /**
     * Gives {@link #boldItalicTypeface} instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile {@link #boldItalicTypeface}
     * see {@link #boldItalicTypeface}
     * @since 1.0
     */
    public Typeface getBoldItalicTypeface(Context mContext) {
        if (boldItalicTypeface == null) {
            synchronized (TypefaceUtils.class) {
                if (boldItalicTypeface == null) {
                    boldItalicTypeface = Typeface.createFromAsset(mContext.getAssets(), BOLD_ITALIC);
                }
            }
        }
        return boldItalicTypeface;
    }

    /**
     * Gives {@link #boldHeavyTypeface} instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile {@link #boldHeavyTypeface}
     * see {@link #boldHeavyTypeface}
     * @since 1.0
     */
    public Typeface getBoldHeavyTypeface(Context mContext) {
        if (boldHeavyTypeface == null) {
            synchronized (TypefaceUtils.class) {
                if (boldHeavyTypeface == null) {
                    boldHeavyTypeface = Typeface.createFromAsset(mContext.getAssets(), BOLD_HEAVY);
                }
            }
        }
        return boldHeavyTypeface;
    }

    /**
     * Gives {@link #lightTypeface} instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile {@link #lightTypeface}
     * see {@link #lightTypeface}
     * @since 1.0
     */
    public Typeface getLightTypeface(Context mContext) {
        if (lightTypeface == null) {
            synchronized (TypefaceUtils.class) {
                if (lightTypeface == null) {
                    lightTypeface = Typeface.createFromAsset(mContext.getAssets(), LIGHT);
                }
            }
        }
        return lightTypeface;
    }

    /**
     * Gives {@link #lightItalicTypeface} instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile {@link #lightItalicTypeface}
     * see {@link #lightItalicTypeface}
     * @since 1.0
     */
    public Typeface getLightItalicTypeface(Context mContext) {
        if (lightItalicTypeface == null) {
            synchronized (TypefaceUtils.class) {
                if (lightItalicTypeface == null) {
                    lightItalicTypeface = Typeface.createFromAsset(mContext.getAssets(), LIGHT_ITALIC);
                }
            }
        }
        return lightItalicTypeface;
    }

    /**
     * Gives {@link #regularTypeface} instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile {@link #regularTypeface}
     * see {@link #regularTypeface}
     * @since 1.0
     */
    public Typeface getRegularTypeface(Context mContext) {
        if (regularTypeface == null) {
            synchronized (TypefaceUtils.class) {
                if (regularTypeface == null) {
                    regularTypeface = Typeface.createFromAsset(mContext.getAssets(), REGULAR);
                }
            }
        }
        return regularTypeface;
    }

    /**
     * Gives {@link #regularItalicTypeface} instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile {@link #regularItalicTypeface}
     * see {@link #regularItalicTypeface}
     * @since 1.0
     */
    public Typeface getRegularItalicTypeface(Context mContext) {
        if (regularItalicTypeface == null) {
            synchronized (TypefaceUtils.class) {
                if (regularItalicTypeface == null) {
                    regularItalicTypeface = Typeface.createFromAsset(mContext.getAssets(), REGULAR_ITALIC);
                }
            }
        }
        return regularItalicTypeface;
    }
}
