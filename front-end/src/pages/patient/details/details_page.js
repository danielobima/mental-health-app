import { Person } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import Illus3 from "../../../images/svg/illus3/illus3";
import Patient from "../../../models/patient_model";
import { AuthContext } from "../../../providers/auth_provider/auth_provider";
import { submitPatientDetails } from "../../../providers/auth_provider/utilities/submit_user_details";
import { StorageContext } from "../../../providers/storage_provider/storage_provider";
import { skobeloff } from "../../../utilities/themes";

const DetailsPage = () => {
  const [profile_photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  const [full_name, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const context = useContext(AuthContext);
  const email = context.user ? context.user.email : "test1@mail.com";
  const patient_id = context.user_id ? context.user_id : "";
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [religion, setReligion] = useState("");
  const navigator = useNavigate();
  const storageContext = useContext(StorageContext);

  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack width={"60%"} pl={3} pt={"5vh"} spacing={3}>
        <Typography variant="h4" color={skobeloff} fontWeight={600}>
          Complete your account
        </Typography>
        <Stack width={"60%"} alignItems="center" spacing={2}>
          <Avatar
            sx={{
              width: "10vw",
              height: "10vw",
            }}
          >
            <Person />
          </Avatar>
          <Button
            variant="contained"
            component="label"
            sx={{ color: "white" }}
            disabled={loading}
          >
            {loading && (
              <>
                <CircularProgress size={"16px"} /> &nbsp;
              </>
            )}
            Upload new profile photo
            <input
              type="file"
              onChange={(event) => {
                setLoading(true);
                storageContext
                  .uploadProfilePhoto(event.target.files[0], patient_id)
                  .then((url) => {
                    setLoading(false);
                    setPhoto(url);
                  });
              }}
              hidden
            />
          </Button>
        </Stack>

        <ValidatorForm
          className="form"
          onSubmit={() => {
            let patient = new Patient({
              full_name,
              age,
              telephone,
              email,
              religion,
              patient_id,
              profile_photo,
            });
            setSubmitting(true);
            submitPatientDetails(patient)
              .then(() => {
                setSubmitting(false);
                navigator("/");
              })
              .catch((error) => {
                alert(error);
              });
          }}
        >
          <Stack width={"60%"} alignItems="stretch" spacing={2} pb="5vh">
            <TextValidator
              style={{ width: "100%" }}
              label="Full name"
              type="text"
              name="full_name"
              value={full_name}
              onChange={(event) => setFullName(event.target.value)}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextValidator
              style={{ width: "100%" }}
              label="Age"
              type="number"
              name="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextValidator
              style={{ width: "100%" }}
              label="Telephone"
              type="tel"
              name="telephone"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />

            <FormControl fullWidth>
              <InputLabel id="religion-label">Religion</InputLabel>
              <Select
                labelId="religion-label"
                label="Religion"
                value={religion}
                onChange={(event) => setReligion(event.target.value)}
              >
                <MenuItem value={"Christian"}>Christian</MenuItem>
                <MenuItem value={"Muslim"}>Muslim</MenuItem>
                <MenuItem value={"Hindu"}>Hindu</MenuItem>
                <MenuItem value={"Atheist"}>Atheist</MenuItem>
                <MenuItem value={"Pagan"}>Pagan</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              sx={{ color: "white" }}
              disabled={submitting}
            >
              {submitting && (
                <>
                  <CircularProgress size={"16px"} /> &nbsp;
                </>
              )}
              Submit
            </Button>
          </Stack>
        </ValidatorForm>
      </Stack>
      <Stack width={"40%"} direction="column-reverse">
        <Illus3 />
      </Stack>
    </Stack>
  );
};

export default DetailsPage;
