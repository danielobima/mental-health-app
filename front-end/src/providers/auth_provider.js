import { createContext, useEffect, useState } from "react";
import { app } from "./init_firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [userId, setUserId] = useState("");

  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUserId(user.uid);

          //Get user type after this
          resolve(user.uid);
        })
        .catch((error) => {
          const errorMessage = error.message;
          reject(errorMessage);
        });
    });
  };

  const logOut = () => {
    return new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId("");
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={{ userId, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
