import { Avatar, Button, Stack, Typography } from "@mui/material";
import Illus3 from "../../images/svg/illus3/illus3";
import { rich_black, rich_grey, skobeloff } from "../../utilities/themes";
import { CalendarMonthOutlined, Place } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth_provider/auth_provider";
import { LayoutContext } from "../layout/layout";
import getUserDetails from "../../utilities/get_user_details";

const Appointment = () => {
  const authContext = useContext(AuthContext);
  const layoutContext = useContext(LayoutContext);
  const [profile_photo, setProfilePhoto] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getUserDetails(
      authContext.user_type === 0
        ? layoutContext.appointment.doctor_id
        : layoutContext.appointment.patient_id
    ).then((user) => {
      setName(user.full_name);
      setProfilePhoto(user.profile_photo);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <Stack width={"60%"} pl={3} pt={"10vh"}>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          color={skobeloff}
        >
          <CalendarMonthOutlined fontSize="large" />
          <Typography variant="h4" color={skobeloff} fontWeight={600}>
            Appointment
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems="center" mt="5vh">
          <Avatar
            src={profile_photo}
            sx={{
              width: "15vw",
              height: "15vw",
            }}
          />
          <Stack>
            <Typography variant="h4" color={skobeloff} fontWeight={600}>
              {name}
            </Typography>
            <Typography component="span" color={rich_black} fontSize={22}>
              {new Date(layoutContext.appointment.date).toDateString()}
            </Typography>
            <Typography component="span" color={rich_black} fontSize={22}>
              {layoutContext.appointment.meeting_type}
            </Typography>
            {layoutContext.appointment.meeting_type === "Physical" && (
              <Stack direction="row" alignItems={"center"}>
                <Place
                  htmlColor={rich_black}
                  sx={{
                    fontSize: 30,
                  }}
                />
                <Typography component="span" color={rich_black} fontSize={22}>
                  &nbsp;{layoutContext.appointment.location}
                </Typography>
              </Stack>
            )}
            {authContext.user_type === 0 && (
              <>
                <br />
                <Typography component="span" color={rich_grey} fontSize={18}>
                  {name} will reach out to you to confirm additional details.
                </Typography>
              </>
            )}
            <Button
              variant="contained"
              sx={{ color: "white", mt: "1vh", width: "fit-content" }}
            >
              Contact
            </Button>
            {/* <Button variant="contained" sx={{ color: "white", mt: "1vh" }}>
              I have arrived
            </Button> */}
          </Stack>
        </Stack>
        <Typography
          variant="h5"
          color={rich_black}
          fontWeight={600}
          sx={{ mt: "10vh" }}
        >
          Previous sessions with {name}
        </Typography>
        <Typography variant="span" color={rich_black} sx={{ mt: "2vh" }}>
          No previous sessions with {name}
        </Typography>
      </Stack>
      <Stack width={"40%"} direction="column-reverse">
        <Illus3 />
      </Stack>
    </Stack>
  );
};
export default Appointment;
