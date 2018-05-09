package in.paperwrk.safetycollabproject;

import android.widget.ImageView;
import android.widget.TextView;

import com.mindorks.placeholderview.annotations.Layout;
import com.mindorks.placeholderview.annotations.NonReusable;
import com.mindorks.placeholderview.annotations.Resolve;
import com.mindorks.placeholderview.annotations.View;

import in.paperwrk.safetycollabproject.R;

/**
 * Created by NITISH KUMAR on 08-05-2018.
 */
@NonReusable
@Layout(R.layout.drawer_header)
public class DrawerHeader {

    @View(R.id.profileImageView)
    private ImageView profileImage;

    @View(R.id.nameText)
    private TextView nameText;

    @Resolve
    private void onResolved() {
        nameText.setText("NIRBHEEK");
    }
}
