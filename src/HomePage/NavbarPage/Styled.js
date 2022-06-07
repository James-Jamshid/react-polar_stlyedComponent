import styled from "styled-components";
export const Container = styled.div`
  background-color: #f2ceda;
  display: flex;
  flex-direction: column;
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;
Navbar.Left = styled.div`
  display: flex;
  justify-content: center;

  flex: 1;
`;
export const Logo = styled.img``;
Navbar.Middle = styled.div`
  justify-content: space-between;
  display: flex;
  flex: 1;
`;
Navbar.Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
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
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 800px;
`;
Main.Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 30px;

  padding-left: 200px;
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
Main.Right = styled.div`
  display: flex;
  flex: 1;
`;
export const IceCream = styled.img`
  display: flex;
  position: absolute;
  top: 420px;
`;
export const IceCream2 = styled.img`
  display: flex;
  position: absolute;
  top: 150px;
  left: 700px;
`;
export const IceCream3 = styled.img`
  display: flex;
  position: absolute;
  top: 250px;
  left: 550px;
`;
