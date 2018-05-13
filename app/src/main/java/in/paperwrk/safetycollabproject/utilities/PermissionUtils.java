package in.paperwrk.safetycollabproject.utilities;

import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.Fragment;
import android.support.v7.app.AlertDialog;

import java.util.ArrayList;
import java.util.List;

import in.paperwrk.safetycollabproject.R;

import static in.paperwrk.safetycollabproject.utilities.AppConstantInts.REQUEST_PERMISSION_CALLBACK;
import static in.paperwrk.safetycollabproject.utilities.AppConstantInts.REQUEST_PERMISSION_SETTINGS;
import static in.paperwrk.safetycollabproject.utilities.SharedPrefs.getEditor;
import static in.paperwrk.safetycollabproject.utilities.SharedPrefs.getSharedPref;


/**
 * Created by srdpatel on 3/4/2018. Use for run time permission management.
 *
 * @since 1.0
 */

public class PermissionUtils {

    //region Global variables
    private boolean sentToSettings; //set to global in case of mutation
    private Activity activity;
    private Fragment fragment;
    private String permissionReason;
    //endregion

    /**
     * Public constructor
     *
     * @param activity             An Activity
     * @param fragment             A Fragment
     * @since 1.0
     */
    public PermissionUtils(Activity activity, Fragment fragment) {
        this.activity = activity;
        this.fragment = fragment;
    }

    /**
     * Only method to call and it will handle run time permission from anywhere
     *
     * @param mContext         Context
     * @param permissions      Pass a string array of permissions those need to be checked
     * @param permissionReason A string that describes why do we need that permission in case of rational prompt
     * @return true if required permissions have been granted already
     * @since 1.0
     */
    public boolean isAllPermissionsGranted(Context mContext, String[] permissions, String permissionReason) {
        this.permissionReason = permissionReason;
        //Check if permission has granted or not
        if (!hasPermission(mContext, permissions)) {
            //Check if permission has denied with or without "don't ask again" option
            //If "don't ask again" was not checked, show reason for permission
            if (shouldShowRational(permissions, mContext)) {
                showPermissionReason(mContext, permissions);
                //If "don't ask again" was checked, show dialog to redirect to permission settings
            } else if (getSharedPref(mContext).getBoolean(PrefKeys.ALREADY_ASKED_PERMISSION, false)) {
                redirectToSettings(mContext);
                //Otherwise, it is very first time the permission dialog is going to be opened
            } else {
                askForPermission(permissions, mContext);
            }
            //Store that we have already asked for permission despite of what user has granted and what not
            getEditor(mContext).putBoolean(PrefKeys.ALREADY_ASKED_PERMISSION, true);
            getEditor(mContext).apply();
            return false;
        } else {
            return true;
        }
    }

