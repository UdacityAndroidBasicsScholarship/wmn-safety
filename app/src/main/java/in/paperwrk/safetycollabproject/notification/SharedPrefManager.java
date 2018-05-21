package in.paperwrk.safetycollabproject.notification;


import android.content.Context;
import android.content.SharedPreferences;

public class SharedPrefManager {

    private static final String PREF_NAME = "fcmpref";
    private static final String ACCESS_KEY = "token";

    private Context context;
    private static SharedPrefManager sharedPrefManager;

    public SharedPrefManager(Context context) {
        this.context = context;
    }

    public static synchronized SharedPrefManager getInstance(Context context){
     if (sharedPrefManager == null){
         sharedPrefManager = new SharedPrefManager(context);
     }
     return sharedPrefManager;
    }

    public boolean storeToken(String token){
        SharedPreferences sharedPreferences = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(ACCESS_KEY, token);
        editor.apply();
        return true;
    }

    public String getToken(){
        SharedPreferences sharedPreferences = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        return sharedPreferences.getString(ACCESS_KEY, null);
    }









}
