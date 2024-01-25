import { ApiResponse } from "./interface";

function get_validation_failure_response(
  errors : any,
  error_message : string = "Invalid Params",
  details : any
) {
  let response : ApiResponse = {
    success : false,
    status : "Bad Request",
    error_message : error_message,
  };

  if (details != null) {
    response.details = details;
  }
  if (errors != null) {
    response.errors = errors;
  }
  return response;
}
module.exports = { get_validation_failure_response };
