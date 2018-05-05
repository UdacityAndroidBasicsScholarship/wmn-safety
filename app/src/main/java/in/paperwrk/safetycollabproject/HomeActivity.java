package in.paperwrk.safetycollabproject;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

public class HomeActivity extends AppCompatActivity{

    private TextView sos;
    private TextView trackme;
    private TextView fakecall;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        sos = (TextView) findViewById(R.id.text_favorites);
        trackme = (TextView) findViewById(R.id.text_schedules);
        fakecall = (TextView) findViewById(R.id.text_music);

        BottomNavigationView bottomNavigationView = (BottomNavigationView)
                findViewById(R.id.bottom_navigation);

        bottomNavigationView.setOnNavigationItemSelectedListener(
                new BottomNavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                        switch (item.getItemId()) {
                            case R.id.action_favorites:
                                sos.setVisibility(View.VISIBLE);
                                trackme.setVisibility(View.GONE);
                                fakecall.setVisibility(View.GONE);
                                break;
                            case R.id.action_schedules:
                                sos.setVisibility(View.GONE);
                                trackme.setVisibility(View.VISIBLE);
                                fakecall.setVisibility(View.GONE);
                                break;
                            case R.id.action_music:
                                sos.setVisibility(View.GONE);
                                trackme.setVisibility(View.GONE);
                                fakecall.setVisibility(View.VISIBLE);
                                break;
                        }
                        return false;
                    }
                });

    }

}
