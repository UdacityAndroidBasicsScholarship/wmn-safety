package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import in.paperwrk.safetycollabproject.accounts.SigninActivity;
import in.paperwrk.safetycollabproject.accounts.SignupActivity;

public class HomeActivity extends AppCompatActivity implements View.OnClickListener {
    private Button signin;
    private Button signup;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        signin = findViewById(R.id.btsignin);
        signup = findViewById(R.id.btsignup);

        signin.setOnClickListener(this);
        signup.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {

        switch (v.getId()) {
            case R.id.btsignin:
                Intent intent = new Intent(HomeActivity.this, SigninActivity.class);
                startActivity(intent);

                break;
            case R.id.btsignup:
                Intent intent1 = new Intent(HomeActivity.this, SignupActivity.class);
                startActivity(intent1);

                break;
        }
    }


}
