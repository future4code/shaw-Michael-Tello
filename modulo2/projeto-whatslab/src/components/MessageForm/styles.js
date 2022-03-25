import styled from "styled-components";

export const MessageFormContainer = styled.div`
  display: flex;
  align-items: flex-end;
  border: 1px solid black;
  width: 50vw;
  height: 100vh;
  background: #ffffff
    url("https://1.bp.blogspot.com/-mJTjSB1F6uw/XdXPWH9FViI/AAAAAAAAfmY/A2BRjph0w4w0nnPeX1z9hWUGrFofT15DwCLcBGAsYHQ/w0/Whatsapp-Wallpaper-115.jpg")
    no-repeat right top fixed;
`;

export const InputNome = styled.input`
  width: 30%;
  height: 7vh;
`;

export const InputTexto = styled.input`
  width: 70%;
  height: 7vh;
`;

export const Button = styled.button`
  width: 20%;
  height: 8vh;
  border-radius: 4px;
  cursor: pointer;
  background-color: #04aa6d;

  &:hover {
    background-color: #45a049;
  }
`;

export const BalaoConversa = styled.div`
  display: flex;
  align-self: flex-start;
  color: white;
  justify-content: center;
`;
