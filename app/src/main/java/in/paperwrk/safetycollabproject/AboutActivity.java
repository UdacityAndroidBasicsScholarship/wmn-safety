package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class AboutActivity extends AppCompatActivity {

    ListView mAboutListView = null;
    String[] mAboutItemArray = null, mAboutItemSecondaryArray = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        setTitle("About");

        mAboutListView = findViewById(R.id.about_list);
        mAboutItemArray = getResources().getStringArray(R.array.about_item_array);
        mAboutItemSecondaryArray = getResources().getStringArray(R.array.about_item_secondary_array);

        ArrayAdapter aboutArrayAdapter = new ArrayAdapter<>(getApplicationContext(), R.layout.layout_about_item, mAboutItemArray);
        mAboutListView.setAdapter(aboutArrayAdapter);

        mAboutListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int aboutItemIndex, long l) {
                switch (aboutItemIndex) {
                    case 0:
                        Toast.makeText(getApplicationContext(), "Nirbheek", Toast.LENGTH_SHORT).show();
                        break;
                    case 1:
                        Toast.makeText(getApplicationContext(), "0.1.8", Toast.LENGTH_SHORT).show();
                        break;
                    case 2:
                        startActivity(new Intent(Intent.ACTION_VIEW).setData(Uri.parse("https://github.com/UdacityAndroidBasicsScholarship/wmn-safety")));
                        break;
                    case 3:
                        Toast.makeText(getApplicationContext(), "MIT", Toast.LENGTH_SHORT).show();
                        break;
                    case 4:
                        // TODO: Open a OpenSourceLicenseActivity
                        break;
                }
            }
        });
    }
}