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
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.models.UserData;

public class SignupActivity extends AppCompatActivity {

    private FirebaseAuth mFirebaseAuth;
    private FirebaseDatabase mFirebaseDatabase;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        mFirebaseAuth = FirebaseAuth.getInstance();
        mFirebaseDatabase = FirebaseDatabase.getInstance();

        if(getSupportActionBar() != null)
            getSupportActionBar().hide();

        Button button = findViewById(R.id.sign_up_button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email = ((EditText) findViewById(R.id.email_input)).getText().toString();
                String password = ((EditText) findViewById(R.id.password_input)).getText().toString();
                String number = ((EditText) findViewById(R.id.number_input)).getText().toString();
                String name = ((EditText) findViewById(R.id.name_input)).getText().toString();

                signUp(email, password, name, number);
            }
        });
    }

    public void openSigninActivity(View view) {
        finish();
    }

    private void signUp(final String email, final String password, final String name, final String number) {
        mFirebaseAuth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            Log.v("Account Creation", "New User Crated successfully");
                            Toast.makeText(SignupActivity.this, "Account successfully created",
                                    Toast.LENGTH_SHORT).show();
                            String userID = mFirebaseAuth.getCurrentUser().getUid();
                            addNewUser(email, name, number, userID);
                        } else {
                            Log.w("FireBase Error", task.getException().toString());
                            Toast.makeText(SignupActivity.this, task.getException().toString(),
                                    Toast.LENGTH_SHORT).show();
                        }
                    }
                });
    }

    private void addNewUser(String email, String name, String number, String userID) {
        UserData user = new UserData(name, email, number);
        DatabaseReference mDatabaseReference = mFirebaseDatabase.getReference();
        mDatabaseReference.child("users").child(userID).setValue(user)
                .addOnCompleteListener(this, new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
                        if (task.isSuccessful()) {
                            Log.v("Write Data", "New User Data stored successfully");
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