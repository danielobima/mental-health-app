import josh_photo from "../images/jpg/josh.jpg";
import michelle_photo from "../images/jpg/michelle.jpg";
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

const josh = new Patient({
  full_name: "Josh Kamau",
  age: 18,
  telephone: "0700000000",
  email: "test1@mail.com",
  location: "Roseview court, Kilimani",
  patient_id: "12nsaor130",
  profile_photo: josh_photo,
  religion: "Christian",
});
const michelle = new Patient({
  full_name: "Michelle Rose",
  age: 20,
  telephone: "0700000000",
  email: "michelle@mail.com",
  location: "Roseview court, Kilimani",
  patient_id: "1asdkas30",
  profile_photo: michelle_photo,
  religion: "Christian",
});

export { josh, michelle };
export default Patient;
