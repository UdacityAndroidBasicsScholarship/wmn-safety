package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import android.util.Log;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;


import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.PhoneAuthCredential;
import com.google.firebase.auth.UserProfileChangeRequest;

import in.paperwrk.safetycollabproject.HomeActivity;
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.utilities.Helpers;
import in.paperwrk.safetycollabproject.models.UserData;

public class SignupActivity extends AppCompatActivity implements View.OnClickListener {

    private Button mSignUpButton;
    private TextView mSignInTextView;
    private TextInputEditText mEmailText;
    private TextInputEditText mNameText;
    private TextInputEditText mPhoneText;
    private TextInputEditText mPasswordText;
    private Helpers mHelpers;
    private FirebaseAuth mFirebaseAuth;


    private FirebaseAuth mFirebaseAuth;
    private FirebaseDatabase mFirebaseDatabase;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        mHelpers = new Helpers(this);
        mFirebaseAuth = FirebaseAuth.getInstance();

        mSignUpButton = findViewById(R.id.sign_up_button);
        mSignInTextView = findViewById(R.id.sign_up_login_tv);
        mEmailText = findViewById(R.id.sign_up_email_tv);
        mNameText = findViewById(R.id.sign_up_name_tv);
        mPhoneText = findViewById(R.id.sign_up_phone_tv);
        mPasswordText = findViewById(R.id.sign_up_password_tv);

        mSignUpButton.setOnClickListener(this);
        mSignInTextView.setOnClickListener(this);

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

        createUserWithEmailAndPassword(name, email, phone, password);
    }

    private void createUserWithEmailAndPassword(final String name, String email, final String phone, String password) {
        mHelpers.showProgressDialog(getString(R.string.creating_account));
        mFirebaseAuth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        mHelpers.hideProgressDialog();
                        if (task.isSuccessful()) {
                            updateProfile(name, phone);
                        } else {
                            mHelpers.showAlertDialog(getString(R.string.error_message), task.getException().getMessage()).show();

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

    private void updateProfile(String name, String phone) {
        mHelpers.showProgressDialog(getString(R.string.updating_profile));
        UserProfileChangeRequest profileUpdate = new UserProfileChangeRequest.Builder()
                .setDisplayName(name)
                .build();

        FirebaseUser user = mFirebaseAuth.getCurrentUser();

        user.updateProfile(profileUpdate).addOnCompleteListener(new OnCompleteListener<Void>() {
            @Override
            public void onComplete(@NonNull Task<Void> task) {
                mHelpers.hideProgressDialog();
                if(task.isSuccessful()){
                    mHelpers.showToast(getString(R.string.account_creation_success));
                    navigateToHome();
                }else{
                    mHelpers.showAlertDialog(getString(R.string.error_message), task.getException().getMessage()).show();
                }
            }
        });

    }

    private void navigateToHome() {
        Intent intent = new Intent(this, HomeActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        startActivity(intent);
        finish();}
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

    }
}