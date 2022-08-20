import axios from "axios";
import { baseURL } from "../../../..";
import Doctor from "../../../../models/doctor_model";

const getAvailableTherapists = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/patient/get_doctors`)
      .then((response) => {
        let therapists = [];
        for (let therapist of Object.values(response.data)) {
          therapists.push(new Doctor({ ...therapist }));
        }
        console.log(therapists);
        resolve(therapists);
      })
      .catch((error) => {
        reject(error);
        alert(error);
      });
  });
export default getAvailableTherapists;
