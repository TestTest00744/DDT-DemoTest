package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginDetails {

	WebDriver driver;

	@Given(": Open Chrome and Launch Vtiger Application")
	public void open_Chrome_and_Launch_Vtiger_Application() {
		System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\Selenium Browsers Jars\\Chrome\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:8888/");
		driver.manage().window().maximize();
	}

	@When(": Title of the Application Vtiger")
	public void title_of_the_Application_Vtiger() {
		System.out.println("Browser of the Title: " + driver.getTitle());
	}

	@Then(": Enter Username and Password in EditBox")
	public void enter_Username_and_Password_in_EditBox() {
		driver.findElement(By.id("username")).sendKeys("admin");
		driver.findElement(By.id("password")).sendKeys("raghu");
	}

	@Then(": Click on SignIn Button")
	public void click_on_SignIn_Button() {
		driver.findElement(By.xpath("//button[@class='btn btn-primary sbutton']")).click();
	}

	@Then(": Home page should display")
	public void home_page_should_display() {
		System.out.println("Browser of the Title" + driver.getTitle());
	}

	@Then(": Close the Browser")
	public void close_the_Browser() {
		driver.quit();
	}

}
