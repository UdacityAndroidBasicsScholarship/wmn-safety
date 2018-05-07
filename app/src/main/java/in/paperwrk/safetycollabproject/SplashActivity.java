package in.paperwrk.safetycollabproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

import in.paperwrk.safetycollabproject.accounts.SigninActivity;
import in.paperwrk.safetycollabproject.utilities.PrefManager;

public class SplashActivity extends AppCompatActivity {

    private PrefManager prefManager = new PrefManager(this);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        if(prefManager.isFirstLaunch()){
            // go to IntroActivity after a delay 2 seconds
            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    Intent intent = new Intent(SplashActivity.this, PageIntroActivity.class);
                    startActivity(intent);
                    finish();
                }
            },2000);
            prefManager.setFirst(false);
        }
        else if(!prefManager.isFirstLaunch()){
            // go to HomeActivity after a delay 2 seconds
            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    Intent intent = new Intent(SplashActivity.this, HomeActivity.class);
                    startActivity(intent);
                    finish();
                }
            },2000);

        }


    }

}
