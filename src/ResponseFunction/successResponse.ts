import { ApiResponse } from "./interface";
function get_success_response(message: any, status: any, details: any) {
  if (status == null) {
    status = "Request processed Successfully";
  }

  let response: ApiResponse = {
    success: true,
    status: status,
    message: message,
  };

  if (details != null) {
    response.details = details;
  }
  return response;
}

module.exports = { get_success_response };
