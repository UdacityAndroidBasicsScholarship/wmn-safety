package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import in.paperwrk.safetycollabproject.*;

public class SigninActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        TextView createNewAccTV = (TextView) findViewById(R.id.create_new_acc_tv);
        createNewAccTV.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                Intent i = new Intent(in.paperwrk.safetycollabproject.accounts.SigninActivity.this , in.paperwrk.safetycollabproject.accounts.SignupActivity.class);
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
