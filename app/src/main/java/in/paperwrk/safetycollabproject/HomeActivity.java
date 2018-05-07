package in.paperwrk.safetycollabproject;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.design.widget.NavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.widget.FrameLayout;

import java.util.Objects;

import in.paperwrk.safetycollabproject.fragments.ExploreFragment;
import in.paperwrk.safetycollabproject.fragments.FakeCallFragment;
import in.paperwrk.safetycollabproject.fragments.FeedbackFragment;
import in.paperwrk.safetycollabproject.fragments.HelpFragment;
import in.paperwrk.safetycollabproject.fragments.SettingsFragment;
import in.paperwrk.safetycollabproject.fragments.SosFragment;
import in.paperwrk.safetycollabproject.fragments.TrackMeFragment;
import in.paperwrk.safetycollabproject.fragments.TrustedContactFragment;

public class HomeActivity extends AppCompatActivity {

    DrawerLayout mDrawerLayout;
    FrameLayout mFrameLayout;
    Fragment mFragment;
    BottomNavigationView mBottomNavigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        Toolbar mToolbar = findViewById(R.id.my_toolbar);
        setSupportActionBar(mToolbar);

        mDrawerLayout = findViewById(R.id.drawer_layout);
        mBottomNavigationView = findViewById(R.id.navigation);
        mFrameLayout = findViewById(R.id.bnv_content);

        ActionBar actionbar = getSupportActionBar();
        Objects.requireNonNull(actionbar).setDisplayHomeAsUpEnabled(true);
        actionbar.setHomeAsUpIndicator(R.drawable.ic_menu_white_24dp);

        mFragment = new SosFragment();
        launchFragment(R.id.home_content, mFragment);

        mBottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch (item.getItemId()) {
                    case R.id.sos:
                        mFragment = new SosFragment();
                        launchFragment(R.id.home_content, mFragment);
                        return true;
                    case R.id.track_me:
                        mFragment = new TrackMeFragment();
                        launchFragment(R.id.home_content, mFragment);
                        return true;
                    case R.id.fake_call:
                        mFragment = new FakeCallFragment();
                        launchFragment(R.id.home_content, mFragment);
                        return true;
                    default:
                        return false;
                }
            }
        });


        NavigationView navigationView = findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(
                new NavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
                        menuItem.setChecked(true);
                        int id = menuItem.getItemId();

                        if (id == R.id.nav_trusted_contacts) {
                            mFragment = new TrustedContactFragment();
                        } else if (id == R.id.nav_explore) {
                            mFragment = new ExploreFragment();
                        } else if (id == R.id.nav_settings) {
                            mFragment = new SettingsFragment();
                        } else if (id == R.id.nav_help) {
                            mFragment = new HelpFragment();
                        } else if (id == R.id.nav_feedback) {
                            mFragment = new FeedbackFragment();
                        }

                        launchFragment(R.id.home_content, mFragment);
                        mDrawerLayout.closeDrawer(GravityCompat.START);
                        return true;
                    }
                });
    }

    private void launchFragment(int id, Fragment fragment) {
        if (fragment != null) {
            FragmentManager fragmentManager = getSupportFragmentManager();
            fragmentManager.beginTransaction()
                    .replace(id, fragment)
                    .commit();
        }
    }

    @Override
    public void onBackPressed() {
        if (mDrawerLayout.isDrawerOpen(GravityCompat.START)) {
            mDrawerLayout.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                mDrawerLayout.openDrawer(GravityCompat.START);
                return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
