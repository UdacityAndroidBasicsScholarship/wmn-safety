package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.models.UserData;
import in.paperwrk.safetycollabproject.utilities.Helpers;

public class SignupActivity extends AppCompatActivity implements View.OnClickListener {

    private TextInputEditText mEmailText;
    private TextInputEditText mNameText;
    private TextInputEditText mPhoneText;
    private TextInputEditText mPasswordText;
    private Helpers mHelpers;
    private FirebaseAuth mFirebaseAuth;

    private static final String TAG = SignupActivity.class.getSimpleName();
    private FirebaseDatabase mFirebaseDatabase;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        mHelpers = new Helpers(this);
        mFirebaseAuth = FirebaseAuth.getInstance();
        mFirebaseDatabase = FirebaseDatabase.getInstance();

        mEmailText = findViewById(R.id.sign_up_email_tv);
        mNameText = findViewById(R.id.sign_up_name_tv);
        mPhoneText = findViewById(R.id.sign_up_phone_tv);
        mPasswordText = findViewById(R.id.sign_up_password_tv);

        findViewById(R.id.sign_up_button).setOnClickListener(this);
        findViewById(R.id.sign_up_login_tv).setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        switch (id) {
            case R.id.sign_up_button:
                doSignUp();
                break;
            case R.id.sign_up_login_tv:
                showSignIn();
                break;
            default:
                break;
        }
    }

    private void showSignIn() {
        finish();
    }

    private void doSignUp() {
        String name = mNameText.getText().toString();
        String email = mEmailText.getText().toString();
        String phone = mPhoneText.getText().toString();
        String password = mPasswordText.getText().toString();

        if (name.isEmpty()) {
            mHelpers.showAlertDialog(getString(R.string.name_required_msg), getString(R.string.enter_name_msg)).show();
            return;
        }
        if (email.isEmpty()) {
            mHelpers.showAlertDialog(getString(R.string.email_required_msg), getString(R.string.enter_email_msg)).show();
            return;
        }
        if (phone.isEmpty()) {
            mHelpers.showAlertDialog(getString(R.string.phone_required_msg), getString(R.string.enter_phone_msg)).show();
            if (phone.length() != 10) {
                mHelpers.showAlertDialog(getString(R.string.valid_phone_required_msg), getString(R.string.enter_valid_phone_msg)).show();
            }
            return;
        }
        if (password.isEmpty()) {
            mHelpers.showAlertDialog(getString(R.string.password_required_msg), getString(R.string.enter_password_msg)).show();
            return;
        }

        signUp(email, password, name, phone);
    }

    private void signUp(final String email, final String password, final String name, final String number) {
        mHelpers.showProgressDialog(getString(R.string.creating_account));
        mFirebaseAuth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        mHelpers.hideProgressDialog();
                        if (task.isSuccessful()) {
                            Log.v(TAG, "New User Crated successfully");
                            String userID = mFirebaseAuth.getCurrentUser().getUid();
                            addNewUser(email, name, number, userID);
                        } else {
                            Log.w(TAG, task.getException().toString());
                            mHelpers.showAlertDialog(getString(R.string.error_message), task.getException().getMessage()).show();
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
                            Log.v(TAG, "New User Data stored successfully");
                            Intent intent = new Intent(SignupActivity.this, SigninActivity.class);
                            startActivity(intent);
                        } else {
                            mHelpers.showAlertDialog(getString(R.string.error_message), task.getException().getMessage()).show();
                            Log.w(TAG, task.getException().toString());
                        }
                    }
                });
    }
}
