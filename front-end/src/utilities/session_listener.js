import { ref, onValue } from "firebase/database";
import Session from "../models/sessions_model";

/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback setState
 * @param {Array.<String>} sessions
 */

/**Used to get the details of a session from the database
 * @param {Database} db
 * @param {Array.<String>} session_ids
 * @param {setState} setSessions
 */
const sessionListener = (db, session_ids, setSessions) => {
  for (let x of session_ids) {
    onValue(ref(db, `/sessions/${x}`), (snap) => {
      let session = new Session({ ...snap.val() });
      setSessions((prevState) => {
        let obj = prevState;
        obj[x] = session;
        return obj;
      });
    });
  }
};

export default sessionListener;