    /**
     * Checks whether required permissions have been granted or not
     * Being used in {@link #isAllPermissionsGranted(Context, String[], String)}
     *
     * @param mContext    Context
     * @param permissions A String array consisting of required permissions
     * @return true if required permissions have been granted otherwise false
     * @since 1.0
     */
    private boolean hasPermission(Context mContext, String[] permissions) {
        for (int i = 0; i < permissions.length - 1; i++) {
            if (ActivityCompat.checkSelfPermission(mContext, permissions[i]) != PackageManager.PERMISSION_GRANTED) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks whether to show or not a rational dialog prompt asking or explaining about required permissions
     * Being used in {@link #isAllPermissionsGranted(Context, String[], String)}
     *
     * @param permissions A string array of required permissions those need to be checked
     * @param mContext    Context
     * @return true if rational dialog is allowed for required permissions otherwise false
     * @since 1.0
     */
    private boolean shouldShowRational(String[] permissions, Context mContext) {
        List<String> nonGranted = new ArrayList<>();
        for (int i = 0; i < permissions.length - 1; i++) {
            if (ActivityCompat.checkSelfPermission(mContext, permissions[i]) != PackageManager.PERMISSION_GRANTED) {
                nonGranted.add(permissions[i]);
            }
        }
        String[] permissionsToCheck = (String[]) nonGranted.toArray(new String[0]);
        if (fragment != null) {
            for (int i = 0; i < permissionsToCheck.length - 1; i++) {
                if (!fragment.shouldShowRequestPermissionRationale(permissionsToCheck[i])) {
                    return false;
                }
            }
        } else if (activity != null) {
            for (int i = 0; i < permissionsToCheck.length - 1; i++) {
                if (!ActivityCompat.shouldShowRequestPermissionRationale(activity, permissionsToCheck[i])) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Shows explanation about our required permissions on rational dialog prompt
     * Being used in {@link #isAllPermissionsGranted(Context, String[], String)}
     *
     * @param mContext    Context
     * @param permissions A string array of required permissions
     * @since 1.0
     */
    private void showPermissionReason(final Context mContext, final String[] permissions) {
        AlertDialog.Builder builder = new AlertDialog.Builder(mContext);
        builder.setTitle(mContext.getResources().getString(R.string.label_title_dialog_permission));
        builder.setMessage(permissionReason);
        builder.setPositiveButton(mContext.getResources().getString(R.string.label_grant), new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.cancel();
                askForPermission(permissions, mContext);
            }
        });
        builder.setNegativeButton(mContext.getResources().getString(R.string.label_cancel), new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.cancel();
            }
        });
        builder.show();
    }

    /**
     * Redirects the user to the permission settings of the application
     * <p>
     * This is useful in case of user has denied the permission with do not ask me again check.
     * So that we can show why do we need the permission and we give a good UX that redirects the user
     * right from the dialog that will be showing explanation about permission/s
     * <p>
     * Use {@link #isAllPermissionsGranted(Context, String[], String)}
     *
     * @param mContext Context
     * @since 1.0
     */
    private void redirectToSettings(final Context mContext) {
        AlertDialog.Builder builder = new AlertDialog.Builder(mContext);
        builder.setTitle(mContext.getResources().getString(R.string.label_title_dialog_permission));
        builder.setMessage(mContext.getResources().getString(R.string.label_des_permission_storage));
        builder.setPositiveButton(mContext.getResources().getString(R.string.label_grant), new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.cancel();
                sentToSettings = true;
                Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
                Uri uri = Uri.fromParts(AppConstantStrings.STR_PACKAGE, mContext.getPackageName(), null);
                intent.setData(uri);
                // TODO: 3/4/2018 by sagar  Callback?
                if (fragment != null) {
                    fragment.startActivityForResult(intent, REQUEST_PERMISSION_SETTINGS);
                } else if (activity != null) {
                    activity.startActivityForResult(intent, REQUEST_PERMISSION_SETTINGS);
                }
            }
        });
        builder.setNegativeButton(mContext.getResources().getString(R.string.label_cancel), new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.cancel();
            }
        });
        builder.show();
    }

    /**
     * Default and native android dialog that asks for the permission/s
     * <p>
     * This dialog will be appeared while asking the user for required permission/s
     * <p>
     * Being used in {@link #isAllPermissionsGranted(Context, String[], String)} and in {@link #showPermissionReason(Context, String[])}
     *
     * @param permissions A string array of required permissions
     * @param mContext    Context
     * @since 1.0
     */
    private void askForPermission(String[] permissions, Context mContext) {
        List<String> nonGranted = new ArrayList<>();
        for (int i = 0; i < permissions.length - 1; i++) {
            if (ActivityCompat.checkSelfPermission(mContext, permissions[i]) != PackageManager.PERMISSION_GRANTED) {
                nonGranted.add(permissions[i]);
            }
        }
        String[] pendingPermissions = (String[]) nonGranted.toArray(new String[0]);
        if (fragment != null) {
            fragment.requestPermissions(pendingPermissions, REQUEST_PERMISSION_CALLBACK);
        } else if (activity != null) {
            ActivityCompat.requestPermissions(activity, pendingPermissions, REQUEST_PERMISSION_CALLBACK);
        }
    }
}
