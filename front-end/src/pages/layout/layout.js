import {
  HomeRounded,
  LogoutRounded,
  Notifications,
  Person,
  PersonRounded,
  Settings,
} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NewLogoWhite from "../../images/svg/new_logo_white/new_logo_white";
import { AuthContext } from "../../providers/auth_provider/auth_provider";
import { rich_black, white_green } from "../../utilities/themes";
import LayoutLink from "./components/layout_link";

const Layout = () => {
  const context = useContext(AuthContext);
  const navigator = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [error, setError] = useState("");
  const handleSnackbarClose = () => setSnackbarOpen(false);
  useEffect(() => {
    if (!context.user_id || !context.user_type) {
      //userId or user type is null hence the user is not authenticated,
      navigator("/login");
    } else {
      // if (!context.user_details) {
      //   navigator(context.userType === 0 ? "/details" : "/doc/details");
      // }
      navigator("/");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Stack
      sx={{ width: "100%", height: "100vh", position: "relative" }}
      direction="row"
    >
      <Box sx={{ width: "12%", height: "100%" }}></Box>
      <Box
        sx={{
          width: "12%",
          height: "100%",
          bgcolor: rich_black,
          position: "fixed",
        }}
      >
        <Stack>
          <Stack direction={"row"} justifyContent="center" mt="5vh" mb="5vh">
            <NewLogoWhite width={"50%"} />
          </Stack>
          <Stack width="100%">
            <LayoutLink href={"/"}>
              <HomeRounded />
              <Typography variant="span">Home</Typography>
            </LayoutLink>
          </Stack>
          <Stack>
            <LayoutLink href={"/"}>
              <PersonRounded />
              <Typography variant="span">Profile</Typography>
            </LayoutLink>
          </Stack>
          <Stack>
            <LayoutLink
              href={"/"}
              isLink={false}
              onClick={() => {
                context
                  .logOut()
                  .then(() => {
                    navigator("/login");
                  })
                  .catch((error) => {
                    setError(error);
                    setSnackbarOpen(true);
                  });
              }}
            >
              <LogoutRounded />
              <Typography variant="span">Log out</Typography>
            </LayoutLink>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ width: "88%", height: "100%" }}>
        <Outlet />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
      <Box sx={{ position: "absolute", width: "fit-content", p: 2, right: 0 }}>
        <Stack direction="row-reverse" spacing={2}>
          <Avatar
            sx={{ width: "3vw", height: "3vw", boxShadow: "0px 3px 6px grey" }}
          >
            <Person htmlColor={white_green} />
          </Avatar>
          <IconButton sx={{ aspectRatio: "1/1" }} color="primary">
            <Notifications />
          </IconButton>
          <IconButton sx={{ aspectRatio: "1/1" }} color="primary">
            <Settings />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
};
export default Layout;
