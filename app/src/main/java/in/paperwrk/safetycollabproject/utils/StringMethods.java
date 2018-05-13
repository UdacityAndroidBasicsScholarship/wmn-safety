package in.paperwrk.safetycollabproject.utils;

import android.widget.EditText;

/**
 * Created by srdpatel on 3/2/2018.
 * <p>
 * All string methods being used in application should be gone to here
 * <p>
 *
 * @since 1.0
 */

public class StringMethods {

    public static String getNonNullString (EditText mEditText, String defaultString){
        return  mEditText.getText().toString().isEmpty() ? defaultString : mEditText.getText().toString();
    }

    public static String getNonNullString (String stringValue, String defaultString){
        return  stringValue == null || stringValue.isEmpty() ? "" : stringValue;
    }
}
