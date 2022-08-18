class Patient {
  constructor({
    full_name,
    age,
    telephone,
    email,
    location,
    religion,
    patient_id,
    profile_photo = "no photo",
  }) {
    this.full_name = full_name;
    this.age = age;
    this.telephone = telephone;
    this.email = email;
    this.location = location;
    this.religion = religion;
    this.patient_id = patient_id;
    this.profile_photo = profile_photo;
  }
}

export default Patient;
