import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  background-color: #f8edf0;
  height: 678px;
`;
export const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: end;
`;
export const Right = styled.div`
  padding-left: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 2;
  gap: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const WrapperInner = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`;
export const Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const BtnLeft = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-evenly;
  border: none;
  color: white;
  border-radius: 5px;
  width: 180px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 0 5px #000;
  background-color: black;
  :hover {
    background: #5f5f5f;
  }
`;

export const OrderImg = styled.img``;
