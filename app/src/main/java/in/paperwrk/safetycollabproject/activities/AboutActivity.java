package in.paperwrk.safetycollabproject.activities;

import android.os.Bundle;
import android.support.design.widget.AppBarLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;

import in.paperwrk.safetycollabproject.R;
import mehdi.sakout.aboutpage.AboutPage;

public class AboutActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        setTitle("About");

        AppBarLayout appBarLayout;


        appBarLayout = findViewById(R.id.appBarAnim);

        View aboutPage = new AboutPage(this)
                .isRTL(false)
                .setImage(R.mipmap.ic_launcher)
                .setDescription(getString(R.string.about_us_description))
                .addGroup("Find out More")
                .addEmail("pepperfriday1010@gmail.com")
                .addGitHub("UdacityAndroidBasicsScholarship/wmn-safety")
                .create();

        appBarLayout.addView(aboutPage,-1);


    }

    @Override
    public boolean onSupportNavigateUp() {
        onBackPressed();
        return true;
    }
}
