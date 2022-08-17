import { Paper, Stack, Typography } from "@mui/material";
import { rich_black, skobeloff, white_green } from "../../../utilities/themes";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import "./doc_home_page.scss";
import { NewReleases, ReceiptLongRounded } from "@mui/icons-material";
import UpcomingSession from "../../../utilities/shared_components/upcoming_session";
import NewSession from "../../../utilities/shared_components/new_session";

const DocHomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function onChange(nextValue) {
    setSelectedDate(nextValue);
  }
  const [anim, setAnim] = useState(false);
  const [session /*,setSession*/] = useState(true);
  const [starting /*,setSession*/] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

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
            onChange={setSelectedDate}
          />
        </Paper>
        <Stack direction="row" alignItems={"center"} spacing={1} mb="3vh">
          <ReceiptLongRounded fontSize="large" sx={{ color: rich_black }} />
          <Typography variant="h6" color={rich_black} fontWeight={600}>
            Upcoming sessions
          </Typography>
        </Stack>
        <UpcomingSession />
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
        <NewSession />
      </Stack>
    </Stack>
  );
};
export default DocHomePage;
