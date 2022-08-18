class Doctor {
  constructor({
    full_name,
    telephone,
    email,
    location,
    religion,
    doctor_id,
    profile_photo = "no photo",
  }) {
    this.full_name = full_name;
    this.telephone = telephone;
    this.email = email;
    this.location = location;
    this.religion = religion;
    this.doctor_id = doctor_id;
    this.profile_photo = profile_photo;
  }
}

export default Doctor;
