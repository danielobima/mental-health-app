import Session from "../models/sessions_model";
import { ref, set } from "firebase/database";
import { v4 } from "uuid";
import axios from "axios";
import { baseURL } from "..";
import Doctor, { dr_sarah } from "../models/doctor_model";

const pushRandSession = (db) => {
  let session_id = v4();
  let session = new Session({
    date: Date.now(),
    doctor_id: "",
    duration: "2hrs",
    location: "Roseview court, Kilimani",
    meeting_type: "physical",
    patient_id: "12nsaor130",
    session_id: session_id,
  });
  set(ref(db, `/sessions/${session_id}`), { ...session }).catch((error) =>
    alert(error)
  );
};

const saveDoc = (photoUrl, id) => {
  let newDoc = new Doctor({
    ...dr_sarah,
    doctor_id: id,
    profile_photo: photoUrl,
  });
  axios
    .post(`${baseURL}/doctor/add_details`, {
      doctor: {
        ...newDoc,
      },
    })
    .then((response) => alert(response.data))
    .catch((error) => alert(error));
};

const testApi = () => {
  let session_id = v4();
  let session = new Session({
    date: Date.now(),
    doctor_id: "",
    duration: "2hrs",
    location: "Roseview court, Kilimani",
    meeting_type: "physical",
    patient_id: "12nsaor130",
    session_id: session_id,
  });

  axios
    .post(`${baseURL}/session/new`, {
      session: {
        ...session,
      },
    })
    .then((response) => console.log(response.data));
};

export { pushRandSession, testApi, saveDoc };
