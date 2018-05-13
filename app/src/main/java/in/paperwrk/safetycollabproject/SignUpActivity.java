package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthUserCollisionException;

public class SignUpActivity extends AppCompatActivity {

    //EditText edEmail, edPass ;


    private EditText edEmail;
    private EditText edPass;
    private Button btnSignUp;
    private TextView txtLogin;
    private ProgressBar progressBar;
    private FirebaseAuth mAuth;
    private TextView edName;
    private TextView edPhone;
    private android.widget.LinearLayout linearlayout;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        edEmail = findViewById(R.id.edEmail);
        edPass = findViewById(R.id.edPass);
        edName = findViewById(R.id.edName);
        edPhone = findViewById(R.id.edPhone);

        btnSignUp = findViewById(R.id.BtnSignUp);
        txtLogin = findViewById(R.id.TxtLogin1);
        // progressBar = (ProgressBar)findViewById(R.id.p);

        progressBar = findViewById(R.id.probar);
        linearlayout = findViewById(R.id.jadu_layout);
        mAuth = FirebaseAuth.getInstance();

        btnSignUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                registerUser();

            }

        });


        txtLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Toast.makeText(SignUpActivity.this, "Your login button pressed", Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(SignUpActivity.this,MainActivity.class);
                startActivity(intent);

            }
        });
    }

    public void registerUser() {

        String Name = edName.getText().toString();
        String emailId = edEmail.getText().toString();
        String Phone = edPhone.getText().toString();
        String password = edPass.getText().toString();

        //Validation



        if (Name.isEmpty()) {
            edName.setError("Name Is Required");
            edName.requestFocus();
            return;
        }

        if (emailId.isEmpty())
        {
            edEmail.setError("Email Is Required");
            edEmail.requestFocus();
            return;
        }

        if (Phone.isEmpty()) {
            edPhone.setError("Phone Is Required");
            edPhone.requestFocus();
            return;
        }

        if (password.isEmpty()) {
            edPass.setError("Password is Required");
            edPass.requestFocus();
            return;
        }

        if (!Patterns.EMAIL_ADDRESS.matcher(emailId).matches()) {
            edEmail.setError("Please enter a valid Email");
            edEmail.requestFocus();
            return;
        }

        if (password.length() < 6) {
            edPass.setError("Minimum Length of password should be 6");
            edPass.requestFocus();
            return;
        }

        if(edPhone.length()<10)
        {
            edPhone.setError("Minimum Length of Phone Number should be 10");
            edPhone.requestFocus();
            return;
        }

        progressBar.setVisibility(View.VISIBLE);
        edEmail.setVisibility(View.GONE);
        edPass.setVisibility(View.GONE);
        btnSignUp.setVisibility(View.GONE);
        txtLogin.setVisibility(View.GONE);
        edName.setVisibility(View.GONE);
        edPhone.setVisibility(View.GONE);
        linearlayout.setVisibility(View.GONE);




        mAuth.createUserWithEmailAndPassword(emailId, password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {

                progressBar.setVisibility(View.GONE);
                if (task.isSuccessful()) {
                    Toast.makeText(SignUpActivity.this, "User Registered Succesfully", Toast.LENGTH_LONG).show();
                    Intent intent = new Intent(SignUpActivity.this,MainActivity.class);
                    startActivity(intent);

                }
                else
                {
                    if(task.getException() instanceof FirebaseAuthUserCollisionException)
                    {
                        Toast.makeText(SignUpActivity.this, "User is Already Registered", Toast.LENGTH_SHORT).show();

                    }
                    else
                    {
                        Toast.makeText(SignUpActivity.this,task.getException().getMessage(),Toast.LENGTH_SHORT).show();
                    }
                    //Toast.makeText(SignUpActivity.this, "Some Error occured", Toast.LENGTH_SHORT).show();
                }

            }
        });

    }

}
