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
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.utilities.Helpers;

public class ForgotPasswordActivity extends AppCompatActivity implements View.OnClickListener {

    private Button mForgotButton;
    private TextInputEditText mEmailText;
    private Helpers mHelpers;
    private FirebaseAuth mFirebaseAuth;

    private ImageView imageViewLogo;
    private EditText emailEditext;
    private Button resetPasswordButton, loginButton, registerButton;
    private String valid_email;
    private long duration = 5000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);
        imageViewLogo = (ImageView) findViewById(R.id.img_logo);
        flip_logo();
        init();

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ForgotPasswordActivity.this, SigninActivity.class);
                startActivity(intent);
                finish();
            }
        });

        registerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ForgotPasswordActivity.this, SignupActivity.class);
                startActivity(intent);
                finish();
            }
        });

        resetPasswordButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (check_validity()) {
                    Toast.makeText(ForgotPasswordActivity.this, "Check mail !!!", Toast.LENGTH_LONG).show();
                    Intent intent = new Intent(ForgotPasswordActivity.this, SigninActivity.class);
                    startActivity(intent);
                    finish();
                }
            }
        });
    }

    public void init() {
        emailEditext = (EditText) findViewById(R.id.email_edittext);
        loginButton = (Button) findViewById(R.id.login_button);
        registerButton = (Button) findViewById(R.id.register_button);
        resetPasswordButton = (Button) findViewById(R.id.reset_password_button);
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

        if (valid_email.length() == 0) {
            emailEditext.setError("Email is Required!!!");
            return false;
        } else if (Patterns.EMAIL_ADDRESS.matcher(valid_email).matches() == false) {
            emailEditext.setError("Valid Email is Required!!!");
            return false;
        }

        return true;
    }
}
