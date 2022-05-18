import styled from 'styled-components';
import Container from "@mui/material/Container";
import { cor2 } from "../../constants/pallete";

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: center;
  background: ${cor2};
  min-height: 100vh;
  border-style: ridge;


`;