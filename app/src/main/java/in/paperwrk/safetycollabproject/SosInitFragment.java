package in.paperwrk.safetycollabproject;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.skyfishjy.library.RippleBackground;

public class SosInitFragment extends Fragment {

    private RippleBackground rippleBackground;
    private TextView textView;
    private View view;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_sos_init, container, false);
        rippleBackground = (RippleBackground) view.findViewById(R.id.content);
        rippleBackground.startRippleAnimation();
        return view;
    }
}
