import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import work_1.LoginPage;
import work_1.MainPage;
import work_1.RegistationPage;
import work_1.ScreenshotUs;

import java.io.IOException;


public class Work_1 {

    WebDriver driver;
    work_1.LoginPage loginPage;
    work_1.MainPage mainPage;
    work_1.RegistationPage regPage;
    work_1.ScreenshotUs screenshotUs;


    private String work = "http://localhost:5173";

    @BeforeClass
    public void initDriver(){
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        System.setProperty("webdriver.http.factory", "jdk-http-client");
        driver = new ChromeDriver(options);
        driver.manage().window().maximize();
    }

    @Test
    public void regUser() throws IOException, InterruptedException {
        String name = "TestUser", email = "Test12@gmail.com", password = "123456AA";
        String nameScreen = "NameScreen.png";
        driver.get(work);
        mainPage = new MainPage(driver);
        mainPage.clickReg();
        regPage = new RegistationPage(driver);
        regPage.regUser(name,email,password);
        screenshotUs = new ScreenshotUs();
        screenshotUs.ScreenshotUs(driver,nameScreen);
    }

    @Test
    public void logUser(){
        String name = "Test12@gmail.com", password = "123456AA";
        driver.get(work);
        mainPage = new MainPage(driver);
        mainPage.clickAuth();
        loginPage = new LoginPage(driver);
        loginPage.loginAccaunt(name,password);

    }


    @AfterClass
    public void endTest(){
        // закрытие браузера
        driver.quit();
    }

}