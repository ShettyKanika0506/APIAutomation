package stepDefinitions;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.parser.ParseException;


import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.response.Response;
import tester.BookingTester;

public class BookingStepFile {
	
	public static String token;
	public static Response response;
	public static String jsonString;
	public static String bookId;
	public static String apifile;
	public HashMap<String,Object>bookingdetails=new HashMap<String,Object>();
	public HashMap<String,Object>authToken=new HashMap<String,Object>();
	BookingTester tester=new BookingTester();
	
	@Given("user generates token using createAuth api")
	public void generateAuthToken() 
	{
		tester.callgenerateAuthToken();
	}
	
	@Given("user creates booking using CreateBooking api")
	public void createBooking() throws IOException, ParseException
	{
		String apifile="CreateBooking.json";
		tester.createBooking(apifile);
	}

	@Then("user gets booking details using GetBooking api")
	public void callGetBooking() 
	{
	   tester.getBookingById();
	}
	
	@Given("user updates booking using update Booking api")
	public void updateBooking() throws IOException, ParseException
	{
		String apifile="UpdateBooking.json";
		tester.updateBooking(apifile);
	}
	@Then("^user receives response code (\\d+)$")
	public void user_receives_response_code(int status) {
		tester.validateResponseCode(status);
	   
	}
	@Then("user retrieves the bookingId for the new booking")
	public void retrieveBookingId()
	{
		tester.retrieveBookingId();
	}
	
	@Then("user gets all booking details")
	public void getAllBookingIds()
	{
		tester.getAllBookingIds();
	}
	
	@Then("user partially updates using partialUpdateBooking api")
	public void partialUpdate() throws IOException, ParseException {
	   
		String apifile="PartialUpdateBooking.json";
		tester.updatePartialBooking(apifile);
	}
	
	@Then("user deletes booking using deleteBooking api")
	public void deleteBooking()
	{
		tester.deleteBooking();
	}

	
	@Then("user validates getBooking response")
	public void validateGetBookingResponse()
	{
		tester.validateGetBookingResponse();
	}
	
	@Then("user validates additionalneeds updated to {string}")
	public void user_validates_additionalneeds_updated_to(String additionalNeeds) {
	   
	   tester.validateUpdateBookingResponse(additionalNeeds);
	}
	
	@Then("user validates lastname updated to {string}")
	public void user_validates_lastname_updated_to(String lastname) {
	   
	   tester.validatePartialUpdateBookingResponse(lastname);
	}
	//negative steps
	@Given("user creates booking using CreateBooking api with invalid request")
	public void createBookingInvalidReq() throws IOException, ParseException
	{
		String apifile="CreateBookingIncompleteBody.json";
		tester.createBooking(apifile);
	}
	@Given("user creates booking using CreateBooking api with invalid url")
	public void createBookingInvalidEndpoint() throws IOException, ParseException
	{
		String apifile="CreateBooking.json";
		tester.createBookingInvalidEndpoint(apifile);
	}
	@Given("user partially updates booking using PartialUpdateBooking api without auth token")
	public void partialUpdateWithoutToken() throws IOException, ParseException
	{
		String apifile="PartialUpdateBooking.json";
		tester.updatePartialBookingWithoutToken(apifile);
	}
	
	@Given("user partially updates booking using PartialUpdateBooking api with invalid params")
	public void partialUpdateInvalidCheck(DataTable data) throws IOException, ParseException
	{
		String apifile="PartialUpdateBooking.json";
		List<Map<String,String>>list=data.asMaps();
		tester.updatePartialBookingWithInvalidEndpoint(apifile, data);
	}

	@Then("user validates error response")
	public void validateErrorCode(DataTable data) throws IOException, ParseException
	{
		
	
		tester.validateErrorCode(data);
	}
	
	@Given("user deletes booking using deleteBooking api without bookingId")
	public void deleteBookingWithoutId()
	{
		
		
		tester.deleteBookingWithoutBookingId();
	}
	
	@Given("user gets all booking details with incorrect endpoint")
	public void getAllBookingNegCheck()
	{
		
		
		tester.getAllBookingIdsWithInvalidParams();
	}
	
	@Then("user gets booking details using getBookingByName with firstname {string} and lastname {string}")
	public void getBookingByName(String fname,String lname) {
	   
	   tester.getBookingByName(fname,lname);
	}
	
	@Then("user gets booking details using getBookingByDate with checkin {string} and checkoutdate {string}")
	public void getBookingByDate(String checkin,String checkout) {
	   
	   tester.getBookingByDate(checkin,checkout);
	}
	
	@Then("user validates getBookingById response")
	public void validateGetBookingById(DataTable data) throws IOException, ParseException
	{
		
		
		tester.validateGetBookingByIdResponse(data);
	}
	}
