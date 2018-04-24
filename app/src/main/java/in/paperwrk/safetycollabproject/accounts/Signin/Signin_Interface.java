package in.paperwrk.safetycollabproject.accounts.Signin;

public interface Signin_Interface {

    void showDialog();

    void hideDialog();

    void authenticationSuccess();

    void startAuthenticating(String auth_email, String auth_password);

    void onError(Exception e);

    void emptyFieldPresent();
}
