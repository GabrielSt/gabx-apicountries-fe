import axios from "axios";
import toastr from "toastr";

export const getCountries = () => {
  return axios
    .get(`https://restcountries.eu/rest/v2/all`)
    .then(resp => {
      console.log("service", resp);
      return resp.data;
    })
    .catch(err => {
      if (err.response != null) {
        toastr.error(err.response.data.message);
      } else {
        toastr.error(err);
      }
    });
};