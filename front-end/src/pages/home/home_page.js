import { Button, Container, Stack, Typography } from "@mui/material";
import { ReactComponent as Lines } from "../../images/svg/lines.svg";
import Illus1 from "../../images/svg/illus1/illus1";
import { rich_black, skobeloff, white_green } from "../../utilities/themes";
import {
  ReceiptLongRounded,
  TipsAndUpdatesOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <Stack width={"100%"} height={"100%"}>
      <Stack direction={"row"} height={"50%"} width={"100%"} bgcolor="#F9F9F9">
        <Stack width={"50%"} justifyContent="center">
          <Stack pl={3} spacing={2}>
            <Lines width={"12vw"} />
            <Typography variant="h3" color={skobeloff} fontWeight={600}>
              Welcome Daniel
            </Typography>
            <Button
              variant="contained"
              sx={{ color: "white", width: "fit-content", p: 2 }}
            >
              Book an appointment
            </Button>
            <Typography component="span" color={rich_black}>
              Some consoling text
            </Typography>
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
              <Typography component={"span"} color={rich_black}>
                You have no upcoming sessions
              </Typography>
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
          <Stack>
            <Typography component={"span"} color={rich_black}>
              1. This happens
            </Typography>
            <Typography component={"span"} color={rich_black}>
              2. That happens
            </Typography>
            <Typography component={"span"} color={rich_black}>
              3. Something else happens
            </Typography>
            <Typography component={"span"} color={rich_black}>
              4. Done
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default HomePage;
