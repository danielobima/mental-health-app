import axios from "axios";
import { baseURL } from "..";

const getSessionIds = (user_id, user_type) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/session/get_sessions`, {
        params: {
          user_type,
          user_id,
        },
      })
      .then((response) => {
        console.log(response.data);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default getSessionIds;
