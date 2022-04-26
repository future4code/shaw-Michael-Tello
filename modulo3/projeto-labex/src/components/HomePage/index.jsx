import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import PageTitle from "../PageTitle";

function HomePage() {
  return (
    <Container style={{ background: "#f5f4fc", height: "85%" }}>
      <Grid>
        <Grid item xs={12}>
          <PageTitle title={"LabeX"} />
        </Grid>

        <div
          className="ButtonContainer"
          style={{ display: "flex", justifyContent: "center", gap: "2em" }}
        >
          <Link to={"/login"}>
            <Button variant="outlined" color="error">
              Area do administrador
            </Button>
          </Link>

          <Link to={"/inscricao"}>
            <Button variant="contained">Quero viajar</Button>
          </Link>
        </div>

        <div
          className="LogoContainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={logo} style={{ width: "30%" }} />
        </div>
      </Grid>
    </Container>
  );
}

export default HomePage;
