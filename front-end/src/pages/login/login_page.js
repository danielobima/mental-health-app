import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import bgImage from "../../images/jpg/talking.jpg";
import NewLogo from "../../images/svg/new_logo/new_logo";
import { AuthContext } from "../../providers/auth_provider/auth_provider";
import { rich_black, skobeloff } from "../../utilities/themes";

const LoginPage = () => {
  const context = useContext(AuthContext);
  let navigate = useNavigate();

  const [createNew, setCreateNew] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [user_type, setUserType] = useState(0);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  useEffect(() => {
    if (context.user_id && context.user_type) {
      if (context.user_details) {
        navigate("/");
      } else {
        if (context.user_type === 0) {
          navigate("/details");
        } else {
          navigate("/doc/details");
        }
      }
    }
    // eslint-disable-next-line
  }, []);

  ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
    if (value !== password) {
      return false;
    }
    return true;
  });

  /**Check whether the user is creating a new account then proceed to sign in or log in */
  const handleSubmit = () => {
    setLoading(true);
    if (!createNew) {
      context
        .signIn(email, password)
        .then(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          setSnackbarOpen(true);
        });
    } else {
      context
        .createNewUser(email, password, user_type)
        .then(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          setSnackbarOpen(true);
        });
    }
  };

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
              <ValidatorForm onSubmit={handleSubmit}>
                <Stack justifyContent={"start"} spacing={2}>
                  <Stack direction="row" justifyContent={"center"}>
                    <NewLogo width={"50%"} />
                  </Stack>
                  <Typography variant="h3" color={rich_black}>
                    Therapy4You
                  </Typography>
                  <Typography component={"span"} color={skobeloff}>
                    {!createNew ? <>Log in</> : <>Create a new account</>}
                  </Typography>
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
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (!createNew) {
                        setConfirmPass(event.target.value);
                      }
                    }}
                    validators={["required"]}
                    errorMessages={["Please enter your password"]}
                  />
                  <Collapse in={createNew}>
                    <Stack spacing={2}>
                      <TextValidator
                        fullWidth={true}
                        label="Confirm password"
                        name="confirm_pass"
                        type="password"
                        value={confirmPass}
                        onChange={(event) => setConfirmPass(event.target.value)}
                        validators={["isPasswordMatch", "required"]}
                        errorMessages={[
                          "password mismatch",
                          "Please enter your password",
                        ]}
                      />
                      <FormControl fullWidth>
                        <InputLabel id="userTypeLabel">Type of user</InputLabel>
                        <Select
                          labelId="userTypeLabel"
                          id="userTypeLabel"
                          label="Type of user"
                          value={user_type}
                          onChange={(event) => setUserType(event.target.value)}
                        >
                          <MenuItem value={0}>Patient</MenuItem>
                          <MenuItem value={1}>Doctor</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </Collapse>
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
                  <Button
                    variant="outlined"
                    onClick={() => setCreateNew(!createNew)}
                  >
                    {!createNew ? (
                      <>Create a new account</>
                    ) : (
                      <>Sign in to existing account</>
                    )}
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
