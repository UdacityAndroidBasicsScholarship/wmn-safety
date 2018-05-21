package in.paperwrk.safetycollabproject.accounts;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputEditText;
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
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.HashMap;
import java.util.Map;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.models.UserData;

public class ManageAccountActivity extends AppCompatActivity {

    TextInputEditText mNameInputEditText = null,
            mEmailInputEditText = null,
            mPhoneInputEditText = null;

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

        mNameInputEditText = findViewById(R.id.account_update_full_name);
        mEmailInputEditText = findViewById(R.id.account_update_email);
        mPhoneInputEditText = findViewById(R.id.account_update_phone);

        mFirebaseAuth = FirebaseAuth.getInstance();
        mFirebaseUser = mFirebaseAuth.getCurrentUser();
        mFirebaseDatabase = FirebaseDatabase.getInstance();
        mDatabaseReference = mFirebaseDatabase.getReference().child("users");

        mDatabaseReference.child(mFirebaseUser.getUid()).addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                UserData userData = dataSnapshot.getValue(UserData.class);
                if(userData != null)  {
                    mNameInputEditText.setText(userData.getName());
                    mEmailInputEditText.setText(userData.getEmail());
                    mPhoneInputEditText.setText(userData.getNumber());
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });
    }

    public void updateAccount(View view) {
        OnCompleteListener<Void> listener = new OnCompleteListener<Void>() {
            @Override
            public void onComplete(@NonNull Task<Void> task) {
                if (task.isSuccessful()) {
                    Toast.makeText(getApplicationContext(), "Account Update Successful", Toast.LENGTH_SHORT).show();
                } else {
                    Log.e("Update Failed", task.getException() + "");
                    Toast.makeText(getApplicationContext(), "Account Update Failed", Toast.LENGTH_SHORT).show();
                }
            }
        };
        String name = ((EditText) (findViewById(R.id.account_update_full_name))).getText().toString();
        String email = ((EditText) (findViewById(R.id.account_update_email))).getText().toString();
        String phone = ((EditText) (findViewById(R.id.account_update_phone))).getText().toString();
        String UID = mFirebaseUser.getUid();
        DatabaseReference reference = mDatabaseReference.child(UID);
        Map<String, Object> updates = new HashMap<>();
        if (!name.isEmpty()) {
            updates.put("/name", name);
        }
        if (!email.isEmpty()) {
            mFirebaseUser.updateEmail(email).addOnCompleteListener(this, listener);
            updates.put("/email", email);
        }
        if (!phone.isEmpty()) {
            updates.put("/number", phone);
        }
        reference.updateChildren(updates).addOnCompleteListener(this, listener);
        Intent intent = this.getPackageManager().getLaunchIntentForPackage(getBaseContext().getPackageName());
        if (intent != null) {
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        }
        startActivity(intent);
    }

    public void changePassword(View view) {
        String password = ((EditText) (findViewById(R.id.account_update_password))).getText().toString();
        String confirmPassword = ((EditText) (findViewById(R.id.account_update_confirm_password))).getText().toString();

        if(password.isEmpty() && confirmPassword.isEmpty()) {
            Toast.makeText(getApplicationContext(), "New password & Confirm password can't be empty!", Toast.LENGTH_SHORT).show();
        } else {
            if (!password.equals(confirmPassword)) {
                Toast.makeText(getApplicationContext(), "New password & Confirm password should be same!", Toast.LENGTH_SHORT).show();
            } else {

                mFirebaseUser.updatePassword(password).addOnCompleteListener(this, new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
                        if (task.isSuccessful()) {
                            Toast.makeText(getApplicationContext(), "Password updated successfully", Toast.LENGTH_SHORT).show();
                        } else {
                            Log.e("Password Update", task.getException() + "");
                            Toast.makeText(getApplicationContext(), "Password update failed", Toast.LENGTH_SHORT).show();
                        }
                    }
                });
            }
        }
    }
}