import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Upper = styled.div`
  display: flex;
  flex-direction: column;
  height: 545px;
  justify-content: center;
`;
export const UpperInner = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 40px;
  input {
    width: 600px;
    height: 60px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding-left: 25px;
    background-color: #fafafa;
  }
  button {
    border: none;
    color: white;
    background-color: #d23166;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 100px;
    height: 60px;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
  }
  button:hover {
    background-color: #580505;
  }
`;
export const UpperMail = styled.div``;
export const Lower = styled.div`
  display: flex;
  height: 381px;
  justify-content: space-evenly;
  gap: 130px;
`;
export const LowerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  input {
    border: 1px solid #d23166;
    width: 350px;
    height: 50px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding-left: 25px;
    background-color: #fafafa;
  }
  button {
    border: none;
    color: white;
    background-color: #d23166;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 100px;
    height: 50px;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
  }
  button:hover {
    background-color: #580505;
  }
`;
export const LowerIcon = styled.div`
  display: flex;
  gap: 10px;
`;
export const FooterImg = styled.img``;
export const FooterImage = styled.div``;
