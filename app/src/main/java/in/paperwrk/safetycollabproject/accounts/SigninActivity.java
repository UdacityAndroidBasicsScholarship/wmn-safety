package in.paperwrk.safetycollabproject.accounts;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.google.android.gms.common.SignInButton;

import in.paperwrk.safetycollabproject.R;

public class SigninActivity extends AppCompatActivity {

    private SignInButton mGoogleSignInButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        mGoogleSignInButton= findViewById(R.id.sign_in_goggle_button);
        mGoogleSignInButton.setSize(SignInButton.SIZE_WIDE);
        mGoogleSignInButton.setColorScheme(SignInButton.COLOR_DARK);
    }
}
