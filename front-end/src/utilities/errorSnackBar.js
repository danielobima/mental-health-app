import { Alert, Snackbar } from "@mui/material";

const ErrorSnackBar = ({ error, snackbarOpen, setSnackbarOpen }) => {
  const handleSnackbarClose = () => setSnackbarOpen(false);
  return (
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
  );
};

export default ErrorSnackBar;
