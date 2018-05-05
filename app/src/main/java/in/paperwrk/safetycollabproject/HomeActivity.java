package in.paperwrk.safetycollabproject;

import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;

import in.paperwrk.safetycollabproject.fragments.AccountFragment;
import in.paperwrk.safetycollabproject.fragments.ExploreFragment;
import in.paperwrk.safetycollabproject.fragments.FakeCallFragment;
import in.paperwrk.safetycollabproject.fragments.HelpFragment;
import in.paperwrk.safetycollabproject.fragments.HomeFragment;
import in.paperwrk.safetycollabproject.fragments.SendFeedbackFragment;
import in.paperwrk.safetycollabproject.fragments.SettingsFragment;
import in.paperwrk.safetycollabproject.fragments.TrustedContactsFragment;

public class HomeActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    private DrawerLayout mDrawer;
    private NavigationView mNavigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        mDrawer = findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, mDrawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        mDrawer.addDrawerListener(toggle);
        toggle.syncState();
        mNavigationView = findViewById(R.id.navigation_view);
        mNavigationView.setNavigationItemSelectedListener(this);

        setHomeFragment();

    }

    private void setHomeFragment() {
        setTitle(mNavigationView.getMenu().findItem(R.id.nav_home).getTitle());
        mNavigationView.getMenu().findItem(R.id.nav_home).setChecked(true);
        setMyFragment(new HomeFragment());
    }

    @Override
    public void onBackPressed() {
        if (mDrawer.isDrawerOpen(GravityCompat.START)) {
            mDrawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        int id = item.getItemId();
        setTitle(mNavigationView.getMenu().findItem(id).getTitle());
        Fragment fragment = null;
        switch (id) {
            case R.id.nav_home:
                fragment = new HomeFragment();
                break;
            case R.id.nav_trusted_contacts:
                fragment = new TrustedContactsFragment();
                break;
            case R.id.nav_explore:
                fragment = new ExploreFragment();
                break;
            case R.id.nav_fake_call:
                fragment = new FakeCallFragment();
                break;
            case R.id.nav_account:
                fragment = new AccountFragment();
                break;
            case R.id.nav_settings:
                fragment = new SettingsFragment();
                break;
            case R.id.nav_help:
                fragment = new HelpFragment();
                break;
            case R.id.nav_feedback:
                fragment = new SendFeedbackFragment();
                break;
        }
        if (fragment != null) {
            setMyFragment(fragment);
        }
        mDrawer.closeDrawer(GravityCompat.START);
        return true;
    }

    private void setMyFragment(Fragment fragment) {
        getSupportFragmentManager()
                .beginTransaction()
                .replace(R.id.container, fragment)
                .commit();
    }
}
