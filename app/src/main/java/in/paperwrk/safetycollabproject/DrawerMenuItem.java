package in.paperwrk.safetycollabproject;

import android.content.Context;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.mindorks.placeholderview.annotations.Click;
import com.mindorks.placeholderview.annotations.Layout;
import com.mindorks.placeholderview.annotations.Resolve;
import com.mindorks.placeholderview.annotations.View;

import in.paperwrk.safetycollabproject.R;

/**
 * Created by NITISH KUMAR on 08-05-2018.
 */
@Layout(R.layout.drawer_item)
public class DrawerMenuItem {
    public static final int TRUSTED_CONTACTS = 1;
    public static final int EXPLORE = 2;
    public static final int SETTINGS = 3;
    public static final int HELP = 4;
    public static final int SEND_FEEDBACK = 5;

    private int mMenuPosition;
    private Context mContext;
    private DrawerCallBack mCallBack;

    @View(R.id.itemNameTxt)
    private TextView itemNameTxt;

    @View(R.id.itemIcon)
    private ImageView itemIcon;

    public DrawerMenuItem(Context context, int menuPosition) {
        mContext = context;
        mMenuPosition = menuPosition;
    }

    @Resolve
    public void onResolved() {
        switch (mMenuPosition) {
            case TRUSTED_CONTACTS:
                itemNameTxt.setText("Trusted Contacts");
                break;

            case EXPLORE:
                itemNameTxt.setText("Explore");
                break;

            case SETTINGS:
                itemNameTxt.setText("Settings");
                break;

            case HELP:
                itemIcon.setVisibility(android.view.View.GONE);
                itemNameTxt.setText("Help");
                break;

            case SEND_FEEDBACK:
                itemIcon.setVisibility(android.view.View.GONE);
                itemNameTxt.setText("Feedback");
                break;
        }
    }

    @Click(R.id.mainView)
    public void onMenuItemClick() {
        switch (mMenuPosition) {
            case TRUSTED_CONTACTS:
                Toast.makeText(mContext, "Trusted Contacts", Toast.LENGTH_SHORT).show();
                if (mCallBack != null) mCallBack.onTrustedContactSelected();
                break;

            case EXPLORE:
                Toast.makeText(mContext, "Explore", Toast.LENGTH_SHORT).show();
                if (mCallBack != null) mCallBack.onExploreSelected();
                break;

            case SETTINGS:
                Toast.makeText(mContext, "Setting", Toast.LENGTH_SHORT).show();
                if (mCallBack != null) mCallBack.onSettingSelected();
                break;

            case HELP:
                Toast.makeText(mContext, "Help", Toast.LENGTH_SHORT).show();
                if (mCallBack != null) mCallBack.onHelpSelected();
                break;

            case SEND_FEEDBACK:
                Toast.makeText(mContext, "Send Feedback", Toast.LENGTH_SHORT).show();
                if (mCallBack != null) mCallBack.onSendFeedbackSelected();
                break;
        }
    }

    public void setDrawerCallBack(DrawerCallBack callBack) {
        mCallBack = callBack;
    }

    public interface DrawerCallBack {
        void onTrustedContactSelected();

        void onExploreSelected();

        void onSettingSelected();

        void onHelpSelected();

        void onSendFeedbackSelected();
    }

}
