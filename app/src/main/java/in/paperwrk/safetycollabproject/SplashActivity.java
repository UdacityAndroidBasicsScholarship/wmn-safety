package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

public class SplashActivity extends AppCompatActivity {

    private android.widget.TextView tv;
    private android.widget.ImageView iv;
    private android.widget.TextView tv1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        // go to MainActivity after a delay 2 seconds
        tv = findViewById(R.id.tv);
        iv = findViewById(R.id.iv);
       tv1 = findViewById(R.id.tv1);
        Animation anim = AnimationUtils.loadAnimation(this, R.anim.mytransition);  // Defines common utils while wroking with animation

        tv.startAnimation(anim);
        iv.startAnimation(anim);
        tv1.startAnimation(anim);
        final Intent i = new Intent(this, MainActivity.class);

        anim.setAnimationListener(new android.view.animation.Animation.AnimationListener() {
            @Override
            public void onAnimationStart(android.view.animation.Animation animation) {

            }

            @Override
            public void onAnimationEnd(android.view.animation.Animation animation) {
                startActivity(i);
                finish();

            }

            @Override
            public void onAnimationRepeat(android.view.animation.Animation animation) {

            }
        });


    }

}
