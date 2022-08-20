import { createContext, useEffect } from "react";
import { getStorage } from "firebase/storage";

const StorageContext = createContext();
const StorageProvider = ({ children }) => {
  const storage = getStorage();

  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <StorageContext.Provider value={{ storage }}>
      {children}
    </StorageContext.Provider>
  );
};
export default StorageProvider;
export { StorageContext };
