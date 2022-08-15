package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "resources",
        glue = {"stepDefinitions"},
        tags={"@Booking"},
        plugin = { "pretty", "html:target/cucumber-reports"},
        monochrome = true,
        strict = true
)

public class TestRunner {

}
