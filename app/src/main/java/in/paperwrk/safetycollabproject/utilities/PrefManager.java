package in.paperwrk.safetycollabproject.utilities;

/**
 * Created by Ojasvi on 06-05-2018.
 */

import android.content.Context;
import android.content.SharedPreferences;
public class PrefManager {

    SharedPreferences pref;
    SharedPreferences.Editor editor;
    Context context;

    public PrefManager(Context context){
        this.context=context;
        pref=context.getSharedPreferences("first",0);
        editor=pref.edit();

    }

    public void setFirst(Boolean isFirst){
        editor.putBoolean("check",isFirst);
        editor.commit();
    }

    public boolean isFirstLaunch(){
        return pref.getBoolean("check",true);
    }
}



