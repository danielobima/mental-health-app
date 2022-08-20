import axios from "axios";
import { baseURL } from "../../..";
import User from "../../../models/user_model";

const setUserOnDb = (user_id, user_type) =>
  new Promise((resolve, reject) => {
    let user = new User({
      user_id,
      user_type,
    });
    axios
      .post(`${baseURL}/users/new`, {
        user: {
          ...user,
        },
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

export default setUserOnDb;
