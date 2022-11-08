import { Avatar, Button, Paper, Rating, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { rich_black, rich_grey } from "../../../../utilities/themes";

const AvailableTherapist = ({
  profile_photo,
  full_name,
  desc,
  rating,
  id,
  select,
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
            src={profile_photo}
          />
          <Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h6" color={rich_black}>
                {full_name}
              </Typography>
              <Rating size="small" color="primary" value={rating} readOnly />
            </Stack>
            <Typography component={"span"} color={rich_grey}>
              {desc}
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          sx={{ color: "white" }}
          onClick={() => select(id)}
        >
          View
        </Button>
      </Stack>
    </Paper>
  );
};

export default AvailableTherapist;
