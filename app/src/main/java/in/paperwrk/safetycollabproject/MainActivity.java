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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent toSplashActivity =  new Intent(getApplicationContext() , SplashActivity.class);
        startActivity(toSplashActivity);
    }
}
