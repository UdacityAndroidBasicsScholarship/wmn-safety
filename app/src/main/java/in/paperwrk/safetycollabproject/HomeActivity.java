package in.paperwrk.safetycollabproject;

import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.internal.BottomNavigationMenu;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import com.mindorks.placeholderview.PlaceHolderView;
import com.skyfishjy.library.RippleBackground;

public class HomeActivity extends AppCompatActivity{

    private PlaceHolderView mDrawerView;
    private DrawerLayout mDrawer;
    private Toolbar mToolbar;
    private PlaceHolderView mGalleryView;
    private BottomNavigationView bottomNavigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        loadFragment(new SosInitFragment());

        mDrawer = (DrawerLayout) findViewById(R.id.drawerLayout);
        mDrawerView = (PlaceHolderView) findViewById(R.id.drawerView);
        mToolbar = (Toolbar) findViewById(R.id.toolbar);
        mGalleryView = (PlaceHolderView) findViewById(R.id.galleryView);
        bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottom_navigation);
        setupDrawer();

        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                Fragment fragment = null;
                switch (item.getItemId()) {
                    case R.id.sos_activity:
                        fragment = new SosInitFragment();
                        loadFragment(fragment);
                        Toast.makeText(HomeActivity.this, "SOS Navigation", Toast.LENGTH_SHORT).show();
                        break;

                    case R.id.track_me_activity:
                        fragment = new TrackMeFragment();
                        loadFragment(fragment);
                        Toast.makeText(HomeActivity.this, "Track Me Activity", Toast.LENGTH_SHORT).show();
                        break;

                    case R.id.fake_call_activity:
                        fragment = new FakeCallFragment();
                        loadFragment(fragment);
                        Toast.makeText(HomeActivity.this, "Fack Call started", Toast.LENGTH_SHORT).show();
                        break;
                }
                return true;
            }
        });
    }

    private void setupDrawer() {
        mDrawerView
                .addView(new DrawerHeader())
                .addView(new DrawerMenuItem(this.getApplicationContext(), DrawerMenuItem.TRUSTED_CONTACTS))
                .addView(new DrawerMenuItem(this.getApplicationContext(), DrawerMenuItem.EXPLORE))
                .addView(new DrawerMenuItem(this.getApplicationContext(), DrawerMenuItem.SETTINGS))
                .addView(new DrawerMenuItem(this.getApplicationContext(), DrawerMenuItem.HELP))
                .addView(new DrawerMenuItem(this.getApplicationContext(), DrawerMenuItem.SEND_FEEDBACK));

        ActionBarDrawerToggle drawerToggle = new ActionBarDrawerToggle(this, mDrawer, mToolbar, R.string.open_drawer, R.string.close_drawer) {
            @Override
            public void onDrawerOpened(View drawerView) {
                super.onDrawerOpened(drawerView);
            }

            @Override
            public void onDrawerClosed(View drawerView) {
                super.onDrawerClosed(drawerView);
            }
        };

        mDrawer.addDrawerListener(drawerToggle);
        drawerToggle.syncState();
    }


    private boolean loadFragment(Fragment fragment) {
        if (fragment != null) {
            getSupportFragmentManager()
                    .beginTransaction()
                    .replace(R.id.fragment_container, fragment)
                    .commit();
            return true;
        }
        return false;
    }
}
