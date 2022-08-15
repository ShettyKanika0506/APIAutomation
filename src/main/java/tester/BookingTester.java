package tester;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;

import CommonUtils.APIUtils;
import io.cucumber.datatable.DataTable;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class BookingTester {

	
	public static String token;
	public static Response response;
	public static String jsonString;
	public static int bookId;
	public static String token_uri="/auth";
	public static String getBookingById_uri="/booking/";
	public static String post_uri="/booking";
	public static String getBookingIds_uri="/booking";
	public static String update_uri="/booking/";
	public static String partialUpdate_uri="/booking/";
	public static String delete_uri="/booking/";
	public static String postInvalid_uri="/book";
	public static String getAllBookingInvalid_url="/book";
	
	APIUtils utils=new APIUtils();
	
	public HashMap<String,Object>bookingdetails=new HashMap<String,Object>();
	public HashMap<String,Object>authToken=new HashMap<String,Object>();
	
	public void callgenerateAuthToken()
	{
		utils.ConfigFileReader();
		RestAssured.baseURI = utils.getApplicationUrl();
		RequestSpecification request = RestAssured.given();
		HashMap<String,Object>credentialsDetails=new HashMap<String,Object>();
		
		//hashmap includes credentials for token generation
		credentialsDetails=utils.getCredentials();
		JSONObject authReq=new JSONObject(credentialsDetails);

		request.header("Content-Type", "application/json");
		response = request.body(authReq.toJSONString()).log().all()
				.post("/auth");

		token=response.jsonPath().get("token");
		
		System.out.println("Token response : "+token);
		authToken.put("token", token);

	}
	
	
	
	public Response createBooking(String api) throws IOException, ParseException
	{
		JSONObject reqJson=utils.readApi(api);
		
		RestAssured.baseURI = utils.getApplicationUrl();
		 response=RestAssured.
         given().contentType(ContentType.JSON).headers("Content-Type", "application/json").body(reqJson.toJSONString()).log().all().
         		post(post_uri);
		 System.out.println("Response of create hotel booking : "+response.prettyPrint());
		 return response;
	}
	
	
	
	public void getBookingById()
	{
		RestAssured.baseURI = utils.getApplicationUrl();
		RequestSpecification request = RestAssured.given();
		
		
		response = request.header("Content-Type", "application/json").log().all().get(getBookingById_uri+bookingdetails.get("bookingid").toString());
		System.out.println("Response of BookingById: " +response.prettyPrint());
		

	}
	//getAllBookingIds
	public void getAllBookingIds()
	{
		RestAssured.baseURI = utils.getApplicationUrl();
		RequestSpecification request = RestAssured.given();
		
		
		response = request.header("Content-Type", "application/json").log().all().get(getBookingIds_uri);
		
		System.out.println("Response of GetAllBookingIds: " +response.prettyPrint());
	}
	
	public Response updateBooking(String api) throws IOException, ParseException
	{
		JSONObject reqJson=utils.readApi(api);
		
		RestAssured.baseURI = utils.getApplicationUrl();
		String tokenValue=authToken.get("token").toString();
		tokenValue="token="+tokenValue;
		System.out.println("token value after concat : "+tokenValue);
		
		Map<String,Object> m = new HashMap<String,Object>();
		m.put("Content-Type", "application/json");
		m.put("Cookie",tokenValue);
		
		 response=RestAssured.
         given().contentType(ContentType.JSON).headers(m).body(reqJson.toJSONString()).log().all().
         		put(update_uri+bookingdetails.get("bookingid").toString());
		
		 System.out.println("Response of update hotel booking : "+response.prettyPrint());
		 return response;

	}
	
	public Response updatePartialBooking(String api) throws IOException, ParseException
	{
		JSONObject reqJson=utils.readApi(api);
		
		RestAssured.baseURI = utils.getApplicationUrl();
		String tokenValue=authToken.get("token").toString();
		tokenValue="token="+tokenValue;
		System.out.println("token value after concat : "+tokenValue);
		
		Map<String,Object> m = new HashMap<String,Object>();
		m.put("Content-Type", "application/json");
		m.put("Cookie",tokenValue);
		
		 response=RestAssured.
         given().contentType(ContentType.JSON).headers(m).body(reqJson.toJSONString()).log().all().
         		patch(partialUpdate_uri+bookingdetails.get("bookingid").toString());
		
		 System.out.println("Response of partial update hotel booking : "+response.prettyPrint());
		 return response;

	}
	
	public void deleteBooking()
	{
		
		RestAssured.baseURI = utils.getApplicationUrl();
		String tokenValue=authToken.get("token").toString();
		tokenValue="token="+tokenValue;
		System.out.println("token value after concat : "+tokenValue);
		
		Map<String,Object> m = new HashMap<String,Object>();
		m.put("Content-Type", "application/json");
		m.put("Cookie",tokenValue);
		response = RestAssured.
		         given().headers(m).log().all().delete(delete_uri+bookingdetails.get("bookingid").toString());
		System.out.println("Response for delete :"+response.prettyPrint()); 

	}
	
	public void validateResponseCode(int statusCode)
	{
		Assert.assertEquals("Http status code matches : ",statusCode,response.getStatusCode());
		System.out.println("Http response code is" +response.getStatusCode());
	}
	public void validateGetBookingResponse()
	{
		String responseString=response.getBody().asString();
		Assert.assertEquals(responseString.contains("bookingid"), true);
	}
	
	public void validateUpdateBookingResponse(String additionalneeds)
	{
		String updatedAdditionalNeeds=response.jsonPath().get("additionalneeds");
		Assert.assertEquals(updatedAdditionalNeeds,additionalneeds);
		System.out.println("AdditionalNeeds updated successfully to :"+updatedAdditionalNeeds);
	}
	
	public void validatePartialUpdateBookingResponse(String lastname)
	{
		String updatedlastname=response.jsonPath().get("lastname");
		Assert.assertEquals(updatedlastname,lastname);
		System.out.println("Lastname updated successfully to :"+updatedlastname);
	}
	public void retrieveBookingId()
	{
		bookId=response.jsonPath().get("bookingid");
		System.out.println("bookingId retrieved:" +bookId);
		bookingdetails.put("bookingid", bookId);
	}
	
	public Response createBookingInvalidEndpoint(String api) throws IOException, ParseException
	{
		JSONObject reqJson=utils.readApi(api);
		
		RestAssured.baseURI = utils.getApplicationUrl();
		 response=RestAssured.
         given().contentType(ContentType.JSON).headers("Content-Type", "application/json").body(reqJson.toJSONString()).log().all().
         		post(postInvalid_uri);

		 System.out.println("Response of create hotel booking with invalid url : "+response.prettyPrint());
		 return response;
	}
	
	public Response updatePartialBookingWithoutToken(String api) throws IOException, ParseException
	{
		JSONObject reqJson=utils.readApi(api);
		
		RestAssured.baseURI = utils.getApplicationUrl();
		
		Map<String,Object> m = new HashMap<String,Object>();
		m.put("Content-Type", "application/json");
		
		 response=RestAssured.
         given().contentType(ContentType.JSON).headers(m).body(reqJson.toJSONString()).log().all().
         		patch(partialUpdate_uri+bookingdetails.get("bookingid").toString());
		
		 System.out.println("Response of partial update hotel booking without auth token : "+response.prettyPrint());
		 return response;

	}
	
	public Response updatePartialBookingWithInvalidEndpoint(String api,DataTable data) throws IOException, ParseException
	{
		JSONObject reqJson=utils.readApi(api);
		
		RestAssured.baseURI = utils.getApplicationUrl();
		String tokenValue=authToken.get("token").toString();
		tokenValue="token="+tokenValue;
		System.out.println("token value after concat : "+tokenValue);
		
		Map<String,Object> m = new HashMap<String,Object>();
		m.put("Content-Type", "application/json");
		m.put("Cookie",tokenValue);
		
		Map<String,String>bookingData=data.asMaps().get(0);
		String bookingID=bookingData.get("bookingId");
		
		 response=RestAssured.
         given().contentType(ContentType.JSON).headers(m).body(reqJson.toJSONString()).log().all().
         		patch(partialUpdate_uri+bookingID);
		
		 System.out.println("Response of partial update hotel booking with bookingId as : "+bookingID+"is "+response.prettyPrint());
		 return response;

	}
	
	public void validateErrorCode(DataTable data) throws IOException, ParseException
	{
		Map<String,String>errorData=data.asMaps().get(0);
		String errorCode=errorData.get("errorCode");
		int Experrorcode=Integer.parseInt(errorCode);
		Assert.assertEquals("Http status code matches : ",Experrorcode,response.getStatusCode());
		System.out.println("Http response code is" +response.getStatusCode());

	}
	
	public void deleteBookingWithoutBookingId()
	{
		
		RestAssured.baseURI = utils.getApplicationUrl();
		String tokenValue=authToken.get("token").toString();
		tokenValue="token="+tokenValue;
		System.out.println("token value after concat : "+tokenValue);
		
		Map<String,Object> m = new HashMap<String,Object>();
		m.put("Content-Type", "application/json");
		m.put("Cookie",tokenValue);
		response = RestAssured.
		         given().headers(m).log().all().delete(delete_uri);
		System.out.println("Response for delete without bookingId :"+response.prettyPrint()); 

	}
	
	public void getAllBookingIdsWithInvalidParams()
	{
		RestAssured.baseURI = utils.getApplicationUrl();
		RequestSpecification request = RestAssured.given();
		
		
		response = request.header("Content-Type", "application/json").log().all().get(getAllBookingInvalid_url);
		
		System.out.println("Response of GetAllBookingIds: " +response.prettyPrint());
	}
	
	
	public void getBookingByName(String fname,String lname)
	{
		RestAssured.baseURI = utils.getApplicationUrl();
		RequestSpecification request = RestAssured.given();
		
		response = request.header("Content-Type", "application/json").queryParam("firstname",fname).queryParam("lastname",lname).log().all().get("/booking");
		System.out.println("Response By Booking Name: " +response.prettyPrint());
		

	}
	
	
	public void getBookingByDate(String checkin,String checkout)
	{
		RestAssured.baseURI = utils.getApplicationUrl();
		RequestSpecification request = RestAssured.given();
		
		HashMap<String,Object>params =new HashMap<String,Object>();
		response = request.header("Content-Type", "application/json").queryParam("checkin",checkin).queryParam("checkout",checkout).log().all().get("/booking");
		System.out.println("Response By Booking Date: " +response.prettyPrint());
		
	}
	
	public void validateGetBookingByIdResponse(DataTable data)
	{
		Map<String,String>GetBookingData=data.asMaps().get(0);
		String firstname=GetBookingData.get("firstname");
		String lastname=GetBookingData.get("lastname");

		
		Assert.assertEquals("Firstname is",firstname,response.jsonPath().get("firstname"));
		Assert.assertEquals("Lastname is",lastname,response.jsonPath().get("lastname"));
		
	}
}
