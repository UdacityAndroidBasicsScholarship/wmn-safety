package in.paperwrk.safetycollabproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.provider.ContactsContract;
import android.support.v7.app.AppCompatActivity;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

import in.paperwrk.safetycollabproject.accounts.SigninActivity;


public class SplashActivity extends Activity {

        TextView txtMessage1,txtMessage2;

        ImageView image;

        // Animation
        Animation animFadein;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
           // getActionBar().hide();
            setContentView(R.layout.activity_splash);


            txtMessage1 = (TextView) findViewById(R.id.text1);
            txtMessage2 = (TextView) findViewById(R.id.text2);

            image = (ImageView) findViewById(R.id.image);

            // load the animation
            animFadein = AnimationUtils.loadAnimation(getApplicationContext(),
                    R.anim.slide_down);

            // start the animation
            txtMessage1.startAnimation(animFadein);
            txtMessage2.startAnimation(animFadein);
            image.startAnimation(animFadein);

           //setting duration of animation
            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    final Intent mainIntent = new Intent(SplashActivity.this, SigninActivity.class);
                    SplashActivity.this.startActivity(mainIntent);
                    SplashActivity.this.finish();
                }
            }, 3000);
        }
    }