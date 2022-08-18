import { createContext, useEffect, useState } from "react";
import { app } from "./init_firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [userId, setUserId] = useState("");
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUserId(user.uid);
      return user.uid;
    } catch (error) {
      return error.message;
    }
  };

  const logOut = () => {
    return new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          setUserId("");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    //check cookies for token.
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
