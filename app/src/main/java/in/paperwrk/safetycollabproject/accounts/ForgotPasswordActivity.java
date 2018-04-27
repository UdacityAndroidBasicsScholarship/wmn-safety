package in.paperwrk.safetycollabproject.accounts;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import in.paperwrk.safetycollabproject.R;

public class ForgotPasswordActivity extends AppCompatActivity implements View.OnClickListener{

    private Button mForgotButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);

        mForgotButton = findViewById(R.id.forgot_button);
        mForgotButton.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        switch (id) {
            case R.id.forgot_button:
                doForgotPassword();
                break;
        }
    }

    private void doForgotPassword() {
        Toast.makeText(this, R.string.implementation_in_progress, Toast.LENGTH_SHORT).show();
    }
}
