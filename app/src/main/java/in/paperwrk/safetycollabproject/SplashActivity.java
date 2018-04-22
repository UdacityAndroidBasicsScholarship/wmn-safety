package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

public class SplashActivity extends AppCompatActivity {
    TextView textView,textView1;
    ImageView imageView;

    // Animation
    Animation animation, anim,anim2;
    public final static int TIME_OUT = 3000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_splash);

        new android.os.Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(SplashActivity.this, LoginActivity.class);
                startActivity(intent);
                finish();
            }
        }, TIME_OUT);
        textView = (TextView) findViewById(R.id.text_View);
        textView1=(TextView) findViewById(R.id.text_View1);
        imageView = findViewById(R.id.imag_view);
        animation = AnimationUtils.loadAnimation(getApplicationContext(),
                R.anim.rotate);
        anim = AnimationUtils.loadAnimation(getApplicationContext(),
                R.anim.blink);
        anim2 = AnimationUtils.loadAnimation(getApplicationContext(),
                R.anim.fade_in);
        imageView.startAnimation(animation);
        textView1.startAnimation(anim2);
        textView.startAnimation(anim);
    }

}
