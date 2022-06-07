import React from "react";
import {
  Btn,
  BtnLeft,
  Container,
  Left,
  OrderImg,
  Right,
  Wrapper,
  WrapperInner,
} from "./Styled";
import img from "../assets/rasbery.png";
import select from "../assets/select.png";
import add from "../assets/add.png";
import order from "../assets/order.png";
import play from "../assets/play.png";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <Container>
      <Left>
        <OrderImg src={img} />
      </Left>
      <Right>
        <h1>Simple Way To Order Your Food</h1>
        <p>
          Some food has looked so awful that it's looked like something that{" "}
          <br /> the dog's brought home, yet after one mouthful I've been left
          eating my <br /> thoughts.
        </p>

        <Wrapper>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <WrapperInner id="icon">
              <OrderImg src={select} />
            </WrapperInner>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Select Your Food</h5>
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <WrapperInner id="icon">
              <OrderImg src={add} />
            </WrapperInner>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Add To Cart</h5>
          </Link>
        </Wrapper>

        <Wrapper>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <WrapperInner id="icon">
              <OrderImg src={order} />
            </WrapperInner>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Order Your Food</h5>
          </Link>
        </Wrapper>
        <Btn>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <BtnLeft>
              <OrderImg src={play} />
              <h3>
                GET IT ON <br /> GOOGLE PLAY
              </h3>
            </BtnLeft>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <BtnLeft>
              <OrderImg src={apple} />
              <h3>APP STORE</h3>
            </BtnLeft>
          </Link>
        </Btn>
      </Right>
    </Container>
  );
};

export default Order;
