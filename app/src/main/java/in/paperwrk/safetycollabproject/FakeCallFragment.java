package in.paperwrk.safetycollabproject;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.skyfishjy.library.RippleBackground;


public class FakeCallFragment extends Fragment {

    private RippleBackground rippleBackground;
    private ImageView call_image;
    private View view;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_fake_call, container, false);
        rippleBackground = (RippleBackground) view.findViewById(R.id.content);
        rippleBackground.startRippleAnimation();
        call_image = (ImageView) view.findViewById(R.id.fake_call_button);
        call_image.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getActivity(), "Fake call initiated!!!", Toast.LENGTH_SHORT).show();
            }
        });
        return view;
    }
}
