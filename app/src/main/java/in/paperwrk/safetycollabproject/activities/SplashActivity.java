package in.paperwrk.safetycollabproject.activities;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.accounts.SigninActivity;

public class SplashActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_screen);

        final Boolean isFirstLaunch = getSharedPreferences("pref",MODE_PRIVATE)
                .getBoolean("isfirstLaunch",true);

        Intent intent;
        if (isFirstLaunch){
            intent = new Intent(SplashActivity.this,PageIntroActivity.class);
            getSharedPreferences("pref",MODE_PRIVATE).edit().putBoolean("isfirstLaunch",false).apply();
        } else {
            intent = new Intent(SplashActivity.this, SigninActivity.class);
        }
        startActivity(intent);
        finish();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }



}
