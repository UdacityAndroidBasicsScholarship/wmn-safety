package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TextView;

public class LoginActivity extends AppCompatActivity implements OnClickListener {


  private TextView textViewRegister;
  private TextView textViewForgotPass;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_login);

    initViews();
    initListeners();
    initObjects();

  }

  /**
   * This method for initialization Views
   */
  private void initViews() {
    textViewRegister = findViewById(R.id.textViewLinkRegister);
    textViewForgotPass = findViewById(R.id.textViewForgotPass);
  }

  /**
   * This method for initialization Listeners
   */
  private void initListeners() {
    textViewRegister.setOnClickListener(this);
    textViewForgotPass.setOnClickListener(this);

  }

  /**
   * This method for initialization Objects
   */
  private void initObjects() {

  }

  @Override
  public void onClick(View v) {

    if (v.getId() == textViewRegister.getId()) {
      Intent intent = new Intent(LoginActivity.this, SignUpActivity.class);
      startActivity(intent);
    }else if (v.getId() == textViewForgotPass.getId()){
      Intent intent = new Intent(LoginActivity.this, ForgotPasswordActivity.class);
      startActivity(intent);
    }
  }
}
