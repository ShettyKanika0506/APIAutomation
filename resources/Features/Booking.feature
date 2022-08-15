@Booking
Feature: End to end tests for Booking API

Background: User generates token for Authorisation
Given user generates token using createAuth api

@CreateBooking 
Scenario: As a user I should be able to create booking
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking

@GetBooking
Scenario Outline: As a user I can getBooking details for the created user
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking
Then user gets booking details using GetBooking api
Then user receives response code 200
Then user validates getBookingById response
|firstname|lastname|additionalneeds|
|<firstname>|<lastname>|<additionalneeds>|
Then user deletes booking using deleteBooking api
Examples:
|firstname|lastname|additionalneeds|
|Test     |User    |Breakfast|

@GetAllBooking
Scenario: As a user I can getAllBookingDetails using GetBookingIds api
Given user gets all booking details
Then user receives response code 200
Then user validates getBooking response


#name
@GetAllBooking
Scenario: As a user I can filter getBooking details using name
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking
Then user gets booking details using getBookingByName with firstname "Test" and lastname "User"
Then user receives response code 200
#date
@GetAllBooking
Scenario: As a user I can filter getBooking details using date
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking
Then user gets booking details using getBookingByDate with checkin "2022-08-16" and checkoutdate "2022-08-22"
Then user receives response code 200
Then user validates getBooking response

@UpdateBooking
Scenario: As a user I can update booking details for the user
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking
Then user updates booking using update Booking api
Then user validates additionalneeds updated to "Dinner"


@PartialUpdateBooking
Scenario: As a user I can partially update booking details for the user
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking
Then user partially updates using partialUpdateBooking api
Then user validates lastname updated to "PartialUpdateUser"

@DeleteBooking
Scenario: As a user I can delete booking details for a user
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking
Then user deletes booking using deleteBooking api
Then user receives response code 201


#negative scenarios
#create booking
@CreateBookingNegativeCheck 
Scenario: As a user I create booking details with invalid request
Given user creates booking using CreateBooking api with invalid request
Then user receives response code 500

@CreateBookingNegativeCheck
Scenario: As a user I create booking details with invalid endpoint url
Given user creates booking using CreateBooking api with invalid url
Then user receives response code 404

#partialUpdateBooking
@PartialUpdateBookingNegativeCheck 
Scenario: As a user I partially update booking details without auth token
Given user creates booking using CreateBooking api
Then user retrieves the bookingId for the new booking
Then user partially updates booking using PartialUpdateBooking api without auth token
Then user receives response code 403
Then user deletes booking using deleteBooking api

@PartialUpdateBookingNegativeCheck
Scenario Outline: As a user I partially update booking details with invalid/empty bookingId
Given user partially updates booking using PartialUpdateBooking api with invalid params
|bookingId|
|<bookingId>|
Then user validates error response
|errorCode|
|<errorCode>|

Examples:
|bookingId|errorCode|
|ABCD123  |405|


#deleteBooking
@DeleteBookingNegativeCheck
Scenario: As a user I can delete booking details for a user with invalid parameters
#prerequisite
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking
Then user deletes booking using deleteBooking api
Then user receives response code 201
Then user deletes booking using deleteBooking api
Then user receives response code 405

@DeleteBookingNegativeCheck
Scenario: As a user I can delete booking details for a user without bookingId
Given user deletes booking using deleteBooking api without bookingId
Then user receives response code 404

@GetBookingIdsNegativeCheck #getBookingIds
Scenario: As a user I can getAllBookingDetails with incorrect endpoint
Given user gets all booking details with incorrect endpoint
Then user receives response code 404

@GetBookingByIdNegativeCheck
Scenario: As a user I get booking details for non existing bookingId
#prerequisite
Given user creates booking using CreateBooking api
Then user receives response code 200
Then user retrieves the bookingId for the new booking
Then user deletes booking using deleteBooking api
Then user receives response code 201
#getByIdTest
Then user gets booking details using GetBooking api
Then user receives response code 404
