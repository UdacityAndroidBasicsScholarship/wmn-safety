package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class SigninActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        TextView createNewAccTV = (TextView) findViewById(R.id.create_new_acc_tv);
        createNewAccTV.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                Intent i = new Intent(SigninActivity.this , SignupActivity.class);
                startActivity(i);
            }

        });
    }
    @Override
    public void onBackPressed() {
        Intent newIntent = new Intent(this,QuitAppActivity.class);
        newIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP|Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivity(newIntent);
        finish();
    }
}