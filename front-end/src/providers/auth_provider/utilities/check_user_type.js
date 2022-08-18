import axios from "axios";
import { baseURL } from "../../..";
import Doctor from "../../../models/doctor_model";
import Patient from "../../../models/patient_model";

const checkUser = async (user_id) => {
  try {
    const response = await axios.get(`${baseURL}/users/type`, {
      params: {
        user_id: user_id,
      },
    });

    let result = {};
    result.user_type = response.data.user_type;
    if (response.data.user_type === 0) {
      result.user_details = new Patient(response.data.user_details);
    } else if (response.data.user_type === 1) {
      result.user_details = new Doctor(response.data.user_details);
    }
    return result;
  } catch (error) {
    return error;
  }
};

export default checkUser;
