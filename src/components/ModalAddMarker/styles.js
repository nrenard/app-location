import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  transition: all 0.4s ease-in;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${props => (props.modalAddMarker ? 1 : 0)};
  visibility: ${props => (props.modalAddMarker ? "visible" : "hidden")};
`;

export const BoxModal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 40px 0 #000;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 5px;
    }

    .wrapper-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      button {
        border-radius: 4px;
        padding: 5px;
        width: 48%;
        border: 0;
        cursor: pointer;
      }
    }
  }
`;

export const TitleModal = styled.h1`
  font-size: 15px;
  text-align: center;
`;
