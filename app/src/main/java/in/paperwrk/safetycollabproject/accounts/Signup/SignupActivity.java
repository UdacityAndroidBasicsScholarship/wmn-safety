package in.paperwrk.safetycollabproject.accounts.Signup;

import android.app.ProgressDialog;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
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
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.accounts.Signin.SigninActivity;

public class SignupActivity extends AppCompatActivity  implements Signup_Interface{

    Signup_Interface signup_interface;

    @BindViews({R.id.email_signup_et, R.id.pswrd_signup_et})
    List<EditText> editTexts;

    ProgressDialog progressDialog;

    Unbinder unbinder;

    private boolean checkEmptyFeild(){

        for(EditText editText : editTexts){
            if(editText.getText().toString().trim().isEmpty())
                return true;
        }

        return false;
    }

    final ButterKnife.Action<View> EMPTY_FIELD = new ButterKnife.Action<View>() {
        @Override public void apply(View view, int index) {
            Toast.makeText(SignupActivity.this, "Enter email", Toast.LENGTH_LONG).show();
        }
    };


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        unbinder = ButterKnife.bind(this);

        signup_interface = this;
    }

    @OnClick(R.id.button)
    public void signUpButton(){

        signup_interface.showDialog();

        if(checkEmptyFeild()){
            signup_interface.hideDialog();
            signup_interface.emptyFieldPresent();
        } else {
            signup_interface.startAuthenticating(editTexts.get(0).getText().toString().trim(),
                    editTexts.get(1).getText().toString().trim());
        }

    }

    @Override
    protected void onDestroy() {
        signup_interface.hideDialog();
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
        AppInfo.firebaseAuth.signOut();
        startSignInActivity();
    }

    @Override
    public void startAuthenticating(String auth_email, String auth_password) {
        AppInfo.firebaseAuth.createUserWithEmailAndPassword(auth_email, auth_password)
                .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {

                        if(task.isSuccessful()){
                            signup_interface.hideDialog();
                            signup_interface.authenticationSuccess();
                        } else {
                            signup_interface.hideDialog();
                            signup_interface.onError(task.getException());
                        }
                    }
                });
    }

    @Override
    public void authticationFailed() {

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

    private void startSignInActivity(){
        finish();
        startActivity(new Intent(this, SigninActivity.class));
    }
}

