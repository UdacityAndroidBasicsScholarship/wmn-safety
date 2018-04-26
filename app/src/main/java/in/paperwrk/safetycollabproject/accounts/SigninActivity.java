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

import in.paperwrk.safetycollabproject.MainActivity;
import in.paperwrk.safetycollabproject.R;

public class SigninActivity extends AppCompatActivity {

    private FirebaseAuth mFirebaseAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        mFirebaseAuth = FirebaseAuth.getInstance();

        if(getSupportActionBar() != null)
            getSupportActionBar().hide();

        Button mButton = findViewById(R.id.sign_in_button);
        mButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText emailInput = findViewById(R.id.sign_in_email);
                String email = emailInput.getText().toString();
                EditText passwordInput = findViewById(R.id.sign_in_password_input);
                String password = passwordInput.getText().toString();
                if (!email.isEmpty() && !password.isEmpty()) {
                    signIn(email, password);
                } else {
                    Toast.makeText(SigninActivity.this, "Please enter valid email and password",
                            Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    public void openSignupActivity(View view) {
        startActivity(new Intent(SigninActivity.this, SignupActivity.class));
    }

    private void signIn(String email, String password) {
        mFirebaseAuth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isComplete()) {
                            Log.v("Sign In", "User successfully logged in.");
                            Intent intent = new Intent(SigninActivity.this, MainActivity.class);
                            startActivity(intent);
                        } else {
                            Log.w("Sign in failed", task.getException().toString());
                            Toast.makeText(SigninActivity.this, task.getException().toString(), Toast.LENGTH_SHORT)
                                    .show();
                        }
                    }
                });
    }
}