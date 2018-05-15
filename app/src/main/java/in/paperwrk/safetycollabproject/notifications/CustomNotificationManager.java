package in.paperwrk.safetycollabproject.notifications;


import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.v4.app.NotificationCompat;

import in.paperwrk.safetycollabproject.R;

public class CustomNotificationManager {

    private static final int NOTIFICATION_ID = 123;
    private Context ctx;

    public CustomNotificationManager(Context ctx) {
        this.ctx = ctx;
    }


    void showNotif(String notificationBody, Intent intent){
        PendingIntent pendingIntent = PendingIntent.getActivity(
                ctx,
                NOTIFICATION_ID,
                intent,
                PendingIntent.FLAG_UPDATE_CURRENT
        );

        NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx,"Shehed");

        Notification mNotification = builder.setSmallIcon(R.mipmap.ic_launcher)
                .setAutoCancel(true)
                .setLargeIcon(BitmapFactory.decodeResource(ctx.getResources(),R.mipmap.ic_launcher))
                .setContentIntent(pendingIntent)
                .setContentTitle("Ojasvi")
                .setContentText(notificationBody)
                .build();


        mNotification.flags |= Notification.FLAG_AUTO_CANCEL;
        mNotification.defaults |= Notification.DEFAULT_SOUND;
        mNotification.defaults |= Notification.DEFAULT_VIBRATE;


        NotificationManager notificationManager = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE)   ;
        if (notificationManager != null) {
            notificationManager.notify(NOTIFICATION_ID, mNotification);
        }

    }



}
