package in.paperwrk.safetycollabproject.activities;

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

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
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

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.accounts.ManageAccountActivity;
import in.paperwrk.safetycollabproject.accounts.SigninActivity;
import in.paperwrk.safetycollabproject.fragments.FakeCallFragment;
import in.paperwrk.safetycollabproject.fragments.SOSFragment;
import in.paperwrk.safetycollabproject.fragments.TrackUserFragment;

public class HomeActivity extends AppCompatActivity {

    Drawer result = null;
    private AccountHeader headerResult = null;
    FragmentManager mFragmentManager;
    public static boolean isHomeActivityShown;
    public static boolean isFragment1Shown = false;
    public boolean isFragment2Shown = false;
    String mFullName = "", mEmail = null;
    FirebaseDatabase mFirebaseDatabase = null;
    DatabaseReference mDatabaseReference = null;
    FirebaseAuth mFirebaseAuth = null;
    FirebaseUser mFirebaseUser = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestEmail()
                .build();

        final GoogleSignInClient mGoogleSignInClient = GoogleSignIn.getClient(this, gso);

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
            getUserName(mFirebaseUser.getUid());

        } else {
            navigateToHome();
        }

        IProfile profile = new ProfileDrawerItem().withName(mFullName)
                .withTextColor(getResources().getColor(android.R.color.black))
                .withEmail(mEmail).withIcon(R.mipmap.ic_launcher)
                .withIdentifier(100);

        headerResult = new AccountHeaderBuilder()
                .withActivity(this)
                .withHeaderBackground(R.color.colorPrimary)
                .withSavedInstance(savedInstanceState)
                .withTranslucentStatusBar(true)
                .addProfiles(profile,
                        new ProfileSettingDrawerItem().withName("Manage Account")
                                .withIcon(R.drawable.ic_settings_black_24dp)
                                .withOnDrawerItemClickListener(new Drawer.OnDrawerItemClickListener() {
                            @Override
                            public boolean onItemClick(View view, int position, IDrawerItem drawerItem) {
                                startActivity(new Intent(getApplicationContext(), ManageAccountActivity.class));
                                return true;
                            }
                        }),
                        new ProfileSettingDrawerItem().withName("Logout")
                                .withIcon(R.drawable.ic_logout_24dp)
                                .withOnDrawerItemClickListener(new Drawer.OnDrawerItemClickListener() {
                            @Override
                            public boolean onItemClick(View view, int position, IDrawerItem drawerItem) {
                                if (mFirebaseUser != null) {
                                    mFirebaseAuth.signOut();
                                    mFirebaseAuth.signOut();
                                }
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
                                .withIcon(R.drawable.ic_help_black_24dp)
                                .withIdentifier(4),
                        new SecondaryDrawerItem().withName("Send Feedback")
                                .withIcon(R.drawable.ic_feedback_black_24dp)
                                .withIdentifier(5),
                        new SecondaryDrawerItem().withName("About")
                                .withIcon(R.drawable.ic_info_outline_black_24dp)
                                .withIdentifier(6),
                        new SecondaryDrawerItem().withName("Rate Us")
                                .withIcon(R.drawable.ic_star_black_24dp)
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
                            case 2:
                                startActivity(new Intent(getApplicationContext(),ExploreActivity.class));
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

    public void getUserName(final String UID) {
        final StringBuffer buffer = new StringBuffer("");
        ValueEventListener eventListener = new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for (DataSnapshot snapshot : dataSnapshot.getChildren()) {
                    if (snapshot.getKey().equals("name")) {
                        buffer.append(snapshot.getValue());
                    }
                }
                mFullName = buffer.toString();
                updateProfile();
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
            }
        };
        mDatabaseReference.child("users").child(UID).addListenerForSingleValueEvent(eventListener);

    }

    public void updateProfile() {
        IProfile profile = new ProfileDrawerItem().withName(mFullName)
                .withTextColor(getResources().getColor(android.R.color.black))
                .withEmail(mEmail).withIcon(R.mipmap.ic_launcher)
                .withIdentifier(100);
        headerResult.updateProfile(profile);
    }
}