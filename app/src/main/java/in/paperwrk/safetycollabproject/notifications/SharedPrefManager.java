package in.paperwrk.safetycollabproject.notifications;

import android.content.Context;
import android.content.SharedPreferences;

public class SharedPrefManager {

    private static final String ACCESS_TOKEN = "token" ;
    private Context context;
    private static final String SHARED_PREF_NAME = "fcmsharedpref";
    private static SharedPrefManager sharedPrefManager;


    private SharedPrefManager(Context context) {
        this.context = context;
    }

    static synchronized SharedPrefManager getInstance(Context context){
        if (sharedPrefManager != null){
            sharedPrefManager = new SharedPrefManager(context);
        }
        return sharedPrefManager;
    }

    boolean storeToken(String token){
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREF_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(ACCESS_TOKEN,token);
        editor.apply();
        return true;
    }

    public String getToken(){
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREF_NAME, Context.MODE_PRIVATE);
        return sharedPreferences.getString(ACCESS_TOKEN,null);
    }

}
