package in.paperwrk.safetycollabproject.notifications;

import android.content.Intent;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

public class FastParrotService extends FirebaseInstanceIdService{


    public final String TOKEN_BROADCAST = "myfcmtoken";

    // using this token you can send notif to just one user
    // helpful in A/B testing
    @Override
    public void onTokenRefresh() {
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        // log token if you want
        getApplicationContext().sendBroadcast(new Intent(TOKEN_BROADCAST));
        storeToken(refreshedToken);
    }

    private void storeToken(String token) {
        SharedPrefManager.getInstance(getApplicationContext()).storeToken(token);
    }


}
