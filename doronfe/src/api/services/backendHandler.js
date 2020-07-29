import axios from "axios";
import { SERVER_URL, HEADERS } from "../../config/server-config";

export const backendHandler = {
  post,
};

function post(contactDetails, route) {
  console.log(`URL: ${SERVER_URL}/${route}`);
  console.log(JSON.stringify({ ...contactDetails }));

  return axios
    .post(`${SERVER_URL}/${route}`, JSON.stringify({ ...contactDetails }), {
      headers: HEADERS,
    })
    .then(handleResponse)
    .then((response) => {
      return response;
    });
}

function handleResponse(response) {
  if (response.status === 200) {
    return Promise.resolve(response);
  } else return Promise.reject(response);
}
