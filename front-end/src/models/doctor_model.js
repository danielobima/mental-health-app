import dr_rachel_photo from "../images/jpg/rachel.jpg";
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

const dr_rachel = new Doctor({
  full_name: "Dr Rachel",
  telephone: "0100000000",
  email: "rachel@mail.com",
  location: "Amboseli Drive, Roselyn Gardens",
  religion: "Christian",
  doctor_id: "2w79384yh",
  profile_photo: dr_rachel_photo,
});
const dr_sarah = new Doctor({
  full_name: "Dr Sarah",
  telephone: "0100000000",
  email: "sarah@mail.com",
  location: "Donald Court, Lavington Springs Estate",
  religion: "Christian",
  doctor_id: "2w79384yh",
  profile_photo: dr_rachel_photo,
});

export { dr_rachel, dr_sarah };
export default Doctor;
