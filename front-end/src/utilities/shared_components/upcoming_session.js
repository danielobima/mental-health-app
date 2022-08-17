import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { rich_black, rich_grey } from "../themes";
import rachel from "../../images/jpg/rachel.jpg";

const UpcomingSession = ({
  name = "Dr Sarah",
  profile_url = rachel,
  date = new Date(Date.now()),
  physical = true,
}) => {
  return (
    <Paper
      sx={{
        boxShadow: "0px 1px 4px rgb(200,200,200)",
        p: 2,
        borderRadius: "2px",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          sx={{
            width: "12vh",
            height: "12vh",
          }}
          src={profile_url}
        />
        <Stack>
          <Typography variant="h6" color={rich_black}>
            {name}
          </Typography>
          <Typography component={"span"} color={rich_grey}>
            {date.toDateString()}
          </Typography>
          <Typography component={"span"} color={rich_grey}>
            {physical ? "Physical" : "Virtual"}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default UpcomingSession;
