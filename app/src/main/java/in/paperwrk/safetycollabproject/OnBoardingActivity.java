package in.paperwrk.safetycollabproject;

import android.animation.ArgbEvaluator;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.design.widget.CoordinatorLayout;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;

import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import in.paperwrk.safetycollabproject.accounts.SigninActivity;
import in.paperwrk.safetycollabproject.utilities.OnBoardingUtils;

public class OnBoardingActivity extends AppCompatActivity {

    /**
     * The {@link android.support.v4.view.PagerAdapter} that will provide
     * fragments for each of the sections. We use a
     * {@link FragmentPagerAdapter} derivative, which will keep every
     * loaded fragment in memory. If this becomes too memory intensive, it
     * may be best to switch to a
     * {@link android.support.v4.app.FragmentStatePagerAdapter}.
     */
    private SectionsPagerAdapter mSectionsPagerAdapter;

    private ImageButton mNextBtn;
    private Button mFinishBtn;
    private Button mSkipBtn;
    private Button mGetStartedBtn;

    ImageView zero, one, two, three;
    ImageView[] indicators;

    CoordinatorLayout mCoordinator;

    static final String TAG = "OnBoardingActivity";

    int page = 0; // to track the page position

    /**
     * The {@link ViewPager} that will host the section contents.
     */
    private ViewPager mViewPager;
    private FrameLayout bottomContainer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.activity_on_boarding);

        // Create the adapter that will return a fragment for each of the three
        // primary sections of the activity.
        mSectionsPagerAdapter = new SectionsPagerAdapter(getSupportFragmentManager());

        mNextBtn = findViewById(R.id.intro_btn_next);
        mFinishBtn = findViewById(R.id.intro_btn_finish);
        mSkipBtn = findViewById(R.id.intro_btn_skip);

        zero = findViewById(R.id.intro_indicator_0);
        one = findViewById(R.id.intro_indicator_1);
        two = findViewById(R.id.intro_indicator_2);
        three = findViewById(R.id.intro_indicator_3);

        mCoordinator = findViewById(R.id.main_content);

        indicators = new ImageView[]{zero, one, two, three};

        // Set up the ViewPager with the sections adapter.
        mViewPager = findViewById(R.id.container);
        bottomContainer = findViewById(R.id.bottom_container);
        mViewPager.setAdapter(mSectionsPagerAdapter);

        mViewPager.setCurrentItem(page);
        updateIndicators(page);

        final int color1 = ContextCompat.getColor(this, R.color.light_blue);
        final int color2 = ContextCompat.getColor(this, R.color.light_grey);
        final int color3 = ContextCompat.getColor(this, R.color.light_pink);
        final int color4 = ContextCompat.getColor(this, R.color.light_amber);

        final int color1Bottom = ContextCompat.getColor(this, R.color.dark_blue);
        final int color2Bottom = ContextCompat.getColor(this, R.color.dark_grey);
        final int color3Bottom = ContextCompat.getColor(this, R.color.dark_pink);
        final int color4Bottom = ContextCompat.getColor(this, R.color.dark_amber);

        final int[] colorList = new int[]{color1, color2, color3, color4};
        final int[] colorListBottom = new int[]{color1Bottom, color2Bottom, color3Bottom, color4Bottom};

        final ArgbEvaluator evaluator = new ArgbEvaluator();
        final ArgbEvaluator evaluatorBottom = new ArgbEvaluator();

        mViewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

         /*
         color update
          */
                int colorUpdate = (Integer) evaluator.evaluate(positionOffset, colorList[position],
                        colorList[position == 3 ? position : position + 1]);
                int colorUpdateBottom = (Integer) evaluatorBottom.evaluate(positionOffset,
                        colorListBottom[position], colorList[position == 3 ? position : position + 1]);
                mViewPager.setBackgroundColor(colorUpdate);
                bottomContainer.setBackgroundColor(colorUpdateBottom);
            }

            @Override
            public void onPageSelected(int position) {

                page = position;
                updateIndicators(page);

                switch (position) {
                    case 0:
                        mViewPager.setBackgroundColor(color1);
                        bottomContainer.setBackgroundColor(color1Bottom);
                        break;
                    case 1:
                        mViewPager.setBackgroundColor(color2);
                        bottomContainer.setBackgroundColor(color2Bottom);
                        break;
                    case 2:
                        mViewPager.setBackgroundColor(color3);
                        bottomContainer.setBackgroundColor(color3Bottom);
                        break;
                    case 3:
                        mViewPager.setBackgroundColor(color4);
                        bottomContainer.setBackgroundColor(color4Bottom);
                        break;
                }

                mNextBtn.setVisibility(position == 3 ? View.GONE : View.VISIBLE);
                mFinishBtn.setVisibility(position == 3 ? View.VISIBLE : View.GONE);
            }

            @Override
            public void onPageScrollStateChanged(int state) {

            }
        });

        mNextBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                page += 1;
                mViewPager.setCurrentItem(page, true);
            }
        });

        mSkipBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finishOnBoarding();
            }
        });

        mFinishBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finishOnBoarding();
            }
        });


    }

    private void finishOnBoarding() {
        //  update 1st time pref
        OnBoardingUtils.saveSharedSetting(OnBoardingActivity.this,
                getString(R.string.pref_user_first_time));
        Intent signInIntent = new Intent(OnBoardingActivity.this, SigninActivity.class);
        startActivity(signInIntent);
        finish();
    }

    void updateIndicators(int position) {
        for (int i = 0; i < indicators.length; i++) {
            indicators[i].setBackgroundResource(
                    i == position ? R.drawable.indicator_selected : R.drawable.indicator_unselected
            );
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_on_boarding, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    // Handle click event for the get started button
    public void getStarted(View view) {
        finishOnBoarding();
    }

    /**
     * A placeholder fragment containing a simple view.
     */
    public static class PlaceholderFragment extends Fragment {
        /**
         * The fragment argument representing the section number for this
         * fragment.
         */
        private static final String ARG_SECTION_NUMBER = "section_number";

        ImageView img;

        int[] bgs = new int[]{R.drawable.onboarding_image_1, R.drawable.onboarding_image_2,
                R.drawable.onboarding_image_3, R.drawable.onboarding_image_4};

        public PlaceholderFragment() {
        }

        /**
         * Returns a new instance of this fragment for the given section
         * number.
         */
        public static PlaceholderFragment newInstance(int sectionNumber) {
            PlaceholderFragment fragment = new PlaceholderFragment();
            Bundle args = new Bundle();
            args.putInt(ARG_SECTION_NUMBER, sectionNumber);
            fragment.setArguments(args);
            return fragment;
        }

        @Override
        public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container,
                                 Bundle savedInstanceState) {
            View rootView = inflater.inflate(R.layout.fragment_on_boarding, container, false);
            TextView sectionLabeltextView = rootView.findViewById(R.id.section_label);
            TextView sectionDescTextView = rootView.findViewById(R.id.section_desc);
            Button getStartedButton = rootView.findViewById(R.id.button_get_started);
            int pageNo = getArguments().getInt(ARG_SECTION_NUMBER);
            String sectionLabel = "";
            String sectionDescription = "";
            switch (pageNo) {
                case 1:
                    sectionLabel = getString(R.string.section_label_1);
                    sectionDescription = getString(R.string.section_desc_1);
                    break;
                case 2:
                    sectionLabel = getString(R.string.section_label_2);
                    sectionDescription = getString(R.string.section_desc_2);
                    break;
                case 3:
                    sectionLabel = getString(R.string.section_label_3);
                    sectionDescription = getString(R.string.section_desc_3);
                    break;
                case 4:
                    sectionLabel = getString(R.string.section_label_4);
                    sectionDescription = getString(R.string.section_desc_4);
                    getStartedButton.setVisibility(View.VISIBLE);
                    break;
            }
            sectionLabeltextView.setText(sectionLabel);
            sectionDescTextView.setText(sectionDescription);

            img = rootView.findViewById(R.id.section_img);
            img.setBackgroundResource(bgs[getArguments().getInt(ARG_SECTION_NUMBER) - 1]);

            return rootView;
        }
    }

    /**
     * A {@link FragmentPagerAdapter} that returns a fragment corresponding to
     * one of the sections/tabs/pages.
     */
    public class SectionsPagerAdapter extends FragmentPagerAdapter {

        public SectionsPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int position) {
            // getItem is called to instantiate the fragment for the given page.
            // Return a PlaceholderFragment (defined as a static inner class below).
            return PlaceholderFragment.newInstance(position + 1);
        }

        @Override
        public int getCount() {
            // Show 4 total pages.
            return 4;
        }

        @Nullable
        @Override
        public CharSequence getPageTitle(int position) {
            switch (position) {
                case 0:
                    return "SECTION 1";
                case 1:
                    return "SECTION 2";
                case 2:
                    return "SECTION 3";
                case 3:
                    return "SECTION 4";
            }
            return null;
        }
    }
}

