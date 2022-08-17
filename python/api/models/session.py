class Counselling:
    Sessions = 0
    def __init__(self,Date, Meeting_Type, Duration, Location, Therapist_Name, Patient_Name, Payment_Method):
        self.Date = Date
        self.Meeting_Type = Meeting_Type
        self.Duration = Duration
        self.Location = Location
        self.Therapist_Name = Therapist_Name
        self.Patient_Name = Patient_Name
        self.Payment_Method = Payment_Method
    Counselling.Sessions +=1
    def MeetingDuration(self):
        return ({self.Duration} 'hours')

