import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "a a";
`;
Wrapper.Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.Btn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 50px;
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
Wrapper.Btn2 = styled.div`
  align-items: flex-end;
  text-align: end;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 50px;
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
Wrapper.Btn3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
`;

Wrapper.Upper1 = styled.div`
  display: flex;
  padding-left: 10px;
  flex-direction: column;
`;
Wrapper.Upper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
Wrapper.Middle = styled.div``;
Wrapper.Lower = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperImg = styled.img``;
