import styled from 'styled-components';

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  gap: 2em;
  background-color: #1ccd5b;
  color: black;

  div:hover {
    color: #ffffff;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap:2em;
  cursor: pointer;
`;

export const Log = styled.nav`
  display: flex;
  align-items: center;
  gap:1em;
`;