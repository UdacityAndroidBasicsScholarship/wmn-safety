package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.common.SignInButton;

import in.paperwrk.safetycollabproject.R;

public class SigninActivity extends AppCompatActivity implements View.OnClickListener {

    private SignInButton mGoogleSignInButton;
    private Button mSignInButton;
    private TextView mSignUpTextView;
    private TextView mForgotPasswordTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        mGoogleSignInButton = findViewById(R.id.sign_in_goggle_button);
        mGoogleSignInButton.setSize(SignInButton.SIZE_WIDE);
        mGoogleSignInButton.setColorScheme(SignInButton.COLOR_DARK);

        mSignInButton = findViewById(R.id.sign_in_button);
        mSignUpTextView = findViewById(R.id.sign_in_register_tv);
        mForgotPasswordTextView = findViewById(R.id.sign_in_forgot_pass_tv);


        mGoogleSignInButton.setOnClickListener(this);
        mSignInButton.setOnClickListener(this);
        mSignUpTextView.setOnClickListener(this);
        mForgotPasswordTextView.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();

        switch (id) {
            case R.id.sign_in_button:
                doSignIn();
                break;
            case R.id.sign_in_goggle_button:
                doGoogleSignIn();
                break;
            case R.id.sign_in_register_tv:
                showSignUp();
                break;
            case R.id.sign_in_forgot_pass_tv:
                showForgotPassword();
                break;
            default:
                break;
        }
    }

    private void showForgotPassword() {
        Intent intent = new Intent(this, ForgotPasswordActivity.class);
        startActivity(intent);
    }

    private void showSignUp() {
        Intent intent = new Intent(this, SignupActivity.class);
        startActivity(intent);
    }

    private void doGoogleSignIn() {
        Toast.makeText(this, R.string.implementation_in_progress, Toast.LENGTH_SHORT).show();
    }

    private void doSignIn() {
        Toast.makeText(this, R.string.implementation_in_progress, Toast.LENGTH_SHORT).show();
    }
}
