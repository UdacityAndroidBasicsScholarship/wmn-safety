package in.paperwrk.safetycollabproject.accounts.Signup;

public interface Signup_Interface {

    void showDialog();

    void hideDialog();

    void authenticationSuccess();

    void startAuthenticating(String auth_email, String auth_password);

    void authticationFailed();

    void onError(Exception e);

    void emptyFieldPresent();
}
