package work_1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegistationPage {
    public RegistationPage(WebDriver driver) {
        super();
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//*[@id=\"root\"]/div/main/div/div/div[1]/input")
    private WebElement userName;

    @FindBy(xpath = "//*[@id=\"root\"]/div/main/div/div/div[2]/input")
    private WebElement email;

    @FindBy(xpath = "//*[@id=\"root\"]/div/main/div/div/div[3]/input")
    private WebElement password;

    @FindBy(xpath = "//*[@id=\"root\"]/div/main/div/div/div[4]/input")
    private WebElement confpassword;

    @FindBy(xpath = "//button[text() = 'Register Now']")
    private WebElement registerButton;

    public void regUser(String name,String emailUs, String passwordUs){
        userName.sendKeys(name);
        email.sendKeys(emailUs);
        password.sendKeys(passwordUs);
        confpassword.sendKeys(passwordUs);
        registerButton.click();
    }
}
