import styled from 'styled-components';

export const PaginationStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  nav{
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 0;
    border: 0;
    margin-top: 2%;
    text-decoration: none;
    z-index: 0;

    ul{
       margin: 0;
       padding: 0;
    }
  }

  .page-link{
    background-color: #f89b29;
    color: white;
    border-color: black;

    :hover{
      cursor: pointer;
      background-color: black;
    }
  }

`

