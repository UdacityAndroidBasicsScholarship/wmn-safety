package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.mikepenz.materialdrawer.AccountHeader;
import com.mikepenz.materialdrawer.AccountHeaderBuilder;
import com.mikepenz.materialdrawer.Drawer;
import com.mikepenz.materialdrawer.DrawerBuilder;
import com.mikepenz.materialdrawer.model.DividerDrawerItem;
import com.mikepenz.materialdrawer.model.PrimaryDrawerItem;
import com.mikepenz.materialdrawer.model.ProfileDrawerItem;
import com.mikepenz.materialdrawer.model.ProfileSettingDrawerItem;
import com.mikepenz.materialdrawer.model.SecondaryDrawerItem;
import com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;
import com.mikepenz.materialdrawer.model.interfaces.IProfile;

import in.paperwrk.safetycollabproject.accounts.SigninActivity;

public class HomeActivity extends AppCompatActivity implements AccelerometerListener {

    @Override
    protected void onResume() {
        super.onResume();
        if (AccelerometerManager.isSupported(this)) {
            AccelerometerManager.startListening(this);
        }
    }

    @Override
    public void onAccelerationChanged(float x, float y, float z) {

    }

    @Override
    public void onShake(float force) {
        Toast.makeText(this, "Motion detected", Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onStop() {
        super.onStop();

        //Check device supported Accelerometer senssor or not
        if (AccelerometerManager.isListening()) {

            //Start Accelerometer Listening
            AccelerometerManager.stopListening();

            Toast.makeText(this, "onStop Accelerometer Stopped", Toast.LENGTH_SHORT).show();
        }
    }


    @Override
    public void onDestroy() {
        super.onDestroy();
        if (AccelerometerManager.isListening()) {
            AccelerometerManager.stopListening();

            Toast.makeText(this, "onDestroy Accelerometer Stopped", Toast.LENGTH_SHORT).show();
        }
    }

    Drawer result = null;
    private AccountHeader headerResult = null;
    FragmentManager mFragmentManager;
    public static boolean isHomeActivityShown;
    public static boolean isFragment1Shown = false;
    public boolean isFragment2Shown = false;

    FirebaseDatabase mFirebaseDatabase = null;
    DatabaseReference mDatabaseReference = null;
    FirebaseAuth mFirebaseAuth = null;
    FirebaseUser mFirebaseUser = null;

    String mFullName = null, mEmail = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        mFirebaseDatabase = FirebaseDatabase.getInstance();
        mDatabaseReference = mFirebaseDatabase.getReference();
        mFirebaseAuth = FirebaseAuth.getInstance();
        mFirebaseUser = mFirebaseAuth.getCurrentUser();

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        BottomNavigationView mBottomNavigationView = findViewById(R.id.bottom_navigation_view);
        mBottomNavigationView.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        if (mFirebaseUser != null) {
            mEmail = mFirebaseUser.getEmail();

            // TODO: Get mFullName From Databse

        } else {
            navigateToHome();
        }

        // will update it later using data from Firebase Realtime DB
        final IProfile profile = new ProfileDrawerItem().withName(mFullName)
                .withTextColor(getResources().getColor(android.R.color.black))
                .withEmail(mEmail).withIcon(R.mipmap.ic_launcher)
                .withIdentifier(100);

        headerResult = new AccountHeaderBuilder()
                .withActivity(this)
                .withHeaderBackground(R.color.colorPrimary)
                .withSavedInstance(savedInstanceState)
                .withTranslucentStatusBar(true)
                .addProfiles(profile,
                        new ProfileSettingDrawerItem().withName("Manage Accounts"),
                        new ProfileSettingDrawerItem().withName("Logout").withOnDrawerItemClickListener(new Drawer.OnDrawerItemClickListener() {
                            @Override
                            public boolean onItemClick(View view, int position, IDrawerItem drawerItem) {
                                if (mFirebaseUser != null)
                                    mFirebaseAuth.signOut();
                                navigateToHome();
                                return true;
                            }
                        })
                )
                .build();

        createNavDrawer(toolbar);

        if (savedInstanceState == null) {
            FragmentManager fragmentManager = getSupportFragmentManager();
            fragmentManager.beginTransaction().replace(R.id.content, new SOSFragment()).commit();
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
                    fragmentTransaction.replace(R.id.content, new SOSFragment()).commit();
                    return true;
                case R.id.action_track_user:
                    isFragment1Shown = true;
                    isHomeActivityShown = false;
                    fragmentTransaction.replace(R.id.content, new TrackUserFragment()).commit();
                    return true;
                case R.id.action_fake_call:
                    isFragment2Shown = true;
                    isFragment1Shown = false;
                    isHomeActivityShown = false;
                    fragmentTransaction.replace(R.id.content, new FakeCallFragment()).commit();
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
                        new PrimaryDrawerItem().withName("Trusted Contacts")
                                .withIdentifier(1).withIcon(R.drawable.ic_contact_phone_black_24dp),
                        new PrimaryDrawerItem().withName("Explore")
                                .withIdentifier(2).withIcon(R.drawable.ic_explore_black_24dp),
                        new DividerDrawerItem(),
                        new PrimaryDrawerItem().withName("Settings")
                                .withIdentifier(3).withIcon(R.drawable.ic_settings_black_24dp),
                        new SecondaryDrawerItem().withName("Help")
                                .withIdentifier(4),
                        new SecondaryDrawerItem().withName("Send Feedback")
                                .withIdentifier(5),
                        new SecondaryDrawerItem().withName("About")
                                .withIdentifier(6),
                        new SecondaryDrawerItem().withName("Rate Us")
                                .withIdentifier(7)
                )
                .withOnDrawerItemClickListener(new Drawer.OnDrawerItemClickListener() {
                    @Override
                    public boolean onItemClick(View view, int position, IDrawerItem drawerItem) {
                        // add click listeners for nav drawer items
                        switch ((int) drawerItem.getIdentifier()) {
                            case 1:
                                startActivity(new Intent(getApplicationContext(), TrustedContactsActivity.class));
                                break;
                            case 3:
                                startActivity(new Intent(getApplicationContext(), SettingsActivity.class));
                                break;
                            case 6:
                                startActivity(new Intent(getApplicationContext(), AboutActivity.class));
                                break;
                        }
                        return false;
                    }
                })
                .build();
    }

    public void navigateToHome() {
        Toast.makeText(getApplicationContext(), "Please login to continue!", Toast.LENGTH_SHORT).show();
        startActivity(new Intent(getApplicationContext(), SigninActivity.class).addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_CLEAR_TASK));
    }
}