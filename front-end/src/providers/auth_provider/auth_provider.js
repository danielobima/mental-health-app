import { createContext, useEffect, useState } from "react";
import { app } from "../init_firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import checkUser from "./utilities/check_user_type";

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
  const signIn = async (email, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => resolve())
        .catch((error) => reject(error.message));
    });
  };
  /**A function for creating a new user */
  const createNewUser = async (email, password, user_type) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUserId(user.uid);
      setUserType(user_type);
      setUser(user);
    } catch (error) {
      return error.message;
    }
  };

  /**Checking if the user that has signed in is a doctor or a patient, and if the user has filled in their details. */
  const validateUser = async (user) => {
    try {
      const userDetailsAndType = await checkUser();
      setUserId(user.uid);
      setUserDetails(userDetailsAndType.user_details);
      setUserType(userDetailsAndType.user_type);
      setUser(user);
      return user.uid;
    } catch (error) {
      return error.message;
    }
  };

  /** A function for logging out */
  const logOut = async () => {
    try {
      await signOut(auth);
      setUserId("");
    } catch (error) {
      return error;
    }
  };

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
