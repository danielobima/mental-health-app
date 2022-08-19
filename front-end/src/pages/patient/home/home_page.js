import {
  Button,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { ReactComponent as Lines } from "../../../images/svg/lines.svg";
import Illus1 from "../../../images/svg/illus1/illus1";
import {
  rich_black,
  rich_grey,
  skobeloff,
  white_green,
} from "../../../utilities/themes";
import {
  Place,
  ReceiptLongRounded,
  TipsAndUpdatesOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpcomingSession from "../../../utilities/shared_components/upcoming_session";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [anim, setAnim] = useState(false);
  const [starting, setStarting] = useState(false);

  const allocated_sessions = useSelector((state) => {
    return state.patient_sessions.sessionsWithDoctors;
  });

  useEffect(() => {
    if (allocated_sessions.length > 0) {
      setTimeout(() => {
        setStarting(true);
      }, 30000);
    }
    setAnim(true);
    // eslint-disable-next-line
  }, []);

  return (
    <Stack width={"100%"} height={"100%"}>
      <Stack direction={"row"} height={"50%"} width={"100%"} bgcolor="#F9F9F9">
        <Stack width={"50%"} justifyContent="center">
          <Stack pl={3} spacing={2}>
            <Lines width={"12vw"} />
            <Typography variant="h4" color={skobeloff} fontWeight={600}>
              {!starting ? "Welcome Josh" : "Dr Sarah is arriving soon"}
            </Typography>
            {!starting ? (
              <>
                <Link
                  to="/book"
                  style={{ textDecoration: "none", width: "fit-content" }}
                >
                  <Button
                    variant="contained"
                    sx={{ color: "white", width: "fit-content", p: 2 }}
                  >
                    Book an appointment
                  </Button>
                </Link>
                <Typography component="span" color={rich_black}>
                  We connect people with therapists they can trust.
                </Typography>
              </>
            ) : (
              <Stack direction="row" alignItems={"center"}>
                <Stack alignItems={"center"}>
                  <Place
                    color="primary"
                    sx={{
                      fontSize: 60,
                    }}
                  />
                  <Typography color={rich_grey}>Dr Sarah</Typography>
                </Stack>
                <LinearProgress sx={{ flexGrow: 1 }} />
                <Stack alignItems={"center"}>
                  <Place
                    color="primary"
                    sx={{
                      fontSize: 60,
                    }}
                  />
                  <Typography color={rich_grey}>You</Typography>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Stack width={"50%"} justifyContent="center">
          <Illus1 visible={anim} />
        </Stack>
      </Stack>
      <Stack direction={"row"} height={"50%"} width={"100%"}>
        <Stack width={"60%"}>
          <Container sx={{ pt: 3, width: "90%" }}>
            <Stack spacing={2}>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <ReceiptLongRounded
                  fontSize="large"
                  sx={{ color: rich_black }}
                />
                <Typography variant="h6" color={rich_black} fontWeight={600}>
                  Upcoming sessions
                </Typography>
              </Stack>
              {allocated_sessions.length > 0 ? (
                <UpcomingSession />
              ) : (
                <Typography component={"span"} color={rich_black}>
                  You have no upcoming sessions
                </Typography>
              )}
            </Stack>
          </Container>
        </Stack>
        <Stack width={"40%"} bgcolor={white_green} p={4} spacing={2}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <TipsAndUpdatesOutlined
              fontSize="large"
              sx={{ color: rich_black }}
            />
            <Typography variant="h6" color={rich_black} fontWeight={600}>
              How it works
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography component={"span"} color={rich_black}>
              1. Click on the book appointment button
            </Typography>
            <Typography component={"span"} color={rich_black}>
              2. Describe what your currently going through and your preferred
              date of meeting a therapist
            </Typography>
            <Typography component={"span"} color={rich_black}>
              3. We will find a therapist for you based off of your settings
            </Typography>
            <Typography component={"span"} color={rich_black}>
              4. Depending on whether you chose a physical or virtual meeting,
              the therapist will meet with you on the specified date.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default HomePage;