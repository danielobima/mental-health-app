import { HomeRounded, LogoutRounded, PersonRounded } from "@mui/icons-material";
import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../images/svg/logo/logo";
import { AuthContext } from "../../providers/auth_provider/auth_provider";
import { rich_black } from "../../utilities/themes";
import LayoutLink from "./components/layout_link";

const Layout = () => {
  const context = useContext(AuthContext);
  const navigator = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [error, setError] = useState("");
  const handleSnackbarClose = () => setSnackbarOpen(false);
  useEffect(() => {
    // if (!context.user_id || !context.user_type) {
    //   //userId or user type is null hence the user is not authenticated,
    //   navigator("/login");
    // } else {
    //   if (!context.user_details) {
    //     navigator(context.userType === 0 ? "/details" : "/doc/details");
    //   }
    // }
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
          <Logo />
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
              onClick={async () => {
                try {
                  await context.logOut();
                  navigator("/login");
                } catch (error) {
                  setError(error);
                  setSnackbarOpen(true);
                }
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
    </Stack>
  );
};
export default Layout;
