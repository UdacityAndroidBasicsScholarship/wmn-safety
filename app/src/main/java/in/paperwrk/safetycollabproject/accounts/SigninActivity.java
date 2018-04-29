package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import in.paperwrk.safetycollabproject.R;

public class SigninActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        TextView text=(TextView) findViewById(R.id.createNewAcc);

        text.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i=new Intent(SigninActivity.this,SignupActivity.class);
                startActivity(i);
            }
        });

        TextView forgot=(TextView) findViewById(R.id.forgotPass);
        forgot.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i=new Intent(SigninActivity.this, ForgotPasswordActivity.class);
                startActivity(i);
            }
        });
    }
}
