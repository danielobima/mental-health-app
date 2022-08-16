import { Box, Stack, ThemeProvider } from "@mui/material";
import { theme } from "../../utilities/themes";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ width: "100%", height: "100vh" }} direction="row">
        <Box sx={{ width: "15%", height: "100%" }}></Box>
      </Stack>
    </ThemeProvider>
  );
};
