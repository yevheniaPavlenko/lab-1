package work_1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage(WebDriver driver) {
        super();
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//*[@id=\"root\"]/div/main/div/div/div[1]/input")
    private WebElement emailField;

    @FindBy(xpath = "//*[@id=\"root\"]/div/main/div/div/div[2]/input")
    private WebElement passwordField;

    @FindBy(xpath = "//button[text() = 'Log In']")
    private WebElement buttonOk;

    public void loginAccaunt(String email,String password){
        emailField.sendKeys(email);
        passwordField.sendKeys(password);
        buttonOk.click();
    }
}
