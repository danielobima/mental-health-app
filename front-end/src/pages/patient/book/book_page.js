import { CalendarTodayOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Collapse,
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

const BookPage = () => {
  const [details, setDetails] = useState("");
  //stages are request, searching, offer.
  const [stage, setStage] = useState("offer");
  const [dots, setDots] = useState(".");

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
            <Stack direction="row" justifyContent={"space-between"}>
              <Button
                sx={{ color: "white", width: "fit-content" }}
                variant="contained"
                onClick={() => {
                  setStage("searching");
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
                Dr Sarah
              </Typography>
              <Typography component="span" color={rich_grey}>
                Nairobi hospital
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              width="40%"
              justifyContent={"space-between"}
            >
              <Button variant="contained" sx={{ color: "white" }}>
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
