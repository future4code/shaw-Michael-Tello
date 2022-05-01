import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";

export function Header() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundImage: "linear-gradient(#000000,#0647fcb7)",
        opacity: "0.8",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar style={{ display: "flex", gap: "2em" }} disableGutters>
          <Typography variant="h6">LABEX</Typography>

          <Link
            href="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            <Typography variant="subtitle1">HOME</Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
