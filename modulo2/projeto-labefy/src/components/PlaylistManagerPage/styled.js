import styled from "styled-components";



export const ContainerPlaylist = styled.div`
  color: white;
  display: flex;
  margin-top: 3em;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  color: white;

  label {
    font-weight: 800;
		font-size: large;
  }

  input {
    border: none;
    height: 5%;
    padding: 1em;
  }

  button {
    height: 8%;
    width: 10%;
    cursor: pointer;
  }
`;

export const CardPlayslist = styled.div`
  border: 1px solid #000;
  padding: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
`;

export const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;