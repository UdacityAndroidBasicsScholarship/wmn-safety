package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import in.paperwrk.safetycollabproject.HomeActivity;
import in.paperwrk.safetycollabproject.R;

public class SigninActivity extends AppCompatActivity implements View.OnClickListener{

    EditText email, password;
    TextView forgotPassword, signUp;
    Button signIn, googleSignIn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        email = findViewById(R.id.emailEditText);
        password = findViewById(R.id.passwordEditText);
        forgotPassword = findViewById(R.id.forgotPassword);
        signUp = findViewById(R.id.createAccount);
        signIn = findViewById(R.id.signInButton);
        googleSignIn = findViewById(R.id.googleSignIn);

        forgotPassword.setOnClickListener(this);
        signUp.setOnClickListener(this);
        signIn.setOnClickListener(this);
        googleSignIn.setOnClickListener(this);


    }

    @Override
    public void onClick(View v) {

        switch (v.getId()){
            case R.id.signInButton:

                if(!email.getText().toString().isEmpty())
                {
                    if (!password.getText().toString().isEmpty())
                    {
                        Intent i = new Intent(SigninActivity.this, HomeActivity.class);
                        startActivity(i);
                        finish();
                    }
                    else {
                        Toast.makeText(SigninActivity.this, "Please Enter Your Password.", Toast.LENGTH_SHORT).show();
                    }
                }
                else {

                    Toast.makeText(SigninActivity.this, "Please Enter Your Email.", Toast.LENGTH_SHORT).show();
                }

                break;
            case R.id.forgotPassword:
                Intent forgotPasswordIntent = new Intent(SigninActivity.this, ForgotPasswordActivity.class);
                startActivity(forgotPasswordIntent);
                break;
            case R.id.createAccount:
                Intent signUpIntent = new Intent(SigninActivity.this, SignupActivity.class);
                startActivity(signUpIntent);
                break;
            case R.id.googleSignIn:

                break;
        }


    }
}
