package in.paperwrk.safetycollabproject.utils;

/**
 * Created by srdpatel on 2/25/2018. Contains static final strings of application.
 * <p>
 * All strings have been prepended by STR (Short form of string) to ease the access of variables with the help of Android Studio auto suggest tools
 * <p>
 *
 * @since 1.0
 */

public class AppConstantStrings {
    public static final String STR_SHARED_PREF = "sharedPreferences";
    public static final String STR_MSG_ERROR_SHARED_PREF_REFLECTION
            = "Use getInstance() method to get single instance of this class. " +
            "\nUse getSharedPref(Context mContext) method to get the single SharedPreferences instance of this class. " +
            "\nUse getEditor(Context mContext) method to get the single SharedPreferences.Editor instance of this class. ";

    public static final String STR_MSG_ERROR_TYPEFACE_REFLECTION
            = "Use getInstance() method to get single instance of this class.";

    public static final String STR_PACKAGE = "package";
    //App Directory
    public static final String STR_DIR_APP_NAME = "Design Villa";
    public static final String STR_DIR_APP = "/Design Villa";
    public static final String STR_DIR_APP_IMAGES = "/Dv Images";
}
