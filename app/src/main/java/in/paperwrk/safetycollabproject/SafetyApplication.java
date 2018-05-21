package in.paperwrk.safetycollabproject;

import android.app.Application;

import com.squareup.leakcanary.LeakCanary;

public class SafetyApplication extends Application{

    //public RefWatcher refWatcher;

    @Override
    public void onCreate() {
        super.onCreate();

        //initializeLeakCanary();
    }

    private void initializeLeakCanary() {
        if (LeakCanary.isInAnalyzerProcess(this)) {
            return;
        }
        //refWatcher = LeakCanary.install(this);
    }

}
