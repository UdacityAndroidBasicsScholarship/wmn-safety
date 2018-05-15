package in.paperwrk.safetycollabproject.notification;

import android.content.Intent;

import com.google.firebase.iid.FirebaseInstanceIdService;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import in.paperwrk.safetycollabproject.activities.HomeActivity;

public class MyFirebaseMessagingService extends FirebaseMessagingService{

    private static final String TAG = "fcmMessage";

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (remoteMessage.getNotification() != null){
            //log it up
        }
        notifyUser(remoteMessage.getFrom(), remoteMessage.getNotification().getBody());
    }

    private void notifyUser(String from, String body) {
        MyNotificationManager myNotificationManager = new MyNotificationManager(getApplicationContext());
        myNotificationManager.showNotification(body, new Intent(getApplicationContext(), HomeActivity.class));

    }
}
