import { createContext } from "react";
import { getDatabase } from "firebase/database";
import { app } from "../init_firebase";

const DbContext = createContext();
const DbProvider = ({ children }) => {
  const db = getDatabase(app);

  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
};

export default DbProvider;
export { DbContext };
