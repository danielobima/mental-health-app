import { Avatar, Collapse, Paper, Stack, Typography } from "@mui/material";
import { rich_black, rich_grey } from "../themes";
import { useEffect, useState } from "react";
import getUserDetails from "../get_user_details";

const UpcomingSession = ({ id, date, mode }) => {
  const [name, setName] = useState("");
  const [profile_url, setProfileUrl] = useState("");
  useEffect(() => {
    getUserDetails(id).then((user) => {
      setName(user.full_name);
      setProfileUrl(user.profile_photo);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Collapse in>
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
              {new Date(date).toDateString()}
            </Typography>
            <Typography component={"span"} color={rich_grey}>
              {mode}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Collapse>
  );
};

export default UpcomingSession;
