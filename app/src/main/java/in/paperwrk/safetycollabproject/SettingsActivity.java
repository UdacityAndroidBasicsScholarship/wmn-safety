package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import in.paperwrk.safetycollabproject.accounts.AccountActivity;

public class SettingsActivity extends AppCompatActivity {

    ListView mSettingsListView = null;
    String[] mSettingsItemArray = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        setTitle("Settings");

        mSettingsListView = findViewById(R.id.settings_list);
        mSettingsItemArray = getResources().getStringArray(R.array.settings_item_array);

        ArrayAdapter settingsArrayAdapter = new ArrayAdapter<>(getApplicationContext(), R.layout.layout_settings_item, mSettingsItemArray);
        mSettingsListView.setAdapter(settingsArrayAdapter);

        mSettingsListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int settingsItemIndex, long l) {
                switch (settingsItemIndex) {
                    case 0:
                        startActivity(new Intent(getApplicationContext(), AccountActivity.class));
                        break;
                    case 1:
                        startActivity(new Intent(getApplicationContext(), TrustedContactsActivity.class));
                        break;
                    case 2:
                        startActivity(new Intent(getApplicationContext(), SirenSoundActivity.class));
                        break;
                    case 3:
                        // TODO: Settings - Gestures
                        break;
                    case 4:
                        // TODO: Settings - Language
                        break;
                    case 5:
                        // TODO: Settings - Help and FAQs
                        break;
                    case 6:
                        startActivity(new Intent(getApplicationContext(), AboutActivity.class));
                        break;
                }
            }
        });
    }
}