package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.method.HideReturnsTransformationMethod;
import android.text.method.PasswordTransformationMethod;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;
import android.util.Patterns;
import android.widget.EditText;
import android.widget.ProgressBar;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class MainActivity extends AppCompatActivity {

    FirebaseAuth mAuth;
    private EditText edEmail;
    private EditText edPass;
    private TextView txtSignUp;
    private Button btnLogin;
    private ProgressBar progressBar;
    private TextView txtForgotPwd;
    private TextInputLayout textInputLayout;
    private LinearLayout layout;

    //private TextInputlayout textInputlayout;
    //private CheckBox chkBox;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mAuth = FirebaseAuth.getInstance();
        edEmail = findViewById(R.id.edEmail);
        edPass = findViewById(R.id.edPass);
        txtForgotPwd = findViewById(R.id.txtForgotPwd);
        layout = findViewById(R.id.layout);

        txtSignUp = findViewById(R.id.txtSignUp);
        btnLogin = findViewById(R.id.BtnLogin);
        progressBar = findViewById(R.id.probar);
        textInputLayout = findViewById(R.id.text_input_layout);

        //textInputlayout = findViewById(R.id.txtInputLayout);
        // chkBox = findViewById(R.id.chkPassword);

        txtForgotPwd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(MainActivity.this,ForgotPassword.class);
                startActivity(intent);
            }
        });

        txtSignUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, SignUpActivity.class);
                startActivity(intent);
            }
        });

        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                userLogin();

            }
        });

        /*chkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {

                if(chkBox.isChecked()) //visible
                    edPass.setTransformationMethod(new HideReturnsTransformationMethod());
                else // Hide
                {
                    edPass.setTransformationMethod(new PasswordTransformationMethod());
                }
            }
        });*/
    }



    public void userLogin() {
        String emailId = edEmail.getText().toString();
        String password = edPass.getText().toString();

        //Validation

        if (emailId.isEmpty()) {
            edEmail.setError("Email Is Required");
            edEmail.requestFocus();
            return;
        }

        if (password.isEmpty()) {
            edPass.setError("Password is Required");
            edPass.requestFocus();
            return;
        }
            /*else
            {
                if(chkBox.isChecked()) //visible
                    edPass.setTransformationMethod(new HideReturnsTransformationMethod());
                else // Hide
                {
                    edPass.setTransformationMethod(new PasswordTransformationMethod());
                }
            }*/

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

        progressBar.setVisibility(View.VISIBLE);
        edEmail.setVisibility(View.GONE);
        edPass.setVisibility(View.GONE);
        txtSignUp.setVisibility(View.GONE);
        btnLogin.setVisibility(View.GONE);
        textInputLayout.setVisibility(View.GONE);
        layout.setVisibility(View.GONE);
        //textInputlayout.setVisibility(View.GONE);
        //chkBox.setVisibility(View.GONE);

        mAuth.signInWithEmailAndPassword(emailId, password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
            @Override

            public void onComplete(@NonNull Task<AuthResult> task) {
                progressBar.setVisibility(View.GONE);
                if (task.isSuccessful()) {

                    //progressBar.setVisibility(View.VISIBLE);
                    Toast toast = Toast.makeText(MainActivity.this, "User login Succesfully", Toast.LENGTH_SHORT);
                    toast.show();
                    Intent intent = new Intent(MainActivity.this, MainActivity.class);
                    startActivity(intent);




                } else {
                    Toast.makeText(MainActivity.this,task.getException().getMessage(), Toast.LENGTH_SHORT).show();
                }
            }

        });

    }
}