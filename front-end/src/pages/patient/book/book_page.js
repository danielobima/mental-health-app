import { CalendarTodayOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Illus2 from "../../../images/svg/illus2/illus2";
import dotAnim from "../../../utilities/dotAnim";
import { rich_black, rich_grey, skobeloff } from "../../../utilities/themes";
import rachel from "../../../images/jpg/rachel.jpg";
import Review from "../../../utilities/shared_components/review";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setSessionsWithDoctors } from "../../../redux/slices/patient_sessions_slice";
import { allocated_session } from "../../../models/sessions_model";

const BookPage = () => {
  const [details, setDetails] = useState("");
  //stages are request, searching, offer.
  const [stage, setStage] = useState("request");
  const [dots, setDots] = useState(".");
  const [date, setDate] = useState("mm/dd/yyyy");
  const [causes, setCauses] = useState("");
  const [mode, setMode] = useState("Physical");
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const simulation = true;

  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack width={"60%"} pl={3} pt={"10vh"} spacing={2}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <CalendarTodayOutlined fontSize="large" sx={{ color: skobeloff }} />

          <Typography variant="h4" color={skobeloff} fontWeight={600}>
            Book an appointment
          </Typography>
        </Stack>

        <Collapse in={stage === "request"} sx={{ width: "100%" }}>
          <Stack spacing={2}>
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
                onChange={(event) => setMode(event.target.value)}
              >
                <MenuItem value="Physical">Physical</MenuItem>
                <MenuItem value="Virtual">Virtual</MenuItem>
              </Select>
            </FormControl>
            <Stack direction="row" justifyContent={"space-between"}>
              <Button
                sx={{ color: "white", width: "fit-content" }}
                variant="contained"
                onClick={() => {
                  setStage("searching");
                  if (simulation) {
                    setTimeout(() => {
                      setStage("offer");
                    }, 5000);
                  }
                  dotAnim(setDots);
                }}
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
        <Collapse in={stage === "searching"} sx={{ width: "100%" }}>
          <Stack alignItems={"center"} pt="10vh" width="100%" spacing={2}>
            <CircularProgress size={"7vw"} />
            <Typography color={rich_black} variant="h6">
              Searching for a therapist{dots}
            </Typography>
          </Stack>
        </Collapse>
        <Collapse in={stage === "offer"}>
          <Stack alignItems={"center"} width="100%" spacing={2}>
            <Avatar sx={{ width: "25vh", height: "25vh" }} src={rachel}>
              H
            </Avatar>
            <Stack alignItems={"center"}>
              <Typography variant="h6" color={rich_black}>
                Dr Rachel
              </Typography>
              <Stack
                direction={"row"}
                spacing={4}
                justifyContent={"space-between"}
              >
                <Typography component="span" color={rich_grey}>
                  Nairobi hospital
                </Typography>
                <Typography component="span" color={rich_grey}>
                  {new Date(date).toDateString()}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              width="40%"
              justifyContent={"space-between"}
            >
              <Button
                variant="contained"
                sx={{ color: "white" }}
                onClick={() => {
                  if (simulation) {
                    dispatch(
                      setSessionsWithDoctors([
                        {
                          ...allocated_session,
                          date: new Date(date),
                        },
                      ])
                    );
                    navigator("/");
                  }
                }}
              >
                Accept
              </Button>
              <Button variant="outlined">Decline</Button>
            </Stack>
            <Stack alignItems={"start"} width="70%">
              <Typography variant="h6" color={rich_black}>
                Reviews
              </Typography>
              <Review />
            </Stack>
          </Stack>
        </Collapse>
      </Stack>
      <Stack width={"40%"} direction="column-reverse">
        <Illus2 />
      </Stack>
    </Stack>
  );
};
export default BookPage;
