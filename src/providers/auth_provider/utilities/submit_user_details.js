import axios from "axios";
import { baseURL } from "../../..";

/**A function to update a doctor's details on the database
 * @param {Patient} patient
 */
const submitPatientDetails = (patient) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/patient/add_details`, {
        patient: {
          ...patient,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

/**A function to update a doctor's details on the database
 * @param {Doctor} doc
 */
const submitDocDetails = (doc) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/doctor/add_details`, {
        doctor: {
          ...doc,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export { submitDocDetails, submitPatientDetails };
