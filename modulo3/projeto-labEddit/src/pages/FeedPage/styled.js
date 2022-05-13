import styled from "styled-components";

export const FirstDivFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #ecac5b, black);
  width: 100%;

  nav {
    display: flex;
    width: 100%;
    padding: 0 2%;
    top: 0;
    position: sticky;
    z-index: 3;
    box-shadow: 0 8px 32px 0 rgba(31, 45, 100, 0.8);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    
  }
`;

export const DivFeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  box-shadow: 2px 2px 10px black;
  background: rgba(75, 0, 130, 0.15);

  form {
    width: 80%;
    margin-top: 5%;

    input {
      margin: 2% 0;
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    .input-group-text {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const GridPosts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleNav = styled.div`
  display: flex;
  color: white;
  text-shadow: 1px 1px 5px black;
  font-size: 1.5em;
  font-family: sans-serif;

  i {
    margin: 0 10%;
  }
`;
