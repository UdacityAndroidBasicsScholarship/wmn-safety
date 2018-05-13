package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.SignInButton;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GoogleAuthProvider;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import in.paperwrk.safetycollabproject.activities.HomeActivity;
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.models.UserData;
import in.paperwrk.safetycollabproject.utilities.Helpers;

public class SigninActivity extends AppCompatActivity implements View.OnClickListener {

    private static final int RC_SIGN_IN = 1712;
    private FirebaseAuth mFirebaseAuth;
    private FirebaseDatabase mFirebaseDatabase;

    private static final String TAG = SigninActivity.class.getSimpleName();

    private GoogleSignInClient mGoogleSigninClient;
    private TextInputEditText mEmailText;
    private TextInputEditText mPasswordText;
    private Helpers mHelpers;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        final GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(getString(R.string.default_web_client_id))
                .requestEmail()
                .build();

        mGoogleSigninClient = GoogleSignIn.getClient(this, gso);

        mHelpers = new Helpers(this);
        mFirebaseAuth = FirebaseAuth.getInstance();
        FirebaseUser user = mFirebaseAuth.getCurrentUser();
        if (user != null) {
            navigateToHome();
        }

        mFirebaseDatabase = FirebaseDatabase.getInstance();

        SignInButton mGoogleSignInButton = findViewById(R.id.sign_in_goggle_button);
        mGoogleSignInButton.setSize(SignInButton.SIZE_WIDE);
        mGoogleSignInButton.setColorScheme(SignInButton.COLOR_DARK);

        mEmailText = findViewById(R.id.sign_in_email_tv);
        mPasswordText = findViewById(R.id.sign_in_password_tv);

        mGoogleSignInButton.setOnClickListener(this);
        findViewById(R.id.sign_in_button).setOnClickListener(this);
        findViewById(R.id.sign_in_register_tv).setOnClickListener(this);
        findViewById(R.id.sign_in_forgot_pass_tv).setOnClickListener(this);
    }


    @Override
    public void onClick(View v) {
        int id = v.getId();

        switch (id) {
            case R.id.sign_in_button:
                doSignIn();
                break;
            case R.id.sign_in_goggle_button:
                doGoogleSignIn();
                break;
            case R.id.sign_in_register_tv:
                showSignUp();
                break;
            case R.id.sign_in_forgot_pass_tv:
                showForgotPassword();
                break;
            default:
                break;
        }
    }

    private void showForgotPassword() {
        Intent intent = new Intent(this, ForgotPasswordActivity.class);
        startActivity(intent);
    }

    private void showSignUp() {
        Intent intent = new Intent(this, SignupActivity.class);
        startActivity(intent);
    }

    private void doGoogleSignIn() {
        Intent googleSignInIntent = mGoogleSigninClient.getSignInIntent();
        startActivityForResult(googleSignInIntent, RC_SIGN_IN);
    }

    private void doSignIn() {
        String email = mEmailText.getText().toString();
        String password = mPasswordText.getText().toString();

        if (email.isEmpty()) {
            mHelpers.showAlertDialog(getString(R.string.email_required_msg), getString(R.string.enter_email_msg)).show();
            return;
        }

        if (password.isEmpty()) {
            mHelpers.showAlertDialog(getString(R.string.password_required_msg), getString(R.string.enter_password_msg)).show();
            return;
        }
        loginWithFirebaseEmailPassword(email, password);
    }

    private void navigateToHome() {
        Intent intent = new Intent(this, HomeActivity.class);
        startActivity(intent);
        finish();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == RC_SIGN_IN) {
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
            try {
                GoogleSignInAccount account = task.getResult(ApiException.class);
                firebaseAuthWithGoogle(account);
            } catch (ApiException e) {
                Log.w(TAG, e.getMessage());
                Toast.makeText(this, "Google Sign In failed. Please try again.",
                        Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void loginWithFirebaseEmailPassword(String email, String password) {
        mHelpers.showProgressDialog(getString(R.string.loading_msg));
        mFirebaseAuth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        mHelpers.hideProgressDialog();
                        if (task.isSuccessful()) {
                            mHelpers.showToast(getString(R.string.login_success));
                            onSignInSuccess();
                        } else {
                            Log.w("Sign in failed", task.getException().toString());
                            mHelpers.showAlertDialog(getString(R.string.error_message), task.getException().getMessage()).show();
                        }
                    }
                });
    }

    private void firebaseAuthWithGoogle(final GoogleSignInAccount account) {
        AuthCredential mCredential = GoogleAuthProvider.getCredential(account.getIdToken(), null);
        mFirebaseAuth.signInWithCredential(mCredential)
                .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            String email = account.getEmail();
                            String name = account.getDisplayName();
                            String userID = mFirebaseAuth.getCurrentUser().getUid();
                            boolean newUser = task.getResult().getAdditionalUserInfo().isNewUser();
                            addNewUser(email, name, "", userID, newUser);
                        } else {
                            Log.w(TAG, task.getException().toString());
                            Toast.makeText(SigninActivity.this, task.getException().toString(), Toast.LENGTH_SHORT)
                                    .show();
                        }
                    }
                });
    }

    private void onSignInSuccess() {
        if (mFirebaseAuth.getCurrentUser() != null) {
            Log.v(TAG, "User successfully logged in.");
            Toast.makeText(this, "You are successfully signed in.", Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(SigninActivity.this, HomeActivity.class);
            startActivity(intent);
        } else {
            Log.v(TAG, "User log-in failed.");
            Toast.makeText(this, "Invalid email or password!", Toast.LENGTH_SHORT).show();
        }
    }

    private void addNewUser(String email, String name, String number, String userID, boolean newUser) {
        if (newUser) {
            UserData user = new UserData(name, email, number);
            DatabaseReference mDatabaseReference = mFirebaseDatabase.getReference();
            mDatabaseReference.child("users").child(userID).setValue(user)
                    .addOnCompleteListener(this, new OnCompleteListener<Void>() {
                        @Override
                        public void onComplete(@NonNull Task<Void> task) {
                            if (task.isSuccessful()) {
                                Log.v("Write Data", "New User Data stored successfully");
                                onSignInSuccess();
                            } else {
                                Log.w("FireBase Error", task.getException().toString());
                                Toast.makeText(SigninActivity.this, task.getException().toString(),
                                        Toast.LENGTH_SHORT).show();
                            }
                        }
                    });
        } else {
            onSignInSuccess();
        }
    }
}