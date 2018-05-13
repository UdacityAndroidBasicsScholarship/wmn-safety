package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.net.Uri;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;

import java.net.URI;

public class ForgotPassword extends AppCompatActivity {

    private FirebaseAuth mAuth;
    private String emailId;
    private EditText edEmail;
    private Button submitbtn;
    private ProgressBar progressBar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);

        mAuth = FirebaseAuth.getInstance();

        edEmail = (EditText) findViewById(R.id.edEmail);

        submitbtn = (Button) findViewById(R.id.submitbtn);
        progressBar = findViewById(R.id.probar);

        submitbtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                userCheck();

                Intent intent = new Intent(Intent.ACTION_SENDTO);
                intent.setData(Uri.parse("mailto"));

                intent.putExtra(Intent.EXTRA_SUBJECT,"Your One time pwd is ");
                if(intent.resolveActivity(getPackageManager())!=null)
                {
                    startActivity(intent);
                }

                Log.d("Email id ","Sended pwd to Email id"+emailId);


                mAuth.sendPasswordResetEmail(emailId)
                        .addOnCompleteListener(new OnCompleteListener<Void>() {
                            @Override
                            public void onComplete(@NonNull Task<Void> task) {
                                if (task.isSuccessful()) {

                                    Log.d("Email id ","Sended pwd to Email id Succesfully "+ emailId);
                                    Toast.makeText(ForgotPassword.this, "We have sent you instructions to reset your password!", Toast.LENGTH_SHORT).show();
                                    Intent intent = new Intent(ForgotPassword.this,MainActivity.class);
                                    startActivity(intent);
                                } else {
                                    Toast.makeText(ForgotPassword.this, "Failed to send reset email!", Toast.LENGTH_SHORT).show();
                                }

                                progressBar.setVisibility(View.GONE);
                            }
                        });

            }
        });
    }

                private boolean userCheck() {

                    emailId = edEmail.getText().toString();

                    if (emailId.isEmpty()) {
                        edEmail.setError("Email Is Required");
                        edEmail.requestFocus();
                        return false;
                    }

                    if (!Patterns.EMAIL_ADDRESS.matcher(emailId).matches()) {
                        edEmail.setError("Please enter a valid Email");
                        edEmail.requestFocus();
                        return false;
                    }

                    return true;
                }
            }
