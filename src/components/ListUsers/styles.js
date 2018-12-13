import styled from "styled-components";

export const ContainerList = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 300px;
  height: calc(100% - 40px);
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const User = styled.div`
  justify-content: flex-start;
  border-bottom: 1px solid #eee;
  padding: 10px;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .info {
    margin-left: 15px;
  }

  strong {
    font-size: 14px;
  }

  p {
    font-size: 12px;
    color: #564f4f;
    margin-top: 5px;
  }

  span {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    text-transform: uppercase;
    color: #f00;
    font-size: 10px;
    padding-right: 10px;
  }
`;
