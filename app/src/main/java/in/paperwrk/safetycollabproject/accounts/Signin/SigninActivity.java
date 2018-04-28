package in.paperwrk.safetycollabproject.accounts.Signin;

import android.app.ProgressDialog;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EdgeEffect;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;

import java.util.List;

import butterknife.BindViews;
import butterknife.ButterKnife;
import butterknife.OnClick;
import butterknife.Unbinder;
import in.paperwrk.safetycollabproject.AppInfo;
import in.paperwrk.safetycollabproject.MainActivity;
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.accounts.ForgotPassword.ForgotPasswordActivity;
import in.paperwrk.safetycollabproject.accounts.Signup.SignupActivity;

public class SigninActivity extends AppCompatActivity implements Signin_Interface {

    Unbinder unbinder;
    Signin_Interface mInterface;
    ProgressDialog progressDialog;

    @BindViews({R.id.email_signin_et, R.id.pswrd_signin_et})
    List<EditText> editTexts;

    private boolean checkEmptyFeild(){

        for(EditText editText : editTexts){
            if(editText.getText().toString().trim().isEmpty())
                return true;
        }

        return false;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        unbinder = ButterKnife.bind(this);
        mInterface = this;

        if(AppInfo.firebaseAuth.getCurrentUser() != null) {
            startMainActivity();
        }

    }

    @OnClick(R.id.signin_button)
    public void signInButton(){

        mInterface.showDialog();

        if(checkEmptyFeild()){
            mInterface.hideDialog();
            mInterface.emptyFieldPresent();
        } else {
            mInterface.startAuthenticating(editTexts.get(0).getText().toString().trim(),
                    editTexts.get(1).getText().toString().trim());
        }
    }

    @OnClick(R.id.signup_tv)
    public void signUpClick(){
        startActivity(new Intent(this, SignupActivity.class));
    }

    @OnClick(R.id.forgotpassword_tv)
    public void forgotPasswordClick(){
        startActivity(new Intent(this, ForgotPasswordActivity.class));
    }

    protected void onDestroy() {
        mInterface.hideDialog();
        unbinder.unbind();

        super.onDestroy();
    }

    @Override
    public void showDialog() {

        progressDialog = ProgressDialog.show(this, null, "Authticating", true, false);
    }

    @Override
    public void hideDialog() {

        if(progressDialog != null){
            progressDialog.dismiss();
            progressDialog = null;
        }
    }

    @Override
    public void authenticationSuccess() {
        startMainActivity();
    }

    @Override
    public void startAuthenticating(String auth_email, String auth_password) {
        AppInfo.firebaseAuth.signInWithEmailAndPassword(auth_email, auth_password)
                .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {

                        if(task.isSuccessful()){
                            mInterface.hideDialog();
                            mInterface.authenticationSuccess();
                        } else {
                            mInterface.hideDialog();
                            mInterface.onError(task.getException());
                        }
                    }
                });
    }

    @Override
    public void onError(Exception e) {
        Toast.makeText(this, e.getMessage(), Toast.LENGTH_LONG).show();
    }

    @Override
    public void emptyFieldPresent() {
        Toast.makeText(this, "empty field", Toast.LENGTH_LONG).show();
//        ButterKnife.apply(editTexts, EMPTY_FIELD);
    }

    private void startMainActivity(){
        finish();
        startActivity(new Intent(this, MainActivity.class));
    }
}
