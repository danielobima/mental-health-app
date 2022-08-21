import axios from "axios";
import Session from "../../../../models/sessions_model";
import { v4 } from "uuid";
import { baseURL } from "../../../..";
const postSession = (
  date,
  meeting_type,
  patient_id,
  doctor_id,
  desc,
  category,
  location
) =>
  new Promise((resolve, reject) => {
    let session_id = v4();
    let session = new Session({
      date,
      doctor_id,
      duration: "",
      location: location,
      meeting_type,
      patient_id,
      session_id,
      desc,
      category,
    });
    axios
      .post(`${baseURL}/session/new`, {
        session: {
          ...session,
        },
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

export default postSession;
