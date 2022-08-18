import { HomeRounded, LogoutRounded, PersonRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/auth_provider";
import { rich_black } from "../../utilities/themes";
import LayoutLink from "./components/layout_link";

const Layout = () => {
  const context = useContext(AuthContext);
  const navigator = useNavigate();
  useEffect(() => {
    if (!context.userId) {
      //userId is null hence the user is not authenticated,
      navigator("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Stack sx={{ width: "100%", height: "100vh" }} direction="row">
      <Box sx={{ width: "12%", height: "100%", bgcolor: rich_black }}>
        <Stack mt={"30vh"} width="100%">
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
              context.logOut().then(() => {
                navigator("/login");
              });
            }}
          >
            <LogoutRounded />
            <Typography variant="span">Log out</Typography>
          </LayoutLink>
        </Stack>
      </Box>
      <Box sx={{ width: "88%", height: "100%" }}>
        <Outlet />
      </Box>
    </Stack>
  );
};
export default Layout;
