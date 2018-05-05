package in.paperwrk.safetycollabproject.fragments;


import android.content.Context;
import android.os.Bundle;
import android.support.annotation.MenuRes;
import android.support.annotation.NonNull;
import android.support.design.internal.BottomNavigationMenu;
import android.support.design.internal.BottomNavigationMenuView;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import in.paperwrk.safetycollabproject.R;


/**
 * A simple {@link Fragment} subclass.
 */
public class HomeFragment extends Fragment {

    private View mRootView;
    private BottomNavigationView mBottomNavigationView;

    public HomeFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        mRootView = inflater.inflate(R.layout.fragment_home, container, false);
        mBottomNavigationView = mRootView.findViewById(R.id.bottom_navigation);
        mBottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                changeBottomNavigation(item);
                return false;
            }
        });
        setMyFragment(new SosFragment());
        return mRootView;
    }

    private void setMyFragment(Fragment fragment) {
        getChildFragmentManager()
                .beginTransaction()
                .replace(R.id.home_container, fragment)
                .commit();
    }


    public void changeBottomNavigation(MenuItem item) {
        int id = item.getItemId();
        item.setChecked(true);
        Fragment fragment = null;
        switch (id) {
            case R.id.nav_bottom_sos:
                fragment = new SosFragment();
                break;

            case R.id.nav_bottom_track_me:
                fragment = new TrackMeFragment();
                break;
        }

        if (fragment != null) {
            setMyFragment(fragment);
        }

    }
}
