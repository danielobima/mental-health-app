class Session:
    def __init__(self, session_id, date, meeting_type, duration, location, doctor_id, patient_id, payment_method):
        self.session_id = session_id
        self.date = date
        self.meeting_type = meeting_type
        self.duration = duration
        self.location = location
        self.doctor_id = doctor_id
        self.patient_id = patient_id
        self.payment_method = payment_method

