package in.paperwrk.safetycollabproject;

import android.content.Intent;
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
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import in.paperwrk.safetycollabproject.accounts.SigninActivity;
import in.paperwrk.safetycollabproject.fragments.AccountFragment;
import in.paperwrk.safetycollabproject.fragments.ExploreFragment;
import in.paperwrk.safetycollabproject.fragments.FakeCallFragment;
import in.paperwrk.safetycollabproject.fragments.HelpFragment;
import in.paperwrk.safetycollabproject.fragments.HomeFragment;
import in.paperwrk.safetycollabproject.fragments.SendFeedbackFragment;
import in.paperwrk.safetycollabproject.fragments.SettingsFragment;
import in.paperwrk.safetycollabproject.fragments.TrustedContactsFragment;
import in.paperwrk.safetycollabproject.interfaces.ToolbarTitleChangeListener;

public class HomeActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener, ToolbarTitleChangeListener {

    private DrawerLayout mDrawer;
    private NavigationView mNavigationView;
    private FirebaseAuth mFirebaseAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        mFirebaseAuth = FirebaseAuth.getInstance();
        if(mFirebaseAuth == null){
            navigateToLogin();
        }


        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        mDrawer = findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, mDrawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        mDrawer.addDrawerListener(toggle);
        toggle.syncState();
        mNavigationView = findViewById(R.id.navigation_view);
        mNavigationView.setNavigationItemSelectedListener(this);

        ImageView profileImageView = mNavigationView.getHeaderView(0).findViewById(R.id.profileImageView);
        TextView profileNameTextView = mNavigationView.getHeaderView(0).findViewById(R.id.profileNameTextView);
        TextView profileEmailTextView = mNavigationView.getHeaderView(0).findViewById(R.id.profileEmailTextView);

        FirebaseUser user = mFirebaseAuth.getCurrentUser();
        if(user != null) {
            if(user.getPhotoUrl() != null){
                Glide.with(this).load(user.getPhotoUrl().toString()).into(profileImageView);
            }
            profileNameTextView.setText(user.getDisplayName());
            profileEmailTextView.setText(user.getEmail());
        }

        setHomeFragment();

    }


    private void setHomeFragment() {
        setTitle(getString(R.string.app_name).toUpperCase());
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
                setTitle(getString(R.string.app_name).toUpperCase());
                fragment = new HomeFragment();
                break;
            case R.id.nav_trusted_contacts:
                fragment = new TrustedContactsFragment();
                break;
            case R.id.nav_explore:
                fragment = new ExploreFragment();
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



    @Override
    public void changeTitle(String title) {
        setTitle(title.toUpperCase());
    }

    private void navigateToLogin() {
        Intent intent = new Intent(this, SigninActivity.class);
        startActivity(intent);
        finish();
    }

}
