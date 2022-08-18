import { Place } from "@mui/icons-material";
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
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Illus3 from "../../../images/svg/illus3/illus3";
import { skobeloff } from "../../../utilities/themes";

const DocDetailsPage = () => {
  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack width={"60%"} pl={3} pt={"10vh"} spacing={3}>
        <Typography variant="h4" color={skobeloff} fontWeight={600}>
          Complete your account
        </Typography>

        <Avatar
          sx={{
            width: "10vw",
            height: "10vw",
          }}
        >
          D
        </Avatar>
        <Typography component={"span"}>Daniel</Typography>
        <ValidatorForm className="form">
          <Stack width={"60%"} alignItems="stretch" spacing={2}>
            <TextValidator
              style={{ width: "100%" }}
              label="Age"
              type="number"
              name="age"
            />
            <TextValidator
              style={{ width: "100%" }}
              label="Telephone"
              type="tel"
              name="telephone"
            />
            <TextValidator
              style={{ width: "100%" }}
              label="Location"
              type="text"
              name="location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Place />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="religion-label">Religion</InputLabel>
              <Select labelId="religion-label" label="Religion">
                <MenuItem>Christian</MenuItem>
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
