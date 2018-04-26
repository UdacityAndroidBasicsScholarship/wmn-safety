package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

import in.paperwrk.safetycollabproject.R;

public class SignupActivity extends AppCompatActivity {

    private FirebaseAuth mFirebaseAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        mFirebaseAuth = FirebaseAuth.getInstance();

        if(getSupportActionBar() != null)
            getSupportActionBar().hide();

        Button button = findViewById(R.id.sign_up_button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText emailInput = findViewById(R.id.email_input);
                String email = emailInput.getText().toString();
                EditText passwordInput = findViewById(R.id.password_input);
                String password = passwordInput.getText().toString();
                signUp(email, password);
            }
        });
    }

    public void openSigninActivity(View view) {
        finish();
    }

    private void signUp(String email, String password) {
        mFirebaseAuth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            Log.v("Account Creation", "New User Crated successfully");
                            Toast.makeText(SignupActivity.this, "Account successfully created",
                                    Toast.LENGTH_SHORT).show();
                            Intent intent = new Intent(SignupActivity.this, SigninActivity.class);
                            startActivity(intent);
                        } else {
                            Log.w("FireBase Error", task.getException().toString());
                            Toast.makeText(SignupActivity.this, task.getException().toString(),
                                    Toast.LENGTH_SHORT).show();
                        }
                    }
                });
    }
}