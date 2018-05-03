package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
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

import in.paperwrk.safetycollabproject.HomeActivity;
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.utilities.Helpers;

public class SigninActivity extends AppCompatActivity implements View.OnClickListener {

    private static final String TAG = SigninActivity.class.getSimpleName();
    private static final int RC_SIGN_IN = 1011;

    private SignInButton mGoogleSignInButton;
    private Button mSignInButton;
    private TextView mSignUpTextView;
    private TextView mForgotPasswordTextView;
    private FirebaseAuth mFirebaseAuth;
    private GoogleSignInClient mGoogleSigninClient;
    private TextInputEditText mEmailText;
    private TextInputEditText mPasswordText;
    private Helpers mHelpers;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
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
        mGoogleSignInButton = findViewById(R.id.sign_in_goggle_button);
        mGoogleSignInButton.setSize(SignInButton.SIZE_WIDE);
        mGoogleSignInButton.setColorScheme(SignInButton.COLOR_DARK);

        mSignInButton = findViewById(R.id.sign_in_button);
        mSignUpTextView = findViewById(R.id.sign_in_register_tv);
        mForgotPasswordTextView = findViewById(R.id.sign_in_forgot_pass_tv);
        mEmailText = findViewById(R.id.sign_in_email_tv);
        mPasswordText = findViewById(R.id.sign_in_password_tv);


        mGoogleSignInButton.setOnClickListener(this);
        mSignInButton.setOnClickListener(this);
        mSignUpTextView.setOnClickListener(this);
        mForgotPasswordTextView.setOnClickListener(this);
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

        if(email.isEmpty()){
            mHelpers.showAlertDialog(getString(R.string.email_required_msg),getString(R.string.enter_email_msg)).show();
            return;
        }

        if(password.isEmpty()){
            mHelpers.showAlertDialog(getString(R.string.password_required_msg),getString(R.string.enter_password_msg)).show();
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
            handleSignInResult(task);

        }
    }

    private void handleSignInResult(Task<GoogleSignInAccount> completedTask) {
        try {
            GoogleSignInAccount account = completedTask.getResult(ApiException.class);
            firebaseAuthWithGoogle(account);
            Log.i(TAG, account.getDisplayName());

        } catch (ApiException e) {
            // The ApiException status code indicates the detailed failure reason.
            // Please refer to the GoogleSignInStatusCodes class reference for more information.
            String errorMessage = new Helpers(this).getErrorMessage(e.getStatusCode());
            Log.w(TAG, "TAG:failed code=" + e.getStatusCode());
            Toast.makeText(this, errorMessage, Toast.LENGTH_SHORT).show();
        }
    }

    private void firebaseAuthWithGoogle(GoogleSignInAccount acct) {
        AuthCredential credential = GoogleAuthProvider.getCredential(acct.getIdToken(), null);
        mFirebaseAuth.signInWithCredential(credential)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            // Sign in success, update UI with the signed-in user's information
                            Log.d(TAG, "signInWithCredential:success");
                            // Signed in successfully, show authenticated UI.
                            navigateToHome();
                        } else {
                            // If sign in fails, display a message to the user.
                            Log.d(TAG, "signInWithCredential:failure"+ task.getException().getMessage());
                        }
                    }
                });
    }

    private void loginWithFirebaseEmailPassword(String email, String password){
        mHelpers.showProgressDialog(getString(R.string.loading_msg));
        mFirebaseAuth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        mHelpers.hideProgressDialog();
                        if(task.isSuccessful()){
                            mHelpers.showToast(getString(R.string.login_success));
                            navigateToHome();
                        }else{
                          mHelpers.showAlertDialog(getString(R.string.error_message), task.getException().getMessage()).show();
                        }
                    }
                });
    }

}
