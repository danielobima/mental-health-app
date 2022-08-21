import { ArrowBack, CalendarTodayOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import Illus2 from "../../../images/svg/illus2/illus2";
import dotAnim from "../../../utilities/dotAnim";
import { rich_black, rich_grey, skobeloff } from "../../../utilities/themes";
import Review from "../../../utilities/shared_components/review";
import { useNavigate } from "react-router-dom";
import postSession from "./utilities/post_session";
import { AuthContext } from "../../../providers/auth_provider/auth_provider";
import ErrorSnackBar from "../../../utilities/errorSnackBar";
import AvailableTherapist from "./utilities/available_therapist";
import Doctor from "../../../models/doctor_model";
import getAvailableTherapists from "./utilities/get_available_therapists";

const BookPage = () => {
  const [details, setDetails] = useState("");
  //stages are request, searching, available_docs, offer.
  const [stage, setStage] = useState(0);
  const [dots, setDots] = useState(".");
  const [date, setDate] = useState("mm/dd/yyyy");
  const [causes, setCauses] = useState("");
  const [mode, setMode] = useState("Physical");
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [location, setLocation] = useState("");

  const [availableTherapists, setAvailableTherapists] = useState([]);
  const [selectedTherapist, setSelectedTherapist] = useState(new Doctor({}));

  const selectTherapist = (id) => {
    const therapist = availableTherapists.find(
      (therapist) => therapist.doctor_id === id
    );
    setSelectedTherapist(therapist);
    setStage(3);
  };

  const errorMsg = (msg) => {
    setError(msg);
    setSnackbarOpen(true);
  };
  const navigator = useNavigate();

  const authContext = useContext(AuthContext);

  const simulation = false;

  const submitRequest = () => {
    setStage(1);
    dotAnim(setDots);
    if (simulation) {
      setTimeout(() => {
        setStage(2);
      }, 5000);
    } else {
      getAvailableTherapists().then((therapists) => {
        setAvailableTherapists(therapists);
        setStage(2);
      });
    }
  };

  const bookAppointment = () => {
    if (simulation) {
      navigator("/");
    } else {
      postSession(
        new Date(date).getTime(),
        mode,
        authContext.user_id,
        selectedTherapist.doctor_id,
        details,
        causes,
        location
      )
        .then(() => navigator("/"))
        .catch((error) => errorMsg(error));
    }
  };

  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack width={"60%"} pl={3} pt={"10vh"} spacing={2}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          {stage > 0 ? (
            <IconButton
              onClick={() =>
                setStage((stage) => (stage !== 2 ? --stage : stage - 2))
              }
            >
              <ArrowBack />
            </IconButton>
          ) : (
            <CalendarTodayOutlined fontSize="large" sx={{ color: skobeloff }} />
          )}

          <Typography variant="h4" color={skobeloff} fontWeight={600}>
            Book an appointment
          </Typography>
        </Stack>

        <Collapse in={stage === 0} sx={{ width: "100%" }}>
          <Stack spacing={2} pb="5vh">
            <Typography component="span" color={rich_black}>
              Please describe your issue
            </Typography>
            <TextareaAutosize
              value={details}
              minRows={10}
              onChange={(event) => setDetails(event.target.value)}
              style={{
                fontFamily: "Inter",
                borderRadius: "4px",
                borderColor: rich_black,
                resize: "none",
              }}
            ></TextareaAutosize>
            <Typography component="span" color={rich_black}>
              Please set your preferred date:
            </Typography>
            <input
              type={"date"}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              style={{ padding: "1vh 0vh", width: "fit-content" }}
            />
            <Typography component="span" color={rich_black}>
              What is causing your problem?
            </Typography>
            <FormControl>
              <InputLabel id="causes-label"> Possible causes</InputLabel>
              <Select
                labelId="causes-label"
                label="Possible causes"
                value={causes}
                onChange={(event) => setCauses(event.target.value)}
              >
                <MenuItem value="Childhood trauma">Childhood trauma</MenuItem>
                <MenuItem value="Social isolation/anxiety">
                  Social isolation/anxiety
                </MenuItem>
                <MenuItem value="Social disadvantage">
                  Social disadvantage
                </MenuItem>
                <MenuItem value="Bereavement">Bereavement</MenuItem>
                <MenuItem value="Stress">Stress</MenuItem>
                <MenuItem value="Domestic violence">Domestic violence</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            <Typography component="span" color={rich_black}>
              What is your preferred mode of meeting
            </Typography>
            <FormControl>
              <InputLabel id="mode-label"> Mode of meeting</InputLabel>
              <Select
                labelId="mode-label"
                label="Mode of meeting"
                value={mode}
                onChange={(event) => {
                  setLocation("");
                  setMode(event.target.value);
                }}
              >
                <MenuItem value="Physical">Physical</MenuItem>
                <MenuItem value="Virtual">Virtual</MenuItem>
              </Select>
            </FormControl>
            <Collapse in={mode === "Physical"}>
              <TextField
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                label="Meeting location"
              />
            </Collapse>
            <Stack direction="row" justifyContent={"space-between"}>
              <Button
                sx={{ color: "white", width: "fit-content" }}
                variant="contained"
                onClick={() => submitRequest()}
              >
                Submit
              </Button>
              <Button
                sx={{ color: "white", width: "fit-content" }}
                variant="contained"
              >
                Request a specific doctor
              </Button>
            </Stack>
          </Stack>
        </Collapse>
        <Collapse in={stage === 1} sx={{ width: "100%" }}>
          <Stack
            alignItems={"center"}
            pt="10vh"
            width="100%"
            spacing={2}
            pb="5vh"
          >
            <CircularProgress size={"7vw"} />
            <Typography color={rich_black} variant="h6">
              Searching for therapists{dots}
            </Typography>
          </Stack>
        </Collapse>
        <Collapse in={stage === 2} sx={{ width: "100%" }}>
          <Stack spacing={2} pb="5vh">
            <Typography variant="h6" color={rich_black} fontWeight={600}>
              Available therapists
            </Typography>
            {availableTherapists.map((therapist) => (
              <AvailableTherapist
                profile_photo={therapist.profile_photo}
                full_name={therapist.full_name}
                desc={therapist.desc}
                rating={5}
                id={therapist.doctor_id}
                select={selectTherapist}
              />
            ))}
          </Stack>
        </Collapse>
        <Collapse in={stage === 3}>
          <Stack width="100%" spacing={2} pb="5vh">
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ width: "25vh", height: "25vh" }}
                src={selectedTherapist.profile_photo}
              >
                Photo
              </Avatar>
              <Stack spacing={1}>
                <Typography variant="h6" color={rich_black}>
                  {selectedTherapist.full_name}
                </Typography>
                <Rating
                  size="small"
                  color="primary"
                  value={selectedTherapist.rating}
                  readOnly
                />
                <Typography component="span" color={rich_black}>
                  {selectedTherapist.desc}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                variant="contained"
                sx={{ color: "white", width: "fit-content" }}
                onClick={() => bookAppointment()}
              >
                Book appointment for {new Date(date).toDateString()}
              </Button>
              <Typography component="span" color={rich_grey}>
                {selectedTherapist.hourly > 0
                  ? `KES ${selectedTherapist.hourly}/hr`
                  : "Free"}
              </Typography>
            </Stack>

            <Typography variant="h6" color={rich_black}>
              Reviews
            </Typography>
            <Review />
          </Stack>
        </Collapse>
      </Stack>
      <Stack width={"40%"} direction="column-reverse">
        <Illus2 />
      </Stack>
      <ErrorSnackBar
        error={error}
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
      />
    </Stack>
  );
};
export default BookPage;
