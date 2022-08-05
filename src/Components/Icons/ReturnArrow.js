import React from "react";
import styled from "styled-components";

const ReturnArrowContainer = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

class ReturnArrow extends React.Component {
  render() {
    return (
      <ReturnArrowContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={"24px"}
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </ReturnArrowContainer>
    );
  }
}

export default ReturnArrow;
