package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import in.paperwrk.safetycollabproject.R;

public class SignupActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);
    }
    public void moveSignInPage(View v){
        Intent signup = new Intent(this,SigninActivity.class);
        startActivity(signup);
    }
}
