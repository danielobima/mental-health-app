import { HomeRounded, LogoutRounded, PersonRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { rich_black } from "../../utilities/themes";
import { theme } from "../../utilities/themes";
import LayoutLink from "./components/layout_link";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ width: "100%", height: "100vh" }} direction="row">
        <Box sx={{ width: "15%", height: "100%", bgcolor: rich_black }}>
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
            <LayoutLink href={"/"}>
              <LogoutRounded />
              <Typography variant="span">Log out</Typography>
            </LayoutLink>
          </Stack>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
export default Layout;
