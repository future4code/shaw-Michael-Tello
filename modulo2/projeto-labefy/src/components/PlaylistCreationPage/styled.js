import styled from "styled-components";

export const ContainerPlaylist = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 400px;
  color: white;

  label {
    font-weight: 800;
  }

  input {
    border: none;
    height: 5%;
    padding: 1em;
  }

  button {
    height: 30px;
    width: 100px;
    cursor: pointer;
  }
`;

export const PlaylistCreationForm = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #ffffff;
`;

export const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;
