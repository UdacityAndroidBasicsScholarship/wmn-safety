package in.paperwrk.safetycollabproject.accounts.Signup;

/**
 * Created by Vinay Gupta on 25-04-2018.
 */

public interface Signup_Interface {

    void showDialog();

    void hideDialog();

    void authenticationSuccess();

    void startAuthenticating(String auth_email, String auth_password);

    void authticationFailed();

    void onError(Exception e);

    void emptyFieldPresent();
}

