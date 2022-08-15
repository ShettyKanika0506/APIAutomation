API framework for Hotel Booking using Cucumber BDD using RestAssured-Java
This framework contains test scenarios to test all booking apis.
Components:
1.Feature Files
a. Booking.feature > feature file containing all hotel booking scenarios.

2. StepDefinition File
a. BookingStepFile > stepdef for mapping the booking feature methods

3.TestRunner > contains all methods for testing all booking apis.

4.APIUtils.java > this file contains basic utilities for loading/reading the JSON config files.
5. Resources
a.API folder > contains all API json files
b.configs>Config.properties > contains baseUrl, credential details.
c. Booking Feature file

6. target folder > Cucumber reports will be generated under "cucumber-reports" path
7. pom.xml > contains all dependencies for the maven project

Steps to run the project :
1.Open "TestRunner" file and under "tags" mention the tagname from feature you want to execute
2. Save the changes
3. Right click on TestRunner > Run as Junit Test
4. After execution, check the report under "target/cucumber-reports" folder
