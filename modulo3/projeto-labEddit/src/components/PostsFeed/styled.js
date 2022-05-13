import styled from 'styled-components';

export const CardFeedPost = styled.div`
  margin-bottom: 10%;
  margin-top: 2%;
  width: 80%;

  b{
    color: green;
  }
`

export const DivComentButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      margin: 0 10%;

      :hover {
        cursor: pointer;
      }
    }
  }
`;