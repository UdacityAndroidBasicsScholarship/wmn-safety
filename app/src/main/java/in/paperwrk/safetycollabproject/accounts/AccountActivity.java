package in.paperwrk.safetycollabproject.accounts;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import in.paperwrk.safetycollabproject.R;

public class AccountActivity extends AppCompatActivity {

    FirebaseAuth mFirebaseAuth = null;
    FirebaseUser mFirebaseUser = null;
    FirebaseDatabase mFirebaseDatabase = null;
    DatabaseReference mDatabaseReference = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_account);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        setTitle("Update Account");

        mFirebaseAuth = FirebaseAuth.getInstance();
        mFirebaseUser = mFirebaseAuth.getCurrentUser();
        mFirebaseDatabase = FirebaseDatabase.getInstance();
        mDatabaseReference = mFirebaseDatabase.getReference();
    }

    public void updateAccount(View view) {
        // TODO: Update account details: FullName, Email, Phone
    }

    public void changePassword(View view) {
        // TODO: Change password
    }
}