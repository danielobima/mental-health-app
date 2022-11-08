import { createContext, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const StorageContext = createContext();
const StorageProvider = ({ children }) => {
  const storage = getStorage();

  const uploadProfilePhoto = (photo, user_id) =>
    new Promise((resolve, reject) => {
      uploadBytes(ref(storage, `profile_photos/${user_id}`), photo)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              console.log(url);
              resolve(url);
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });

  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <StorageContext.Provider value={{ storage, uploadProfilePhoto }}>
      {children}
    </StorageContext.Provider>
  );
};
export default StorageProvider;
export { StorageContext };
