import axios from "axios";
import Session from "../../../../models/sessions_model";
import { v4 } from "uuid";
import { baseURL } from "../../../..";
const postSession = (date, meeting_type, patient_id) =>
  new Promise((resolve, reject) => {
    let session_id = v4();
    let session = new Session({
      date: date,
      doctor_id: "",
      duration: "",
      location: "",
      meeting_type: meeting_type,
      patient_id: patient_id,
      session_id: session_id,
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
