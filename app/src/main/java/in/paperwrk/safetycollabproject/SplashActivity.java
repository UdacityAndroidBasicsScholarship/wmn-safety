package in.paperwrk.safetycollabproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Window;
import android.view.WindowManager;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

public class SplashActivity extends Activity {

    ImageView iv_1, iv_2, iv_3, iv_delay;
    Animation anim_splash1, anim_splash2, anim_splash3, anim_delay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_splash);

        iv_1 = findViewById(R.id.splash_women_img1);
        iv_2 = findViewById(R.id.splash_women_img2);
        iv_3 = findViewById(R.id.splash_women_img3);
        iv_delay = findViewById(R.id.final_delay);

        anim_splash1 = AnimationUtils.loadAnimation(this, R.anim.anim_splash);
        anim_splash2 = AnimationUtils.loadAnimation(this, R.anim.anim_splash_2);
        anim_splash3 = AnimationUtils.loadAnimation(this, R.anim.anim_splash_3);
        anim_delay = AnimationUtils.loadAnimation(this, R.anim.final_delay);

        anim_splash1.setStartTime(Animation.START_ON_FIRST_FRAME);
        iv_1.startAnimation(anim_splash1);

        anim_splash2.setStartTime(0);
        iv_2.startAnimation(anim_splash2);

        anim_splash3.setStartTime(0);
        iv_3.startAnimation(anim_splash3);

        anim_delay.setStartTime(0);
        iv_delay.startAnimation(anim_delay);

        anim_delay.setAnimationListener(new Animation.AnimationListener() {
            @Override
            public void onAnimationStart(Animation animation) {

            }

            @Override
            public void onAnimationEnd(Animation animation) {

                startActivity(new Intent(getApplicationContext(), MainActivity.class));
                finish();

            }

            @Override
            public void onAnimationRepeat(Animation animation) {

            }
        });
    }

}
