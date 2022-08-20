import { createContext, useEffect, useState } from "react";
import { app } from "../init_firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import checkUser from "./utilities/check_user_type";
import setUserOnDb from "./utilities/set_user_db";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  //init authentication sdk
  const auth = getAuth(app);

  /** A user identification string */
  const [user_id, setUserId] = useState("");
  const [user, setUser] = useState();
  const [user_details, setUserDetails] = useState(false);
  const [user_type, setUserType] = useState(false);

  /** A function for signing in */
  const signIn = (email, password) =>
    new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          validateUser(user.user)
            .then(() => {
              resolve(user.user);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => reject(error.message));
    });

  /**A function for creating a new user */
  const createNewUser = (email, password, user_type) =>
    new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          setUserOnDb(userCred.user.uid, user_type)
            .then(() => {
              setUserId(userCred.user.uid);
              setUserType(user_type);
              setUser(userCred.user);
              resolve(userCred.user);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error.message);
        });
    });

  /**Checking if the user that has signed in is a doctor or a patient,
   * and if the user has filled in their details. */
  const validateUser = (user) =>
    new Promise((resolve, reject) => {
      checkUser(user.uid)
        .then((userDetailsAndType) => {
          setUserId(user.uid);
          setUserDetails(userDetailsAndType.user_details);
          setUserType(userDetailsAndType.user_type);
          setUser(user);
          resolve(userDetailsAndType);
        })
        .catch((error) => {
          reject(error);
        });
    });

  /** A function for logging out */
  const logOut = () =>
    new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          resolve();
          setUserId("");
        })
        .catch((error) => {
          reject(error);
        });
    });

  useEffect(() => {
    //check cookies for token.
    // eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user_id,
        signIn,
        logOut,
        user_details,
        user_type,
        createNewUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
