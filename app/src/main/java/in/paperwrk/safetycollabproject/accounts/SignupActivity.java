package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import in.paperwrk.safetycollabproject.R;

public class SignupActivity extends AppCompatActivity implements View.OnClickListener {

    private Button mSignUpButton;
    private TextView mSignInTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        mSignUpButton = findViewById(R.id.sign_up_button);
        mSignInTextView = findViewById(R.id.sign_up_login_tv);

        mSignUpButton.setOnClickListener(this);
        mSignInTextView.setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        switch (id) {
            case R.id.sign_up_button:
                doSignUp();
                break;
            case R.id.sign_up_login_tv:
                showSignIn();
                break;
            default:
                break;
        }
    }

    private void showSignIn() {
        finish();
    }

    private void doSignUp() {
        Toast.makeText(this, R.string.implementation_in_progress, Toast.LENGTH_SHORT).show();
    }
}
