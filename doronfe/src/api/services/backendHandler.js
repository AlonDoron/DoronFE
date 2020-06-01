import axios from "axios";
import { SERVER_URL, HEADERS } from "../../config/server-config";

export const backendHandler = {
  post
};

function post(contactDetails, route) {
  return axios
    .post(`${SERVER_URL}/${route}`, JSON.stringify({ ...contactDetails }), {
      headers: HEADERS
    })
    .then(handleResponse)
    .then(response => {
      return response;
    });
}

function handleResponse(response) {
  const isSucceeded = response.data.isSucceed;
  if (isSucceeded) {
    return Promise.resolve(response);
  } else return Promise.reject(response); // TODO WHEN REMOVE CHECK-IN - TO RETURN RESPONSE AND NOT 'error'!
}
