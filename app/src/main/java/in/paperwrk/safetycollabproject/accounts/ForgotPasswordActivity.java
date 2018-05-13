package in.paperwrk.safetycollabproject.accounts;

import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.utilities.Helpers;

public class ForgotPasswordActivity extends AppCompatActivity implements View.OnClickListener {

    private Button mForgotButton;
    private TextInputEditText mEmailText;
    private Helpers mHelpers;
    private FirebaseAuth mFirebaseAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);

        mHelpers = new Helpers(this);
        mFirebaseAuth = FirebaseAuth.getInstance();

        mEmailText = findViewById(R.id.forgot_email_tv);
        mForgotButton = findViewById(R.id.forgot_button);
        mForgotButton.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        switch (id) {
            case R.id.forgot_button:
                doForgotPassword();
                break;
        }
    }

    private void doForgotPassword() {

        String email = mEmailText.getText().toString();

        if (email.isEmpty()) {
            mHelpers.showAlertDialog(getString(R.string.email_required_msg), getString(R.string.enter_email_msg)).show();
            return;
        }

        sendPasswordResetEmail(email);

    }

    private void sendPasswordResetEmail(String email) {
        mHelpers.showProgressDialog(getString(R.string.processing));
        mFirebaseAuth.sendPasswordResetEmail(email)
                .addOnCompleteListener(new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
                        mHelpers.hideProgressDialog();
                        if (task.isSuccessful()) {
                            mHelpers.showToast("Reset Password Email Sent Successfully");
                            finish();
                        } else {
                            mHelpers.showAlertDialog(getString(R.string.error_message), task.getException().getMessage()).show();
                        }
                    }
                });
    }
}
