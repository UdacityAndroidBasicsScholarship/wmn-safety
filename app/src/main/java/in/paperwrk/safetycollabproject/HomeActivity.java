package in.paperwrk.safetycollabproject;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;

import com.mikepenz.materialdrawer.AccountHeader;
import com.mikepenz.materialdrawer.AccountHeaderBuilder;
import com.mikepenz.materialdrawer.Drawer;
import com.mikepenz.materialdrawer.DrawerBuilder;
import com.mikepenz.materialdrawer.model.DividerDrawerItem;
import com.mikepenz.materialdrawer.model.PrimaryDrawerItem;
import com.mikepenz.materialdrawer.model.ProfileDrawerItem;
import com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
import com.mikepenz.materialdrawer.model.SecondaryDrawerItem;
import com.mikepenz.materialdrawer.model.interfaces.IProfile;

public class HomeActivity extends AppCompatActivity{

    Drawer result = null;
    private AccountHeader headerResult = null;
    FragmentManager mFragmentManager;
    public static boolean isHomeActivityShown;
    public static boolean isFragment1Shown=false ;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);


        Toolbar toolbar =  findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        BottomNavigationView mBottomNavigationView = findViewById(R.id.bottom_navigation_view);
        mBottomNavigationView.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);


        // will update it later using data from Firebase Realtime DB
        final IProfile profile = new ProfileDrawerItem().withName("Nirbheek")
                .withTextColor(getResources().getColor(android.R.color.black))
                .withEmail("useremail@gmail.com").withIcon(R.mipmap.ic_launcher)
                .withIdentifier(100);

        headerResult = new AccountHeaderBuilder()
                .withActivity(this)
                .withHeaderBackground(R.color.colorPrimary)
                .withSavedInstance(savedInstanceState)
                .withTranslucentStatusBar(true)
                .addProfiles(profile,
                        new ProfileSettingDrawerItem().withName("Manage Accounts")
                )
                .build();

        createNavDrawer(toolbar);

        if(savedInstanceState == null){
            FragmentManager fragmentManager = getSupportFragmentManager();
            fragmentManager.beginTransaction().replace(R.id.content,new SOSFragment()).commit();
        }


    }


    // Map Fragments to BottomNavigationView
    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {
        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            mFragmentManager = getSupportFragmentManager();
            FragmentTransaction fragmentTransaction = mFragmentManager.beginTransaction();
            switch (item.getItemId()) {
                case R.id.action_sos:
                    fragmentTransaction.replace(R.id.content,new SOSFragment()).commit();
                    return true;
                case R.id.action_track_user:
                    isFragment1Shown = true;
                    isHomeActivityShown = false;
                    fragmentTransaction.replace(R.id.content,new TrackUserFragment()).commit();
                    return true;
            }

            return false;
        }
    };




    private void createNavDrawer(Toolbar toolbar) {
         result = new DrawerBuilder()
                .withActivity(this)
                .withAccountHeader(headerResult)
                .withToolbar(toolbar)
                .withSelectedItem(-1)
                .withHasStableIds(true)
                .addDrawerItems(
                        new PrimaryDrawerItem().withName("Home")
                                .withIdentifier(0).withIcon(R.drawable.ic_home_black_24dp),
                        new PrimaryDrawerItem().withName("Trusted Contacts")
                                .withIdentifier(1).withIcon(R.drawable.ic_contact_phone_black_24dp),
                        new PrimaryDrawerItem().withName("Explore")
                                .withIdentifier(2).withIcon(R.drawable.ic_explore_black_24dp),
                        new PrimaryDrawerItem().withName("Fake Call")
                                .withIdentifier(3).withIcon(R.drawable.ic_call_black_24dp),
                        new DividerDrawerItem(),
                        new PrimaryDrawerItem().withName("Account")
                                .withIdentifier(4).withIcon(R.drawable.ic_person_black_24dp),
                        new PrimaryDrawerItem().withName("Settings")
                                .withIdentifier(5).withIcon(R.drawable.ic_settings_black_24dp),
                        new SecondaryDrawerItem().withName("Help"),
                        new SecondaryDrawerItem().withName("Send Feedback")
                )
                .build();
    }

}
