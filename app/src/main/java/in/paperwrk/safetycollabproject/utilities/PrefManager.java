package in.paperwrk.safetycollabproject.utilities;

/**
 * Created by Ojasvi on 06-05-2018.
 */

import android.content.Context;
import android.content.SharedPreferences;
public class PrefManager {

    
    private SharedPreferences pref;
    private SharedPreferences.Editor editor;

    // Shared preferences file name
    private static final String PREF_NAME = "collab-project";

    private static final String IS_FIRST_TIME_LAUNCH = "IsFirstTimeLaunch";

    public PrefManager(Context context) {
        int PRIVATE_MODE = 0;
        pref = context.getSharedPreferences(PREF_NAME, PRIVATE_MODE);
        editor = pref.edit();
    }

    public void setFirstLaunch(boolean isFirstTime) {
        editor.putBoolean(IS_FIRST_TIME_LAUNCH, isFirstTime);
        editor.commit();
    }

    public boolean isFirstLaunch() {
        return pref.getBoolean(IS_FIRST_TIME_LAUNCH, true);
    }

}



