package in.paperwrk.safetycollabproject.accounts;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.SpannableString;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.text.style.ClickableSpan;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import in.paperwrk.safetycollabproject.HomeActivity;
import in.paperwrk.safetycollabproject.R;

public class SigninActivity extends AppCompatActivity {

    private EditText email;
    private EditText password;
    private ImageButton signin;
    private TextView forgotpassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        signin = findViewById(R.id.btsignin);
        email = (EditText)findViewById(R.id.etemail_id);
        password = (EditText)findViewById(R.id.etpassword);

        signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                validate(email.getText().toString(),password.getText().toString());
            }
        });
        forgotpassword=(TextView)findViewById(R.id.forgotpassword);

        String text = "Forgot Password?";
        SpannableString ss = new SpannableString(text);
        ClickableSpan clickableSpan = new ClickableSpan() {
            @Override
            public void onClick(View widget) {
                Intent intent = new Intent(SigninActivity.this, ForgotPasswordActivity.class);
                startActivity(intent);
            }
        };
        ss.setSpan(clickableSpan,0,16, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
        forgotpassword.setText(ss);
        forgotpassword.setMovementMethod(LinkMovementMethod.getInstance());
    }

    private void validate (String userName , String userPassword) {
        if ((userName.equals("admin@gmail.com")) && (userPassword.equals("1234"))) {
            Intent intent = new Intent(SigninActivity.this, SigninActivity.class);
            startActivity(intent);
        } else {
            Toast.makeText(this, "Invalid email-id/password", Toast.LENGTH_SHORT).show();
        }
    }


}
