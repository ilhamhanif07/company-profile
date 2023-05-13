import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Alert, AlertColor, AlertTitle, Snackbar } from "@mui/material";

const AlertComponent = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<AlertColor>("success");

  useImperativeHandle(ref, () => ({
    showAlert: (message: string, type: AlertColor) => {
      setAlertMessage(message);
      setAlertType(type);
      setOpen(true);
    },
  }));

  const handleCloseAlert = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
          <Alert severity={alertType} onClose={handleCloseAlert}>
            {alertMessage}
          </Alert>
        </Snackbar>
      )}
    </>
  );
});

export default AlertComponent;
