import styled from "styled-components";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { cor2, cor3 } from "../../assets/pallete";
import { BsPeopleFill } from "react-icons/bs";

export const CardContainer = styled(Container)`
  display: flex;
  justify-content: center;
  background: ${cor2};
  height: 100vh;
  /* border: 1px inset #000; */
  border-style: ridge;
`;

export const BoxContainer = styled(Box)`
  display: flex;
`;

export const ContainerTypography = styled.div`
  display: flex;
  justify-content: center;
  width: 500em;
`;

export const ContainerMatchIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonScreen = styled.button`
  color: ${cor3};
  cursor: pointer;
`;

export const ButtonMatch = styled(BsPeopleFill)`
  color: ${cor3};
  font-size: 2em;
  cursor: pointer;
`;

// 1:02
// https://vimeo.com/419340516/df010a72a0
