package in.paperwrk.safetycollabproject.accounts.ForgotPassword;

import android.app.ProgressDialog;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import butterknife.Unbinder;
import in.paperwrk.safetycollabproject.AppInfo;
import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.accounts.Signin.SigninActivity;

public class ForgotPasswordActivity extends AppCompatActivity implements ForgotPassword_Interface{

    @BindView(R.id.email_forgot_et)
    EditText forotEmail_EditText;

    ProgressDialog progressDialog;

    Unbinder unbinder;

    ForgotPassword_Interface mInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);

        unbinder = ButterKnife.bind(this);

        mInterface = this;
    }

    @Override
    protected void onDestroy() {
        mInterface.hideDialog();
        unbinder.unbind();
        super.onDestroy();
    }

    @OnClick(R.id.forgotpswrd_button)
    public void forgotButton(){
        if(forotEmail_EditText.getText().toString().isEmpty()){

        } else {
            mInterface.showDialog();
            mInterface.startProcess(forotEmail_EditText.getText().toString().trim());
        }
    }
    @Override
    public void showDialog() {

        progressDialog = ProgressDialog.show(this, null, "Authticating", true, false);
    }

    @Override
    public void startProcess(String email){

        AppInfo.firebaseAuth.sendPasswordResetEmail(email)
                .addOnCompleteListener(new OnCompleteListener<Void>() {
            @Override
            public void onComplete(@NonNull Task<Void> task) {

                if(task.isSuccessful())
                    mInterface.mailSuccessfullySent();
                else
                    mInterface.errorWhileSendingMail(task.getException());
            }
        });
    }

    @Override
    public void hideDialog() {

        if(progressDialog != null){
            progressDialog.dismiss();
            progressDialog = null;
        }
    }

    @Override
    public void mailSuccessfullySent() {

        mInterface.hideDialog();
        finish();
        Toast.makeText(ForgotPasswordActivity.this, "We have sent you instructions to reset your password!", Toast.LENGTH_LONG).show();

    }

    @Override
    public void errorWhileSendingMail(Exception e) {

        mInterface.hideDialog();
        Toast.makeText(this, e.getMessage(), Toast.LENGTH_LONG).show();
    }
}
