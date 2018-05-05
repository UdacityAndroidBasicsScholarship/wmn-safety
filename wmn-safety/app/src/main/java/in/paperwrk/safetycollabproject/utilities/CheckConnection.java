package in.paperwrk.safetycollabproject.utilities;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

public class CheckConnection {

    private Context mContext;
    public CheckConnection(Context context) {
        mContext = context;

    }

    /*
        Get Network Information
     */
    public NetworkInfo getNetworkInfo() {
        ConnectivityManager connectivityManager =
                (ConnectivityManager) mContext.getSystemService(mContext.CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo = connectivityManager.getActiveNetworkInfo();
        return networkInfo;
    }

    /*
        Check whether connected to network or not
     */

    public Boolean isConnected(){
        NetworkInfo networkInfo = getNetworkInfo();
        return networkInfo != null &&  networkInfo.isConnectedOrConnecting();
    }
    /*
        Check whether Connected to Wifi or not
     */

    public Boolean isWifiConnected(){
        NetworkInfo networkInfo = getNetworkInfo();
        return networkInfo.getType() == ConnectivityManager.TYPE_WIFI;
    }
    /*
        Check whether Connected to Mobile Data or not
     */

    public Boolean isMobileConnected(){
        NetworkInfo networkInfo = getNetworkInfo();
        return networkInfo.getType() == ConnectivityManager.TYPE_MOBILE;
    }
}
