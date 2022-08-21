import {
  Avatar,
  Button,
  Collapse,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { rich_black, rich_grey } from "../themes";
import { useContext, useEffect, useState } from "react";
import getUserDetails from "../get_user_details";
import { LayoutContext } from "../../pages/layout/layout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/auth_provider/auth_provider";

const UpcomingSession = ({ id, date, mode, session }) => {
  const [name, setName] = useState("");
  const [profile_url, setProfileUrl] = useState("");
  const layoutContext = useContext(LayoutContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetails(id).then((user) => {
      setName(user.full_name);
      setProfileUrl(user.profile_photo);
    });
    // eslint-disable-next-line
  }, []);

  const select = () => {
    layoutContext.setAppointment(session);
    navigate(authContext.user_type === 0 ? "/appointment" : "/doc/appointment");
  };
  return (
    <Collapse in>
      <Paper
        sx={{
          boxShadow: "0px 1px 4px rgb(200,200,200)",
          p: 2,
          borderRadius: "2px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent={"space-between"}
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
          <Button
            variant="contained"
            sx={{ color: "white" }}
            onClick={() => select()}
          >
            View
          </Button>
        </Stack>
      </Paper>
    </Collapse>
  );
};

export default UpcomingSession;
