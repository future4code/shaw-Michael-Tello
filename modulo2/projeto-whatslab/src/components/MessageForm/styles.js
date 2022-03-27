import styled from "styled-components";

export const MessageFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1.7fr 0.3fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    ". . ."
    "form form form";
  border: 1px solid black;
  min-height: 100vh;
  width: 50vw;
  background: #ffffff
    url("https://1.bp.blogspot.com/-mJTjSB1F6uw/XdXPWH9FViI/AAAAAAAAfmY/A2BRjph0w4w0nnPeX1z9hWUGrFofT15DwCLcBGAsYHQ/w0/Whatsapp-Wallpaper-115.jpg")
    no-repeat right top fixed;
`;

export const Form = styled.div`
  grid-area: form;
  padding: 0.5em;
`;

export const InputNome = styled.input`
  /* display: flex; */
  width: 20%;
  height: 7vh;
  padding: 0.5em;
`;

export const InputTexto = styled.input`
  /* margin-left:0.5em; */
  width: 60%;
  height: 7vh;
  padding: 0.5em;
`;

export const Button = styled.button`
  width: 20%;
  height: 8vh;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const BalaoConversa = styled.div`
/* background-color: blue; */

border-radius: 10%;
margin-top: 10px;
min-width: 50vw;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
padding: 1em;
  color: white;


  .remover{
    margin-top:1em;
    background-color: blue;
    opacity: 0.5;
    width: 30%;
    border-radius:10%;
  }
`;

export const UsernameContainer = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;
