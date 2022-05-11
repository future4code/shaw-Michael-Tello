import styled from "styled-components";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";


export const Nav = styled(AppBar)``;

export const Logo = styled(Typography)`
  font-size: 3rem;
  flex-grow: 3;
  display: flex;
  justify-content: center;
  align-items: center;
	cursor: pointer;

  p {
    font-family: "monospace";
    font-weight: 700;
  }
`;
