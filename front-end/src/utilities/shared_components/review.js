import { Avatar, Paper, Rating, Stack, Typography } from "@mui/material";
import josh from "../../images/jpg/josh.jpg";
import { rich_black, rich_grey } from "../themes";

const sampleDescription =
  "I was going through a really tough time. She understood my problem and helped me gain insight on how to solve it.";
const Review = ({
  name = "Josh",
  profile_url = josh,
  desc = sampleDescription,
  date = new Date(Date.now()),
}) => {
  return (
    <Paper
      sx={{
        boxShadow: "0px 1px 4px rgb(200,200,200)",
        p: 2,
        borderRadius: "2px",
        width: "100%",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{
            width: "7vh",
            height: "7vh",
          }}
          src={profile_url}
        />
        <Stack>
          <Typography variant="h6" color={rich_black}>
            {name}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Rating value={5} size="small" readOnly />
            <Typography component="span" color={rich_grey}>
              {date.toDateString()}
            </Typography>
          </Stack>
          <Typography component="span" color={rich_black} mt="1vh">
            {desc}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
export default Review;
