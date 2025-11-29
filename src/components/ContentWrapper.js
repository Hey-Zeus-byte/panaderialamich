import styled from "styled-components";
import { pxv } from "../styles/pxv";

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefefa;
  /* padding: 0 ${pxv(12)}; */

  @media only screen and (max-width: 768px) {
  }
`;
