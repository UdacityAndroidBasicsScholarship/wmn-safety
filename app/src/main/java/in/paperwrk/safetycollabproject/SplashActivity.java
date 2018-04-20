package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

public class SplashActivity extends AppCompatActivity {

    TextView appName, punchLine;
    ImageView appLogo;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        appLogo = findViewById(R.id.nirbheekLogo);
        appName = findViewById(R.id.appName);
        punchLine = findViewById(R.id.punchLine);

        Animation animAppLogo = AnimationUtils.loadAnimation(SplashActivity.this, R.anim.scaleup);
        animAppLogo.setInterpolator((new AccelerateDecelerateInterpolator()));
        animAppLogo.setFillAfter(true);
        appLogo.setAnimation(animAppLogo);

        Animation animAppName = AnimationUtils.loadAnimation(SplashActivity.this, R.anim.animlefttoright);
        animAppName.setInterpolator((new AccelerateDecelerateInterpolator()));
        animAppName.setFillAfter(true);
        appName.setAnimation(animAppName);

        Animation animPunchLine = AnimationUtils.loadAnimation(SplashActivity.this, R.anim.animdowntoup);
        animPunchLine.setInterpolator((new AccelerateDecelerateInterpolator()));
        animPunchLine.setFillAfter(true);
        punchLine.setAnimation(animPunchLine);



        // go to MainActivity after a delay 5 seconds
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        },5000);

    }


}
