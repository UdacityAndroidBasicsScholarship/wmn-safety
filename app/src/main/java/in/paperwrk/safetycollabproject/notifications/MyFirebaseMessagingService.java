package in.paperwrk.safetycollabproject.notifications;

import android.content.Intent;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import in.paperwrk.safetycollabproject.activities.HomeActivity;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    private static final String TAG = MyFirebaseMessagingService.class.getSimpleName();

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (remoteMessage.getNotification() != null){
            //log this up
        }
        showNotification(remoteMessage.getFrom(), remoteMessage.getNotification().getBody());
    }

    private void showNotification(String from, String body) {
        CustomNotificationManager customNotificationManager = new CustomNotificationManager(getApplicationContext());
        customNotificationManager.showNotif(body, new Intent(getApplicationContext(), HomeActivity.class));

    }
}
