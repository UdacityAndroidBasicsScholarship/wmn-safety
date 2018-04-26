package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import in.paperwrk.safetycollabproject.R;

public class SigninActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        if(getSupportActionBar() != null)
            getSupportActionBar().hide();
    }

    public void openSignupActivity(View view) {
        startActivity(new Intent(SigninActivity.this, SignupActivity.class));
    }
}