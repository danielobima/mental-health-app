import axios from "axios";
import { baseURL } from "../../..";

export const submitPatientDetails = (user_id) => {};

/**A function to update a doctor's details on the database
 * @param {Doctor} doc
 */
export const submitDocDetails = async (doc) => {
  let response = await axios.post(`${baseURL}/doctor/add_details`, { ...doc });
};
