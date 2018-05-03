package in.paperwrk.safetycollabproject.models;

public class UserData {
    private String mName, mEmail, mNumber;

    UserData(String name,String email, String number){
        this.mEmail = email;
        this.mName = name;
        this.mNumber = number;
    }

    UserData(){}

    public void setmEmail(String mEmail) {
        this.mEmail = mEmail;
    }

    public String getmName() {
        return mName;
    }

    public String getmNumber() {
        return mNumber;
    }

    public String getmEmail() {
        return mEmail;
    }

    public void setmName(String mName) {
        this.mName = mName;
    }

    public void setmNumber(String mNumber) {
        this.mNumber = mNumber;
    }
}
