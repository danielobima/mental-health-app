import { Avatar, IconButton, Paper, Stack, Typography } from "@mui/material";
import { rich_black, rich_grey } from "../themes";
import michelle from "../../images/jpg/michelle.jpg";
import { Done, Close } from "@mui/icons-material";

const NewSession = ({
  name = "Michelle",
  profile_url = michelle,
  date = new Date(Date.now()),
  physical = true,
  onAccept = () => {},
  onDecline = () => {},
}) => {
  return (
    <Paper
      sx={{
        boxShadow: "0px 1px 4px rgb(200,200,200)",
        p: 2,
        borderRadius: "2px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            sx={{
              width: "8vh",
              height: "8vh",
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
        <Stack direction="row" spacing={2}>
          <IconButton color="primary" onClick={onAccept}>
            <Done />
          </IconButton>
          <IconButton color="error" onClick={onAccept}>
            <Close />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default NewSession;
