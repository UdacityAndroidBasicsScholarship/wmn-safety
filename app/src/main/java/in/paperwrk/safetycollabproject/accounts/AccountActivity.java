package in.paperwrk.safetycollabproject.accounts;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
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
        mDatabaseReference = mFirebaseDatabase.getReference().child("users");
    }

    public void updateAccount(View view) {
        OnCompleteListener<Void> listener = new OnCompleteListener<Void>() {
            @Override
            public void onComplete(@NonNull Task<Void> task) {
                if (task.isSuccessful()) {
                    Toast.makeText(getApplicationContext(), "Account Update Successful", Toast.LENGTH_SHORT).show();
                } else {
                    Log.e("Update Failed", task.getException().toString());
                    Toast.makeText(getApplicationContext(), "Account Update Failed", Toast.LENGTH_SHORT).show();
                }
            }
        };
        String name = ((EditText) (findViewById(R.id.account_update_full_name))).getText().toString();
        String email = ((EditText) (findViewById(R.id.account_update_email))).getText().toString();
        String phone = ((EditText) (findViewById(R.id.account_update_phone))).getText().toString();
        String UID = mFirebaseUser.getUid();
        if (!name.isEmpty()) {
            mDatabaseReference.child(UID).child("name").setValue(name).addOnCompleteListener(this, listener);
        }
        if (!email.isEmpty()) {
            mFirebaseUser.updateEmail(email).addOnCompleteListener(this, listener);
            mDatabaseReference.child(UID).child("email").setValue(email).addOnCompleteListener(this, listener);
        }
        if (!phone.isEmpty()) {
            mDatabaseReference.child(UID).child("number").setValue(phone).addOnCompleteListener(this, listener);
        }
    }

    public void changePassword(View view) {
        String password = ((EditText) (findViewById(R.id.account_update_password))).getText().toString();
        mFirebaseUser.updatePassword(password).addOnCompleteListener(this, new OnCompleteListener<Void>() {
            @Override
            public void onComplete(@NonNull Task<Void> task) {
                if (task.isSuccessful()) {
                    Toast.makeText(getApplicationContext(), "Password updated successfully", Toast.LENGTH_SHORT).show();
                } else {
                    Log.e("Password Update", task.getException().toString());
                    Toast.makeText(getApplicationContext(), "Password update failed", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}