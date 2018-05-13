package in.paperwrk.safetycollabproject.utils;

import android.content.Context;
import android.content.SharedPreferences;


/**
 * Created by srdpatel on 2/25/2018.
 * Uses reflection-proof, serialization-proof, thread safe (AsyncTask, AsyncLoader), Double check lock, volatile and lazy (initialization) singleton pattern for SharedPreferences and SharedPreferences.Editor objects
 *
 * @see <a href="https://www.ibm.com/developerworks/library/j-dcl/index.html">http://google.com</a>
 * @since 1.0
 */

public class SharedPrefs {

    private static volatile SharedPrefs mSharedPrefs;
    private static volatile SharedPreferences mSharedPreferences;
    private static volatile SharedPreferences.Editor mEditor;

    //Private constructor
    private SharedPrefs() {
        //Prevent from the reflection
        if (mSharedPrefs != null) {
            throw new RuntimeException(AppConstantStrings.STR_MSG_ERROR_SHARED_PREF_REFLECTION);
        }
        //Prevent from the reflection
        if (mSharedPreferences != null) {
            throw new RuntimeException(AppConstantStrings.STR_MSG_ERROR_SHARED_PREF_REFLECTION);
        }
        //Prevent from the reflection
        if (mEditor != null) {
            throw new RuntimeException(AppConstantStrings.STR_MSG_ERROR_SHARED_PREF_REFLECTION);
        }
    }

    /**
     * Gives SharedPrefs instance of this class with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @return singleton and volatile SharedPrefs
     * see {@link #mSharedPrefs}
     * @since 1.0
     */
    public static SharedPrefs getInstance() {
        //Double check locking
        if (mSharedPrefs == null) { //Checking for the first time
            synchronized (SharedPrefs.class) {
                if (mSharedPrefs == null) { //Check for second time
                    mSharedPrefs = new SharedPrefs(); //Create new instance only if there is no instance ever created before
                }
            }
        }
        return mSharedPrefs;
    }

    /**
     * Gives SharedPreferences with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @param mContext Context
     * @return singleton and volatile SharedPreferences
     * see {@link #mSharedPreferences}
     * @since 1.0
     */
    public static SharedPreferences getSharedPref(Context mContext) {
        //Double check locking
        if (mSharedPreferences == null) { //Checking for the first time
            synchronized (SharedPrefs.class) {
                if (mSharedPreferences == null) { //Check for second time
                    mSharedPreferences = mContext.getSharedPreferences(AppConstantStrings.STR_SHARED_PREF,
                            Context.MODE_PRIVATE); //Create new instance only if there is no instance ever created before
                }
            }
        }
        return mSharedPreferences;
    }

    /**
     * Gives SharedPreferences.Editor with secure singleton pattern
     * <p>
     * Uses thread safety and double check lock on volatile return type
     * <p>
     *
     * @param mContext Context
     * @return singleton and volatile SharedPreferences.Editor
     * see {@link #mEditor}
     * @since 1.0
     */
    public static SharedPreferences.Editor getEditor(Context mContext) {
        //Double check locking
        if (mEditor == null) { //Checking for the first time
            synchronized (SharedPrefs.class) {
                if (mEditor == null) { //Check for second time
                    mEditor = getSharedPref(mContext).edit();
                }
            }
        }
        return mEditor;
    }

    /**
     * Protects from serialization and deserialization
     *
     * @since 1.0
     */
    protected SharedPrefs readResolve() {
        return getInstance();
    }
}
