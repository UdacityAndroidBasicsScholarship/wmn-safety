package in.paperwrk.safetycollabproject.RequestProvider;

import com.google.firebase.auth.FirebaseAuth;

public class ClientProvider {

    private ClientProvider(){}

    private static FirebaseAuth firebaseAuth;

    public static FirebaseAuth getFirebaseAuth_Instance(){
        if(firebaseAuth == null)
            firebaseAuth = FirebaseAuth.getInstance();

        return firebaseAuth;
    }

}
