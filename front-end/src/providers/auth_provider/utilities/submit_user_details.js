import axios from "axios";
import { baseURL } from "../../..";

/**A function to update a doctor's details on the database
 * @param {Patient} patient
 */
const submitPatientDetails = async (patient) => {
  try {
    let response = await axios.post(`${baseURL}/patient/add_details`, {
      ...patient,
    });
    return response;
  } catch (error) {
    return error;
  }
};

/**A function to update a doctor's details on the database
 * @param {Doctor} doc
 */
const submitDocDetails = async (doc) => {
  try {
    let response = await axios.post(`${baseURL}/doctor/add_details`, {
      ...doc,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { submitDocDetails, submitPatientDetails };
