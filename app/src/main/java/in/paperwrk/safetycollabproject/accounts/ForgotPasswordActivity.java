package in.paperwrk.safetycollabproject.accounts;

import android.nfc.NfcAdapter;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import in.paperwrk.safetycollabproject.R;

public class ForgotPasswordActivity extends AppCompatActivity implements View.OnClickListener {

    EditText emailEditText;
    Button submit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        emailEditText = findViewById(R.id.emailEditText);
        submit = findViewById(R.id.submit);
        submit.setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {

        if(!emailEditText.getText().toString().isEmpty()){
            Toast.makeText(ForgotPasswordActivity.this, "Email has been sent to you. Please click on the link in the email.", Toast.LENGTH_LONG).show();
        }else{
            Toast.makeText(ForgotPasswordActivity.this, "Please Enter Your Email.", Toast.LENGTH_SHORT).show();
        }
    }
}
