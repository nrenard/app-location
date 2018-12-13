import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Controlls = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 1;
`;

export const UserImages = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  box-sizing: border-box;
  overflow: hidden;
  border: 5px solid #7159c1;

  img {
    width: 100%;
  }
`;
