package in.paperwrk.safetycollabproject.utilities;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

/**
 * Class to handle the launching of {@link in.paperwrk.safetycollabproject.OnBoardingActivity} only
 * during the first launch
 */

public class OnBoardingUtils {

    private OnBoardingUtils() {
        // Prevent from instantiating this class
    }

    public static void saveSharedSetting(Context context, String key){
        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(context);
        SharedPreferences.Editor editor = preferences.edit();
        editor.putBoolean(key, false);
        editor.apply();
    }
}
