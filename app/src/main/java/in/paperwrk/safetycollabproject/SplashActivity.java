package in.paperwrk.safetycollabproject;


import android.content.Intent;
import android.content.res.Configuration;
import android.media.Image;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

public class SplashActivity extends AppCompatActivity {

    ImageView imageViewNirbheekLogo , imageViewGirl;
    Animation animDownNirbheekLogo , animRightGirl;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        int orientation = this.getResources().getConfiguration().orientation;
        if(orientation == Configuration.ORIENTATION_LANDSCAPE)
        {
            imageViewGirl = (ImageView) findViewById(R.id.girl);
            imageViewGirl.setImageResource(R.drawable.splash_background);
        }

        animDownNirbheekLogo = AnimationUtils.loadAnimation(getApplicationContext() , R.anim.push_down);
        imageViewNirbheekLogo = (ImageView) findViewById(R.id.nirbheek);

        animRightGirl = AnimationUtils.loadAnimation(getApplicationContext() , R.anim.push_right);
        imageViewGirl = (ImageView) findViewById(R.id.girl);

        imageViewNirbheekLogo.setAnimation(animDownNirbheekLogo);
        imageViewGirl.setAnimation(animRightGirl);
        Thread t = new Thread(){


            @Override
            public void run() {

                try {
                    sleep(2500);
                    Intent i = new Intent(getApplicationContext() , SigninActivity.class);
                    startActivity(i);


                } catch (InterruptedException e) {
                    e.printStackTrace();
                }


                super.run();
            }
        };
        t.start();
    }
}
