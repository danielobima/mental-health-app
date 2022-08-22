import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import Illus3 from "../../images/svg/illus3/illus3";
import { rich_black, rich_grey, skobeloff } from "../../utilities/themes";
import { CalendarMonthOutlined, Place } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth_provider/auth_provider";
import getUserDetails from "../../utilities/get_user_details";
import { getSession } from "../../utilities/get_sessions";
import { useParams } from "react-router-dom";
import Session from "../../models/sessions_model";

const Appointment = () => {
  const authContext = useContext(AuthContext);
  const [session, setSession] = useState(new Session({}));
  const [profile_photo, setProfilePhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const { session_id } = useParams();

  useEffect(() => {
    getSession(session_id).then((sesh) => {
      setSession(sesh);
      getUserDetails(
        authContext.user_type === 0 ? sesh.doctor_id : sesh.patient_id
      ).then((user) => {
        setName(user.full_name);
        setProfilePhoto(user.profile_photo);
        setEmail(user.email);
        setPhone(user.telephone);
      });
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
              {new Date(session.date).toDateString()}
            </Typography>
            <Typography component="span" color={rich_black} fontSize={22}>
              {session.meeting_type}
            </Typography>
            {session.meeting_type === "Physical" && (
              <Stack direction="row" alignItems={"center"}>
                <Place
                  htmlColor={rich_black}
                  sx={{
                    fontSize: 30,
                  }}
                />
                <Typography component="span" color={rich_black} fontSize={22}>
                  &nbsp;{session.location}
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
              onClick={() => setContactDialogOpen(true)}
            >
              Contact
            </Button>
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
      <Dialog
        open={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
      >
        <DialogTitle>Contact {name}</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <DialogContentText>
              Email: <a href={`mailto:${email}`}>{email}</a>
            </DialogContentText>
            <DialogContentText>
              Telephone: <a href={`tel:${phone}`}>{phone}</a>
            </DialogContentText>
            <DialogActions>
              <Button onClick={() => setContactDialogOpen(false)}>Close</Button>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};
export default Appointment;
