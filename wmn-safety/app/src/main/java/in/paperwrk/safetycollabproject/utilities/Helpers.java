package in.paperwrk.safetycollabproject.utilities;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.support.design.widget.Snackbar;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.Toast;

import com.google.android.gms.common.api.CommonStatusCodes;

import in.paperwrk.safetycollabproject.R;

public class Helpers {
    private Context mContext;
    private ProgressDialog mProgressDialog;

    public Helpers(Context mContext) {
        this.mContext = mContext;
    }

    public void showProgressDialog(String message) {
        mProgressDialog = new ProgressDialog(mContext);
        mProgressDialog.setMessage(message);
        mProgressDialog.setCancelable(false);
        mProgressDialog.setIndeterminate(true);
        mProgressDialog.show();
    }

    public void hideProgressDialog() {
        if (mProgressDialog != null) {
            mProgressDialog.dismiss();
        }
    }

    public String getErrorMessage(int statusCode) {
        String message = "";
        switch (statusCode) {
            case CommonStatusCodes.API_NOT_CONNECTED: //17
                message += mContext.getString(R.string.api_not_connected_msg);
                break;

            case CommonStatusCodes.DEVELOPER_ERROR: //10
                message += mContext.getString(R.string.developer_error_msg);
                break;

            case CommonStatusCodes.ERROR: //13
                message += mContext.getString(R.string.error_msg);
                break;

            case CommonStatusCodes.INTERNAL_ERROR: //8
                message += mContext.getString(R.string.internal_error_msg);
                break;

            case CommonStatusCodes.INVALID_ACCOUNT: //8
                message += mContext.getString(R.string.invalid_account_msg);
                break;

            case CommonStatusCodes.SIGN_IN_REQUIRED: //8
                message += mContext.getString(R.string.sign_in_required_msg);
                break;
        }
        return message;
    }

    public AlertDialog showAlertDialog(String title, String message) {
        AlertDialog.Builder builder = new AlertDialog.Builder(mContext);
        builder.setMessage(message)
                .setTitle(title);
        builder.setPositiveButton(R.string.OK, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.dismiss();
            }
        });
        return builder.create();
    }

    public void showToast(String message){
        Toast.makeText(mContext, message, Toast.LENGTH_SHORT).show();
    }

}
