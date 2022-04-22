import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../constants/url";

function ResetButton() {
  const [open, setOpen] = useState(false);
  const [erro, setErro] = useState(false);

  const onClickReset = () => {
    axios
      .put(`${BASE_URL}/123`)
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
  console.log(erro);
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
