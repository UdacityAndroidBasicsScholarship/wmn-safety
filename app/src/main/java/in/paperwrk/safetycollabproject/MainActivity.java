package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import butterknife.ButterKnife;
import butterknife.OnClick;
import in.paperwrk.safetycollabproject.accounts.Signin.SigninActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ButterKnife.bind(this);

    }
    @OnClick(R.id.logoutButton)
    public void logout(){
        finish();
        AppInfo.firebaseAuth.signOut();
        startActivity(new Intent(this, SigninActivity.class));
    }
}
