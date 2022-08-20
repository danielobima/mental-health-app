import axios from "axios";
import { baseURL } from "..";
import Session from "../models/sessions_model";

const getSessions = (user_id, user_type) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/session/get_sessions`, {
        params: {
          user_type,
          user_id,
        },
      })
      .then((response) => {
        let sessions = Object.values(response.data).map(
          (raw) => new Session({ ...raw })
        );

        resolve(sessions);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default getSessions;
