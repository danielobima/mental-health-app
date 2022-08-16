import { Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { rich_black } from "../../utilities/themes";
import { theme } from "../../utilities/themes";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ width: "100%", height: "100vh" }} direction="row">
        <Box sx={{ width: "15%", height: "100%", bgcolor: rich_black }}></Box>
      </Stack>
    </ThemeProvider>
  );
};
export default Layout;
