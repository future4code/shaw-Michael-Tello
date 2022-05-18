import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Alert, Snackbar } from "@mui/material";

function ResetButton() {
  const [open, setOpen] = useState(false);
  const [erro, setErro] = useState(false);

  // ANCHOR PUT
  const onClickReset = () => {
    axios
      .put(`${BASE_URL}/clear`)
      .then((res) => {
        setErro(false);
        setOpen(true);
      })
      .catch((err) => {
        setErro(true);
        setOpen(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <button onClick={onClickReset} style={{ cursor: "pointer;" }}>
        Resetar curtidas e matches
      </button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {erro ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Erro!
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Sucesso todas os matches foram resetados!
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}

export default ResetButton;
