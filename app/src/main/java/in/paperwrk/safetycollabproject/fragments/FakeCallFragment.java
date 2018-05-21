package in.paperwrk.safetycollabproject.fragments;


import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;

import in.paperwrk.safetycollabproject.R;


public class FakeCallFragment extends Fragment implements View.OnClickListener{


    ImageButton fakeCallButton;


    public FakeCallFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_fake_call, container, false);

        fakeCallButton = view.findViewById(R.id.fragment_fake_call_button);
        fakeCallButton.setOnClickListener(this);

        return view;
    }


    @Override
    public void onClick(View v) {

        Uri notification = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
        Ringtone ringtone = RingtoneManager.getRingtone(getActivity(),notification);
        ringtone.play();
    }
}
