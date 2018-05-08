package in.paperwrk.safetycollabproject;

import android.os.Bundle;

import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ImageView;

import com.mindorks.placeholderview.PlaceHolderView;
import com.skyfishjy.library.RippleBackground;

public class HomeActivity extends AppCompatActivity{

    RippleBackground rippleBackground;
    private PlaceHolderView mDrawerView;
    private DrawerLayout mDrawer;
    private Toolbar mToolbar;
    private PlaceHolderView mGalleryView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
//        ripple_Animation();

        mDrawer = (DrawerLayout) findViewById(R.id.drawerLayout);
        mDrawerView = (PlaceHolderView) findViewById(R.id.drawerView);
        mToolbar = (Toolbar) findViewById(R.id.toolbar);
        mGalleryView = (PlaceHolderView) findViewById(R.id.galleryView);
        setupDrawer();
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

//    public void ripple_Animation()
//    {
//        rippleBackground = (RippleBackground)findViewById(R.id.content);
//        rippleBackground.startRippleAnimation();
//    }


}
