package in.paperwrk.safetycollabproject;

import android.app.Application;

import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;

import in.paperwrk.safetycollabproject.RequestProvider.ClientProvider;

/**
 * Created by Vinay Gupta on 25-04-2018.
 */

public class AppInfo extends Application {

    public static FirebaseAuth firebaseAuth;

    @Override
    public void onCreate() {
        super.onCreate();

        FirebaseApp.initializeApp(getApplicationContext());

        firebaseAuth = ClientProvider.getFirebaseAuth_Instance();
    }
}