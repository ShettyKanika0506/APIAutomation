$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:resources/Features/Booking.feature");
formatter.feature({
  "name": "End to end tests for Booking API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Booking"
    }
  ]
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I should be able to create booking",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@CreateBooking"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a user I can getBooking details for the created user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBooking"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.step({
  "name": "user gets booking details using GetBooking api",
  "keyword": "Then "
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates getBookingById response",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "additionalneeds"
      ]
    },
    {
      "cells": [
        "\u003cfirstname\u003e",
        "\u003clastname\u003e",
        "\u003cadditionalneeds\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "user deletes booking using deleteBooking api",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "additionalneeds"
      ]
    },
    {
      "cells": [
        "Test",
        "User",
        "Breakfast"
      ]
    }
  ]
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can getBooking details for the created user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@GetBooking"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets booking details using GetBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.callGetBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates getBookingById response",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.validateGetBookingById(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deletes booking using deleteBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.deleteBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can getAllBookingDetails using GetBookingIds api",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@GetAllBooking"
    }
  ]
});
formatter.step({
  "name": "user gets all booking details",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.getAllBookingIds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates getBooking response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.validateGetBookingResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can filter getBooking details using name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@GetAllBooking"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets booking details using getBookingByName with firstname \"Test\" and lastname \"User\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.getBookingByName(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can filter getBooking details using date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@GetAllBooking"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets booking details using getBookingByDate with checkin \"2022-08-16\" and checkoutdate \"2022-08-22\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.getBookingByDate(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates getBooking response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.validateGetBookingResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can update booking details for the user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@UpdateBooking"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user updates booking using update Booking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.updateBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates additionalneeds updated to \"Dinner\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_validates_additionalneeds_updated_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can partially update booking details for the user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@PartialUpdateBooking"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user partially updates using partialUpdateBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.partialUpdate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates lastname updated to \"PartialUpdateUser\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_validates_lastname_updated_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can delete booking details for a user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@DeleteBooking"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deletes booking using deleteBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.deleteBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I create booking details with invalid request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@CreateBookingNegativeCheck"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api with invalid request",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBookingInvalidReq()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 500",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I create booking details with invalid endpoint url",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@CreateBookingNegativeCheck"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api with invalid url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBookingInvalidEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I partially update booking details without auth token",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@PartialUpdateBookingNegativeCheck"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user partially updates booking using PartialUpdateBooking api without auth token",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.partialUpdateWithoutToken()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 403",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deletes booking using deleteBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.deleteBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a user I partially update booking details with invalid/empty bookingId",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PartialUpdateBookingNegativeCheck"
    }
  ]
});
formatter.step({
  "name": "user partially updates booking using PartialUpdateBooking api with invalid params",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "bookingId"
      ]
    },
    {
      "cells": [
        "\u003cbookingId\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "user validates error response",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "errorCode"
      ]
    },
    {
      "cells": [
        "\u003cerrorCode\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "bookingId",
        "errorCode"
      ]
    },
    {
      "cells": [
        "ABCD123",
        "405"
      ]
    }
  ]
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I partially update booking details with invalid/empty bookingId",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@PartialUpdateBookingNegativeCheck"
    }
  ]
});
formatter.step({
  "name": "user partially updates booking using PartialUpdateBooking api with invalid params",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.partialUpdateInvalidCheck(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates error response",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.validateErrorCode(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can delete booking details for a user with invalid parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@DeleteBookingNegativeCheck"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deletes booking using deleteBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.deleteBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deletes booking using deleteBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.deleteBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 405",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can delete booking details for a user without bookingId",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@DeleteBookingNegativeCheck"
    }
  ]
});
formatter.step({
  "name": "user deletes booking using deleteBooking api without bookingId",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.deleteBookingWithoutId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I can getAllBookingDetails with incorrect endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@GetBookingIdsNegativeCheck"
    },
    {
      "name": "#getBookingIds"
    }
  ]
});
formatter.step({
  "name": "user gets all booking details with incorrect endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.getAllBookingNegCheck()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user generates token using createAuth api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.generateAuthToken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I get booking details for non existing bookingId",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Booking"
    },
    {
      "name": "@GetBookingByIdNegativeCheck"
    }
  ]
});
formatter.step({
  "name": "user creates booking using CreateBooking api",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.createBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves the bookingId for the new booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.retrieveBookingId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deletes booking using deleteBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.deleteBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets booking details using GetBooking api",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.callGetBooking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives response code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.BookingStepFile.user_receives_response_code(int)"
});
formatter.result({
  "status": "passed"
});
});