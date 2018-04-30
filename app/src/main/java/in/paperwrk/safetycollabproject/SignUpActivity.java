package in.paperwrk.safetycollabproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.TextView;

public class SignUpActivity extends AppCompatActivity implements OnClickListener {

  TextView textViewSignInLink;
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_sign_up);

    initViews();
    initListeners();
    initObjects();

  }


  /**
   * This method for initialization Views
   */
  private void initViews() {
    textViewSignInLink=findViewById(R.id.textViewSignInLink);
    }

  /**
   * This method for initialization Listeners
   */
  private void initListeners() {
    textViewSignInLink.setOnClickListener(this);

  }

  /**
   * This method for initialization Objects
   */
  private void initObjects() {

  }
  @Override
  public void onClick(View v) {

    if (v.getId() == textViewSignInLink.getId()){
      Intent intent=new Intent(this, LoginActivity.class);
      intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
      startActivity(intent);
      finish();
    }
  }
}
