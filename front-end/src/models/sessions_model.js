class Session {
  constructor({
    date,
    meeting_type,
    duration,
    location,
    doctor_id,
    patient_id,
    session_id,
    payment_method = Math.random() > 0.5 ? "Credit card" : "Mpesa",
    desc,
    category,
  }) {
    this.date = date;
    this.meeting_type = meeting_type;
    this.duration = duration;
    this.location = location;
    this.doctor_id = doctor_id;
    this.patient_id = patient_id;
    this.session_id = session_id;
    this.payment_method = payment_method;
    this.desc = desc;
    this.category = category;
  }
}

const allocated_session = {
  doctor_id: "2w79384yh",
  date: new Date("2022-8-25"),
  patient_id: "1asdkas30",
  session_id: "238749248",
};
const allocated_session2 = {
  doctor_id: "2w79384yh",
  date: new Date(Date.now()),
  patient_id: "12nsaor130",
  session_id: "238749248",
};

const new_session = {
  date: new Date(Date.now()),
  patient_id: "1asdkas30",
  session_id: "sadsdasdt32",
};

export { allocated_session, new_session, allocated_session2 };

export default Session;
