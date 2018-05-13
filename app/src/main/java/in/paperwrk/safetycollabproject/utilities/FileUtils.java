package in.paperwrk.safetycollabproject.utilities;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.widget.Toast;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Calendar;

import in.paperwrk.safetycollabproject.R;

/**
 * Created by srdpatel on 2/28/2018.
 * <p>
 * All file, directory, storage related methods, utilities being used in application should be gone to here
 * <p>
 *
 * @since 1.0
 */

public class FileUtils {

    /**
     * Gives the file path from the Uri
     *
     * @param contentUri Uri from which we want to get the file path
     * @return A string of file path
     * @since 1.0
     */
    public static String getPathFromUri(Uri contentUri) {
        return getFileFromUri(contentUri).getAbsolutePath();
    }

    /**
     * Gives the file from the Uri
     *
     * @param contentUri Uri from which we want to get the file
     * @return A {@link File}
     * @since 1.0
     */
    public static File getFileFromUri(Uri contentUri) {
        File file = null;
        if (contentUri != null) {
            file = new File(contentUri.getPath());
        }
        return file;
    }

    /**
     * Gives the Bitmap from the Uri
     *
     * @param contentUri Uri from which we want to get the Bitmap
     * @return A {@link Bitmap}
     * @since 1.0
     */
    public static Bitmap getBitmapFromUri(Uri contentUri) {
        Bitmap mBitmap = null;
        File file = getFileFromUri(contentUri);
        try {
            InputStream ims = new FileInputStream(file);
            mBitmap = BitmapFactory.decodeStream(ims);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return mBitmap;
    }

    /**
     * Gives the Bitmap from the Uri using {@link android.content.ContentResolver}
     *
     * @param mContext {@link Context}
     * @param contentUri Uri from which we want to get the file path
     * @return A {@link Bitmap}
     * @since 1.0
     */
    public static Bitmap getBitmapByContentResolver(Context mContext, Uri contentUri) {
        Bitmap mBitmap = null;
        if (contentUri != null) {
            try {
                mBitmap = MediaStore.Images.Media.getBitmap(
                        mContext.getContentResolver(), contentUri);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return mBitmap;
    }

    /**
     * Gives the application image directory {@link File}
     *
     * @return Application image directory {@link File}
     * @since 1.0
     */
    public static File getAppImageDir() {
        File myFolder = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES) + AppConstantStrings.STR_DIR_APP
                + AppConstantStrings.STR_DIR_APP_IMAGES);
        if (!myFolder.exists()) {
            myFolder.mkdirs();
        }
        return myFolder;
    }

    /**
     * Saves the image {@link Bitmap} to the application image directory
     * <P>
     * Return type is set to application image directory {@link File} where the image has been saved
     * considering a case where it needs to be referred after saving the image
     * </P>
     *
     * @param mContext {@link Context}
     * @param mBitmap {@link Bitmap}
     * @return Application image directory {@link File} to refer further in case of any
     * @since 1.0
     */
    public static File saveImage(Context mContext, Bitmap mBitmap) {
        String imagePath = null;
        File imageFile = null;
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        mBitmap.compress(Bitmap.CompressFormat.PNG, 90, byteArrayOutputStream);

        File myFolder = getAppImageDir();

        try {
            imageFile = new File(myFolder, Calendar.getInstance().getTimeInMillis() + ".PNG");
            imageFile.createNewFile();
            FileOutputStream fileOutputStream = new FileOutputStream(imageFile);
            fileOutputStream.write(byteArrayOutputStream.toByteArray());

            MediaScannerConnection.scanFile(mContext, new String[]{imageFile.getPath()},
                    new String[]{"image/*"}, null);

            fileOutputStream.close();
            Toast.makeText(mContext,
                    String.format("%s, %s", mContext.getResources().getString(R.string.msg_toast_file_saved_to), imageFile.getAbsolutePath()),
                    Toast.LENGTH_SHORT).show();
            imagePath = imageFile.getAbsolutePath();

        } catch (IOException e) {
            e.printStackTrace();
        }
        return imageFile;
    }
}
