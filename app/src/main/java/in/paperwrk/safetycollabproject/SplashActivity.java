package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

public class SplashActivity extends AppCompatActivity {
    TextView textView;
    ImageView imageView;

    // Animation
    Animation animation,anim;
    Animation animFadeIn, animFadeOut;
    public final static int TIME_OUT = 5000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_splash);

        new android.os.Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        }, TIME_OUT);
        textView = (TextView) findViewById(R.id.text_View);
        imageView = findViewById(R.id.imag_view);
        animation = AnimationUtils.loadAnimation(getApplicationContext(),
                R.anim.slideup);
        anim = AnimationUtils.loadAnimation(getApplicationContext(),
                R.anim.blink);
        imageView.startAnimation(animation);
        textView.startAnimation(anim);

        
    }

}
