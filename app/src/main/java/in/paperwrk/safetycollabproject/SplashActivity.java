package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.widget.ProgressBar;

public class SplashActivity extends AppCompatActivity {

    private ProgressBar mProgressBar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        mProgressBar = findViewById(R.id.progress);

        // go to MainActivity after a delay 2 seconds
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                doWork();
                Intent intent = new Intent(SplashActivity.this, LoginActivity.class);
                startActivity(intent);
                finish();
            }
        },2000);


    }

    private void doWork() {

            for (int progress=0; progress<100; progress+=10) {

                mProgressBar.setProgress(progress);
            }
        }
    }


