class Patient:
    def __init__(self,FullName, Age, Telephone, Email, Password, Location, ReligionSpecification, Patient_Id):
        self.FullName = FullName
        self.Age = Age
        self.Telephone = Telephone
        self.Email = Email
        self.Password = Password
        self.Location = Location
        self.ReligionSpecification = ReligionSpecification
        self.Patient_Id = Patient_Id
        self.Profile_photo = str('')
        pass
