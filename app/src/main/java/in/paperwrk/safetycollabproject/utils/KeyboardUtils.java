package in.paperwrk.safetycollabproject.utils;

import android.app.Activity;
import android.content.Context;
import android.view.View;
import android.view.inputmethod.InputMethodManager;

/**
 * Created by srdpatel on 3/2/2018.
 * <p>
 * All keyboard related methods being used in application should be gone to here
 * <p>
 *
 * @since 1.0
 */

public class KeyboardUtils {

    private static volatile InputMethodManager inputMethodManager;

    /**
     * Gives {@link InputMethodManager}
     * <p>
     * Uses volatile and thread safe singleton pattern. Replace singleton pattern by lazy initialization only in case of null or crash issues.
     * <p>
     * Being used in {@link #hideKeyboard(Activity)} and {@link #showKeyboard(Context)}
     *
     * @param mContext {@link Context}
     * @return {@link InputMethodManager}
     * @since 1.0
     */
    public static InputMethodManager getInputMethodManager(Context mContext) {
        if (inputMethodManager == null) {
            synchronized (KeyboardUtils.class) {
                if (inputMethodManager == null) {
                    inputMethodManager = (InputMethodManager) mContext.getSystemService(Activity.INPUT_METHOD_SERVICE);
                }
            }
        }
        return inputMethodManager;
    }

    /**
     * Hides soft keyboard
     *
     * @param mActivity {@link Activity}
     * @since 1.0
     */
    public static void hideKeyboard(Activity mActivity) {
        View view = mActivity.getCurrentFocus();
        if (view != null) {
            getInputMethodManager(mActivity).hideSoftInputFromWindow(view.getWindowToken(), InputMethodManager.HIDE_NOT_ALWAYS);
        }
    }

    /**
     * Shows soft keyboard
     *
     * @param mContext {@link Context}
     * @since 1.0
     */
    public static void showKeyboard(Context mContext) {
        getInputMethodManager(mContext).toggleSoftInput(InputMethodManager.SHOW_IMPLICIT, 0);
    }
}
