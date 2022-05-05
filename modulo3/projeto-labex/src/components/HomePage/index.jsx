import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "../../assets/logo.png";

function HomePage() {
  return (
    <Container
      style={{
        marginTop: "1em",
        background: "#f5f4fc",
        height: "85%",
      }}
    >
      <div
        className="LogoContainer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={logo} style={{ width: "30%" }} />
      </div>
      <Grid>
        <div
          className="ButtonContainer"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2em",
            marginRight: "3em",
          }}
        >
          <Link to={"/login"}>
            <Button variant="contained" color="error" size="large">
              Area do administrador
            </Button>
          </Link>

          <Link to={"/inscricao"}>
            <Button variant="contained" size="large">
              Quero viajar
            </Button>
          </Link>
        </div>
      </Grid>
    </Container>
  );
}

export default HomePage;
