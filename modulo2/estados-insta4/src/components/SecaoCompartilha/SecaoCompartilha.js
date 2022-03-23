import React, { Component } from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconImage = styled.img`
  margin-right: 5px;
  height: 24px;
`;

class SecaoCompartilha extends Component {
  render() {
    return (
      <IconContainer>
        <IconImage
          alt={"Icone"}
          src={this.props.icone}
          onClick={this.props.onClickIcone}
        />
      </IconContainer>
    );
  }
}

export default SecaoCompartilha;
