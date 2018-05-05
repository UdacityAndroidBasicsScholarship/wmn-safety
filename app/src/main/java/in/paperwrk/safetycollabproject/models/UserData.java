package in.paperwrk.safetycollabproject.models;

public class UserData {
    private String name, email, number;

    public UserData(String name, String email, String number) {
        this.email = email;
        this.name = name;
        this.number = number;
    }

    public UserData() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}
