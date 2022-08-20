import { Person, Place } from "@mui/icons-material";
import {
  Avatar,
  Button,
  FormControl,
  InputAdornment,
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
import Doctor from "../../../models/doctor_model";
import { AuthContext } from "../../../providers/auth_provider/auth_provider";
import { submitDocDetails } from "../../../providers/auth_provider/utilities/submit_user_details";
import { rich_grey, skobeloff } from "../../../utilities/themes";

const DocDetailsPage = () => {
  const [profile_photo /*,setPhoto*/] = useState("no photo");
  const [full_name, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const context = useContext(AuthContext);
  const email = context.user ? context.user.email : "test1@mail.com";
  const doctor_id = context.user_id ? context.user_id : "";
  const [location, setLocation] = useState("");
  const [religion, setReligion] = useState("");
  const navigator = useNavigate();

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
          <Typography component="span" color={rich_grey} fontWeight={600}>
            Click the image to change it
          </Typography>
        </Stack>

        <ValidatorForm
          className="form"
          onSubmit={() => {
            let doc = new Doctor({
              full_name,
              telephone,
              email,
              location,
              religion,
              doctor_id,
              profile_photo,
            });
            submitDocDetails(doc)
              .then(() => navigator("/"))
              .catch((error) => alert(error));
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
              label="Telephone"
              type="tel"
              name="telephone"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
              hintText="Hi"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextValidator
              style={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Place />
                  </InputAdornment>
                ),
              }}
              label="Address"
              type="text"
              name="address"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
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

            <Button type="submit" variant="contained" sx={{ color: "white" }}>
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

export default DocDetailsPage;
