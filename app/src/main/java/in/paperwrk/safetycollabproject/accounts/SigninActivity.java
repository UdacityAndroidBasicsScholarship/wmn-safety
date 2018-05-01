package in.paperwrk.safetycollabproject.accounts;

import android.animation.ObjectAnimator;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnticipateOvershootInterpolator;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.SignInButton;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GoogleAuthProvider;

import in.paperwrk.safetycollabproject.HomeActivity;
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.utilities.Helpers;

public class SigninActivity extends AppCompatActivity implements View.OnClickListener {

    private static final String TAG = SigninActivity.class.getSimpleName();
    private static final int RC_SIGN_IN = 1011;

    private SignInButton mGoogleSignInButton;
    private Button mSignInButton;
    private TextView mSignUpTextView;
    private TextView mForgotPasswordTextView;
    private FirebaseAuth mFirebaseAuth;
    private GoogleSignInClient mGoogleSigninClient;
    private TextInputEditText mEmailText;
    private TextInputEditText mPasswordText;
    private Helpers mHelpers;


    private ImageView imageViewLogo;
    private EditText emailEditext, passwordEditext;
    private Button loginButton, registerButton, forgotPasswordButton;
    private String valid_email, valid_password;
    private long duration = 5000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);
        imageViewLogo = (ImageView) findViewById(R.id.img_logo);
        flip_logo();
        init();

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (check_validity()) {
                    Toast.makeText(SigninActivity.this, " Login Successfully !!! ", Toast.LENGTH_SHORT).show();
                }
            }
        });

        registerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(SigninActivity.this, SignupActivity.class);
                startActivity(intent);
                finish();
            }
        });

        forgotPasswordButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(SigninActivity.this, ForgotPasswordActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }

    public void init() {
        emailEditext = (EditText) findViewById(R.id.email_edittext);
        passwordEditext = (EditText) findViewById(R.id.password_editetxt);
        loginButton = (Button) findViewById(R.id.login_button);
        registerButton = (Button) findViewById(R.id.register_button);
        forgotPasswordButton = (Button) findViewById(R.id.forgot_password_button);
    }

    public void flip_logo() {
        ObjectAnimator flip = ObjectAnimator.ofFloat(imageViewLogo, "rotationY", 0.0f, 360);
        flip.setDuration(duration);
        flip.setRepeatCount(Animation.INFINITE);
        flip.setInterpolator(new AnticipateOvershootInterpolator());
        flip.start();
    }

    public boolean check_validity() {
        valid_email = emailEditext.getText().toString();
        valid_password = passwordEditext.getText().toString();

        if (valid_email.length() == 0) {
            emailEditext.setError("Email is Required!!!");
            return false;
        } else if (Patterns.EMAIL_ADDRESS.matcher(valid_email).matches() == false) {
            emailEditext.setError("Valid Email is Required!!!");
            return false;
        }

        if (valid_password.length() < 6) {
            passwordEditext.setError("Enter Correct Password!!!");
            return false;
        }
        return true;
    }
}
