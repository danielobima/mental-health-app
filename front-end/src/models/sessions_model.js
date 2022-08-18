class Session {
  constructor({
    date,
    meeting_type,
    duration,
    location,
    doctor_id,
    patient_id,
    payment_method = Math.random() > 0.5 ? "Credit card" : "Mpesa",
  }) {
    this.date = date;
    this.meeting_type = meeting_type;
    this.duration = duration;
    this.location = location;
    this.doctor_id = doctor_id;
    this.patient_id = patient_id;
    this.payment_method = payment_method;
  }
}

export default Session;
