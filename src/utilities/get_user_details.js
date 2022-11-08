import axios from "axios";
import { baseURL } from "..";

const getUserDetails = (user_id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/users/get_user`, {
        params: {
          user_id,
        },
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

export default getUserDetails;
