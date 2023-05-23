package work_1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MainPage {

    public MainPage(WebDriver driver) {
        super();
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//a[text() = 'Registration']")
    private WebElement registerButton;

    @FindBy(xpath = "//a[text() = 'Authorization']")
    private WebElement authButton;

    public void clickReg(){
        registerButton.click();
    }
    public void clickAuth(){
        authButton.click();
    }
}
