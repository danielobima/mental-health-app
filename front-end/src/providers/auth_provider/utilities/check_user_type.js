import axios from "axios";
import { baseURL } from "../../..";
import Doctor from "../../../models/doctor_model";
import Patient from "../../../models/patient_model";

const checkUser = (user_id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/users/type`, {
        params: {
          user_id: user_id,
        },
      })
      .then((response) => {
        let result = {};
        result.user_type = response.data.user_type;
        if (response.data.user_type === 0) {
          if (response.data.user_details) {
            result.user_details = new Patient(response.data.user_details);
          }
        } else if (response.data.user_type === 1) {
          if (response.data.user_details)
            result.user_details = new Doctor(response.data.user_details);
        }
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default checkUser;
