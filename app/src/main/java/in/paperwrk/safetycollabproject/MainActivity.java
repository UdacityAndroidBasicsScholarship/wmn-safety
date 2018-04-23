package in.paperwrk.safetycollabproject;


import android.content.Intent;
import android.content.res.Configuration;
import android.media.Image;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    ImageView iv , iv2;
    Animation anim , anim2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        int orientation = this.getResources().getConfiguration().orientation;

        if(orientation== Configuration.ORIENTATION_LANDSCAPE)
        {
            ImageView image = (ImageView) findViewById(R.id.girl);
            image.setImageResource(R.drawable.splash_background);
        }

        anim = AnimationUtils.loadAnimation(getApplicationContext() , R.anim.push_down);
        iv = (ImageView) findViewById(R.id.nirbheek);

        anim2 = AnimationUtils.loadAnimation(getApplicationContext() , R.anim.push_left);
        iv2 = (ImageView) findViewById(R.id.girl);

        iv.setAnimation(anim);
        iv2.setAnimation(anim2);
        Thread t = new Thread(){


            @Override
            public void run() {

                try {
                    sleep(2500);
                    Intent i = new Intent(getApplicationContext() , LoginActivity.class);
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
