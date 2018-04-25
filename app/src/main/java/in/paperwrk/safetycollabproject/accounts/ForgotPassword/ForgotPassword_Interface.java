package in.paperwrk.safetycollabproject.accounts.ForgotPassword;

/**
 * Created by Vinay Gupta on 25-04-2018.
 */

public interface ForgotPassword_Interface {

    void showDialog();

    void hideDialog();

    void startProcess(String email);

    void mailSuccessfullySent();

    void errorWhileSendingMail(Exception e);
}

