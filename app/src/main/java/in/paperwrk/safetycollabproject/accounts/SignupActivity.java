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

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.PhoneAuthCredential;
import com.google.firebase.auth.UserProfileChangeRequest;

import in.paperwrk.safetycollabproject.HomeActivity;
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.utilities.Helpers;

public class SignupActivity extends AppCompatActivity implements View.OnClickListener {

    private Button mSignUpButton;
    private TextView mSignInTextView;
    private TextInputEditText mEmailText;
    private TextInputEditText mNameText;
    private TextInputEditText mPhoneText;
    private TextInputEditText mPasswordText;
    private Helpers mHelpers;
    private FirebaseAuth mFirebaseAuth;


    private ImageView imageViewLogo;
    private EditText nameEditext, emailEditext, mobileEditext, passwordEditext;
    private Button registerButton;
    private String valid_name, valid_email, valid_phone, valid_password;
    private long duration = 5000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);
        imageViewLogo = (ImageView) findViewById(R.id.img_logo);
        flip_logo();
        init();

        registerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (check_validity()) {
                    Intent intent = new Intent(SignupActivity.this, SigninActivity.class);
                    startActivity(intent);
                    Toast.makeText(SignupActivity.this, "Please Login!!!", Toast.LENGTH_LONG).show();
                    finish();
                }
            }
        });
    }

    public void init() {
        nameEditext = (EditText) findViewById(R.id.name_edittext);
        emailEditext = (EditText) findViewById(R.id.email_edittext);
        mobileEditext = (EditText) findViewById(R.id.mobile_no_edittext);
        passwordEditext = (EditText) findViewById(R.id.password_editetxt);
        registerButton = (Button) findViewById(R.id.register_button);
    }

    public void flip_logo() {
        ObjectAnimator flip = ObjectAnimator.ofFloat(imageViewLogo, "rotationY", 0.0f, 360);
        flip.setDuration(duration);
        flip.setRepeatCount(Animation.INFINITE);
        flip.setInterpolator(new AnticipateOvershootInterpolator());
        flip.start();
    }

    public boolean check_validity() {
        valid_name = nameEditext.getText().toString();
        valid_email = emailEditext.getText().toString();
        valid_phone = mobileEditext.getText().toString();
        valid_password = passwordEditext.getText().toString();

        if (valid_name.length() == 0) {
            nameEditext.setError("Name is Required!!!");
            return false;
        }

        if (valid_email.length() == 0) {
            emailEditext.setError("Email is Required!!!");
            return false;
        } else if (Patterns.EMAIL_ADDRESS.matcher(valid_email).matches() == false) {
            emailEditext.setError("Valid Email is Required!!!");
            return false;
        }

        if (valid_phone.length() == 0) {
            mobileEditext.setError("Mobile Number is Required!!!");
            return false;
        } else if (Patterns.PHONE.matcher(valid_phone).matches() == false) {
            mobileEditext.setError("Valid Mobile Number is Required!!!");
            return false;
        }

        if (valid_password.length() < 6) {
            passwordEditext.setError("Password must be at least 6 digit!!!");
            return false;
        }

        return true;
    }
}