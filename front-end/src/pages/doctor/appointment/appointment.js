import { Avatar, Button, Stack, Typography } from "@mui/material";
import Illus3 from "../../../images/svg/illus3/illus3";
import { rich_black, skobeloff } from "../../../utilities/themes";
import josh from "../../../images/jpg/josh.jpg";
import { Place } from "@mui/icons-material";

const Appointment = () => {
  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack width={"60%"} pl={3} pt={"10vh"}>
        <Typography variant="h4" color={skobeloff} fontWeight={600}>
          Upcoming session
        </Typography>
        <Stack direction={"row"} spacing={2} alignItems="center" mt="5vh">
          <Avatar
            src={josh}
            sx={{
              width: "15vw",
              height: "15vw",
            }}
          />
          <Stack>
            <Typography variant="h4" color={skobeloff} fontWeight={600}>
              Josh
            </Typography>
            <Typography component="span" color={rich_black} fontSize={22}>
              17th August 2022
            </Typography>
            <Typography component="span" color={rich_black} fontSize={22}>
              Physical session
            </Typography>
            <Stack direction="row">
              <Place
                htmlColor={rich_black}
                sx={{
                  fontSize: 30,
                }}
              />
              <Typography component="span" color={rich_black} fontSize={22}>
                &nbsp;Threeways Junction Estate
              </Typography>
            </Stack>
            <Button variant="contained" sx={{ color: "white", mt: "1vh" }}>
              I have arrived
            </Button>
          </Stack>
        </Stack>
        <Typography
          variant="h5"
          color={rich_black}
          fontWeight={600}
          sx={{ mt: "10vh" }}
        >
          Previous sessions
        </Typography>
      </Stack>
      <Stack width={"40%"} direction="column-reverse">
        <Illus3 />
      </Stack>
    </Stack>
  );
};
export default Appointment;
