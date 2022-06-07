import styled from "styled-components";
export const Wrapper = styled.div``;
export const Child = styled.div`
  display: flex;

  padding: 80px;
  justify-content: space-between;
`;
Child.Btn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 250px;
  height: 200px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.03);
  border-radius: 7px;
`;
export const Car = styled.img`
  width: 40px;
`;
Wrapper.Pink = styled.div`
  display: flex;
  justify-content: center;
  background: #f8edf0;
`;
Wrapper.Left = styled.div`
  justify-content: center;
  padding-left: 200px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 25px;
  button {
    border: none;
    color: white;
    background-color: #d23166;
    border-radius: 5px;
    width: 165px;
    height: 49px;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
  }
  button:hover {
    background-color: #580505;
  }
`;
Wrapper.Right = styled.div`
  display: flex;
  flex: 1;
`;
export const WrapperImg = styled.img``;
