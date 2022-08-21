import { Paper, Stack, Typography } from "@mui/material";
import { rich_black, skobeloff, white_green } from "../../../utilities/themes";
import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import "./doc_home_page.scss";
import { NewReleases, ReceiptLongRounded } from "@mui/icons-material";
import UpcomingSession from "../../../utilities/shared_components/upcoming_session";
import CompareDate from "../../../utilities/compareDate";
import getSessions from "../../../utilities/get_sessions";
import { AuthContext } from "../../../providers/auth_provider/auth_provider";

const DocHomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [sessions, setSessions] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    getSessions(authContext.user_id, authContext.user_type).then((sessions) => {
      setSessions(sessions);
    });
    // eslint-disable-next-line
  }, []);

  function onChange(nextValue) {
    setSelectedDate(nextValue);
  }
  // const [anim, setAnim] = useState(false);
  // const [session /*,setSession*/] = useState(true);
  // const [starting /*,setSession*/] = useState(false);

  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack width={"60%"} maxHeight={"100%"} pt="5vh" pl="5vh" pr="5vh">
        <Typography variant="h4" color={skobeloff} fontWeight={600} mb="3vh">
          Welcome Dr Sarah
        </Typography>
        <Paper
          sx={{
            boxShadow: "0px 1px 4px rgb(200,200,200)",
            p: 2,
            borderRadius: "2px",
            width: "fit-content",
            mb: "3vh",
          }}
        >
          <Calendar
            tileClassName={"tile"}
            value={selectedDate}
            onChange={onChange}
          />
        </Paper>
        <Stack direction="row" alignItems={"center"} spacing={1} mb="3vh">
          <ReceiptLongRounded fontSize="large" sx={{ color: rich_black }} />
          <Typography variant="h6" color={rich_black} fontWeight={600}>
            Upcoming sessions
          </Typography>
        </Stack>
        <Stack spacing={2}>
          {sessions
            .filter((session) =>
              CompareDate(new Date(session.date), selectedDate)
            )
            .map((session) => (
              <UpcomingSession
                mode={session.meeting_type}
                id={session.patient_id}
                date={session.date}
                session={session}
              />
            ))}
        </Stack>
      </Stack>
      <Stack
        width={"35%"}
        maxHeight={"100%"}
        pt="5vh"
        pl="5vh"
        pr="5vh"
        bgcolor={white_green}
      >
        <Stack direction="row" alignItems={"center"} spacing={1} mb="3vh">
          <NewReleases fontSize="large" sx={{ color: rich_black }} />
          <Typography variant="h6" color={rich_black} fontWeight={600}>
            New sessions
          </Typography>
        </Stack>
        {/* {newSesisons.map((session, index) => (
          <NewSession
            name={josh.full_name}
            date={new Date("2022-8-25")}
            profile_url={josh.profile_photo}
            key={index}
            onAccept={() => {
              setNewSessions([]);
              setMySessions([allocated_session2, allocated_session]);
            }}
          />
        ))} */}
      </Stack>
    </Stack>
  );
};
export default DocHomePage;
