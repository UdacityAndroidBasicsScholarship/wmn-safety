package in.paperwrk.safetycollabproject.activities;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.google.api.client.extensions.android.http.AndroidHttp;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.youtube.YouTube;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.fragments.ExploreFragment;

public class ExploreActivity extends AppCompatActivity {

    private static final String[] YOUTUBE_PLAYLISTS = {
            "PL65YYKprr-p4LgFb4OXl_UB8u3lSBNHG1",
    };
    private YouTube mYoutubeDataApi;
    private final GsonFactory mJsonFactory = new GsonFactory();
    private final HttpTransport mTransport = AndroidHttp.newCompatibleTransport();



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_explore);

        if (savedInstanceState == null) {
            mYoutubeDataApi = new YouTube.Builder(mTransport, mJsonFactory, null)
                    .setApplicationName(getResources().getString(R.string.app_name))
                    .build();

            getSupportFragmentManager().beginTransaction()
                    .add(R.id.container, ExploreFragment.newInstance(mYoutubeDataApi, YOUTUBE_PLAYLISTS))
                    .commit();
        }

    }



}
