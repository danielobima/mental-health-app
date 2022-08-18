import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import bgImage from "../../images/jpg/talking.jpg";
import LogoBlack from "../../images/svg/logo_black/logo_black";
import { AuthContext } from "../../providers/auth_provider";

const LoginPage = () => {
  const context = useContext(AuthContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  useEffect(() => {
    if (context.userId) {
      navigate("/");
    }
  }, []);

  return (
    <Box position={"relative"} width="100%" height={"100vh"}>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <Stack
          direction={"row-reverse"}
          position="absolute"
          width="100%"
          height={"100%"}
        >
          <Box
            width={"35%"}
            height="100%"
            bgcolor={"white"}
            sx={{ boxShadow: "0px 3px 6px grey" }}
          >
            <Stack
              justifyContent={"center"}
              alignItems="center"
              width="100%"
              height={"100%"}
            >
              {/* <LogoBlack /> */}
              <ValidatorForm
                onSubmit={async () => {
                  setLoading(true);
                  try {
                    await context.signIn(email, password);
                    setLoading(false);
                    navigate("/");
                  } catch (error) {
                    setLoading(false);
                    setError(error);
                    setSnackbarOpen(true);
                  }
                }}
              >
                <Stack justifyContent={"start"} spacing={2}>
                  <Typography variant="h3">Mental health app</Typography>
                  <Typography component={"span"}>Log in</Typography>
                  <TextValidator
                    fullWidth={true}
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "Please enter your email address",
                      "email is not valid",
                    ]}
                  />
                  <TextValidator
                    fullWidth={true}
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    validators={["required"]}
                    errorMessages={["Please enter your password"]}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ color: "white" }}
                    disabled={loading}
                  >
                    {loading && (
                      <>
                        <CircularProgress size={"16px"} /> &nbsp;
                      </>
                    )}
                    Log in
                  </Button>
                </Stack>
              </ValidatorForm>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default LoginPage;
