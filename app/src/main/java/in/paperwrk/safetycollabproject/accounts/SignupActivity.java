package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import in.paperwrk.safetycollabproject.HomeActivity;
import in.paperwrk.safetycollabproject.R;

public class SignupActivity extends AppCompatActivity implements View.OnClickListener {

    EditText fullNameEditText, phoneNumberEditText, emailEditText, passwordEditText;
    Button signUp;
    TextView signIn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        fullNameEditText = findViewById(R.id.fullNameEditText);
        phoneNumberEditText = findViewById(R.id.phoneNumberEditText);
        emailEditText = findViewById(R.id.emailEditText);
        passwordEditText = findViewById(R.id.passwordEditText);

        signUp = findViewById(R.id.signUp);
        signIn = findViewById(R.id.signIn);

        signUp.setOnClickListener(this);
        signIn.setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {

        switch (v.getId()){

            case R.id.signIn:
                Intent signIn = new Intent(SignupActivity.this, SigninActivity.class);
                startActivity(signIn);
                finish();
                break;

            case R.id.signUp:
                if(!fullNameEditText.getText().toString().isEmpty()){
                    if(!phoneNumberEditText.getText().toString().isEmpty()){
                        if(!emailEditText.getText().toString().isEmpty() && Patterns.EMAIL_ADDRESS.matcher(emailEditText.getText()).matches()){
                            if(!passwordEditText.getText().toString().isEmpty()){
                                Intent signUp = new Intent(SignupActivity.this, HomeActivity.class);
                                startActivity(signUp);
                                finish();
                            }
                            else{
                                Toast.makeText(SignupActivity.this, "Please Enter Your Password.", Toast.LENGTH_SHORT).show();
                            }
                        }

                        else{
                            Toast.makeText(SignupActivity.this, "Please Enter Your Email Correctly.", Toast.LENGTH_SHORT).show();
                        }
                    }

                    else{
                        Toast.makeText(SignupActivity.this, "Please Enter Your Phone Number.", Toast.LENGTH_SHORT).show();
                    }

                }
                else{
                    Toast.makeText(SignupActivity.this, "Please Enter Your Full Name.", Toast.LENGTH_SHORT).show();
                }
                break;
        }
    }
}
