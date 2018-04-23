package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.login_activity);
    }


    public void SignUp(View view) {
        Intent i = new Intent(getApplicationContext(),
                RegisterActivity.class);
        startActivity(i);
        finish();
    }
}
