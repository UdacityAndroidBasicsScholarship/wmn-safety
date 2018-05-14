package in.paperwrk.safetycollabproject;

import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

public class NavigationDrawer extends AppCompatActivity {

    private DrawerLayout drawerLayout;
    private NavigationView navigation_view;
    private ActionBarDrawerToggle actionBar;

    private Toolbar mTopToolbar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_navigation_drawer);

        mTopToolbar = findViewById(R.id.my_toolbar);
        setSupportActionBar(mTopToolbar);

        drawerLayout = findViewById(R.id.drawerLayout);
        navigation_view = findViewById(R.id.navigation_view);
        actionBar = new ActionBarDrawerToggle(this, drawerLayout, R.string.Open, R.string.Close);

        drawerLayout.addDrawerListener(actionBar);
        actionBar.syncState();

        if (getSupportActionBar() != null) {
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        }


        navigation_view.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() //Set a listener that will be notified when a menu item is selected.
        {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) //Listeners for handling events
            {

                int id = item.getItemId();
                /*Toast toastobject=null;

                if(toastobject!= null)
                {
                    toastobject.cancel();
                }
*/
                switch (id) {
                    case R.id.navigation_trusted_contacts:
                        Toast.makeText(NavigationDrawer.this, "Trusted Contacts", Toast.LENGTH_SHORT).show();
                        break;

                    case R.id.navigation_explore:
                        Toast.makeText(NavigationDrawer.this, "Explore", Toast.LENGTH_SHORT).show();
                        break;

                    case R.id.navigation_settings:
                        Toast.makeText(NavigationDrawer.this, "Settings", Toast.LENGTH_SHORT).show();
                        break;

                    case R.id.Help:
                        Toast.makeText(NavigationDrawer.this, "Help", Toast.LENGTH_SHORT).show();
                        break;

                    case R.id.Feedback:
                        Toast.makeText(NavigationDrawer.this, "Feedback", Toast.LENGTH_SHORT).show();
                        break;
                    default:
                        return true;
                }

                return false;
                /*item.setChecked(true);

                drawerLayout.closeDrawers();*/
            }

        });
    }

    public boolean onOptionsItemSelected(MenuItem item) {
        if (actionBar.onOptionsItemSelected(item))
            return true;

        return super.onOptionsItemSelected(item);
    }
    /*@Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.drawer_menu, menu);
        return true;*/
}




