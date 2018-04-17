package in.paperwrk.safetycollabproject.intro;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.accounts.SignInActivity;

public class SplashActivity extends AppCompatActivity {

    Context mContext = SplashActivity.this;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(mContext,SignInActivity.class);
                startActivity(intent);
                finish();
            }
        },2000);
    }
}
