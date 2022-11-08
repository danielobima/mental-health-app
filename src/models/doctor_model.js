import dr_rachel_photo from "../images/jpg/rachel.jpg";
class Doctor {
  constructor({
    full_name = "",
    telephone = "",
    email = "",
    religion = "",
    doctor_id = "",
    hourly = 2000,
    profile_photo = "",
    rating = 5,
    desc = "",
  }) {
    this.full_name = full_name;
    this.telephone = telephone;
    this.email = email;
    this.religion = religion;
    this.doctor_id = doctor_id;
    this.profile_photo = profile_photo;
    this.hourly = hourly;
    this.rating = rating;
    this.desc = desc;
  }
}

const dr_rachel = new Doctor({
  full_name: "Dr Rachel",
  telephone: "0100000000",
  email: "rachel@mail.com",
  religion: "Christian",
  doctor_id: "2w79384yh",
  hourly: 2000,
  profile_photo: dr_rachel_photo,
});
const dr_sarah = new Doctor({
  full_name: "Dr Sarah",
  telephone: "0100000000",
  email: "sarah@mail.com",
  religion: "Christian",
  doctor_id: "2w79384yh",
  hourly: 2000,
  profile_photo: dr_rachel_photo,
});

export { dr_rachel, dr_sarah };
export default Doctor;
