package in.paperwrk.safetycollabproject.accounts.ForgotPassword;

public interface ForgotPassword_Interface {

    void showDialog();

    void hideDialog();

    void startProcess(String email);

    void mailSuccessfullySent();

    void errorWhileSendingMail(Exception e);
}
