package in.paperwrk.safetycollabproject.fragments;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import in.paperwrk.safetycollabproject.R;


/**
 * A simple {@link Fragment} subclass.
 */
public class FakeCallFragment extends Fragment {


    public FakeCallFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_fake_call, container, false);
    }

}
