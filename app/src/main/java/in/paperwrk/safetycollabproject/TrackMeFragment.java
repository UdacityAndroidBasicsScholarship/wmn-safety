package in.paperwrk.safetycollabproject;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.Toast;

import com.skyfishjy.library.RippleBackground;


public class TrackMeFragment extends Fragment {

    private FloatingActionButton share_location_button;
    private View view;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_track_me, container, false);
        share_location_button = (FloatingActionButton) view.findViewById(R.id.share_button);
        share_location_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getActivity(), "Location is shared!!!", Toast.LENGTH_SHORT).show();
            }
        });
        return view;
    }
}
