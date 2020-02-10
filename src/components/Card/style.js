import styled from "styled-components";

import { Row } from "react-bootstrap";

export const CardContainer = styled(Row)`
  div {
    padding-left: 0;
    max-width: 350px;
    margin: 0 auto;
    margin-left: 10px;
    background: rgb(255, 255, 255);
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;
