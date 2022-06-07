import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  IceCream,
  IceCream2,
  IceCream3,
  Logo,
  Main,
  Navbar,
} from "./Styled";
import logo from "../assets/logo.png";
import ice_cream from "../assets/circle.png";
import ice_cream2 from "../assets/ice-cream.png";
import ice_cream3 from "../assets/milk.png";

const HomePage = () => {
  return (
    <Container>
      <Navbar>
        <Navbar.Left>
          <Link to="/">
            <Logo id="icon" src={logo} />
          </Link>
        </Navbar.Left>
        <Navbar.Middle>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Home</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Product</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Pricing</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Testimonials</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Contact Us</h5>
          </Link>
        </Navbar.Middle>
        <Navbar.Right>
          <button>Buy Now</button>
        </Navbar.Right>
      </Navbar>
      <Main>
        <Main.Left>
          <p>Sweet fun, full of milk.</p>
          <h1>
            Feel inside cold with <br /> our delicious ice-cream.
          </h1>
          <p>
            Some food has looked so awful that it's looked like something that{" "}
            <br /> the dog's brought home, yet after one mouthful I've been left{" "}
            <br /> eating my thoughts, my words.
          </p>
          <button>Buy Now</button>
        </Main.Left>
        <Main.Right>
          <IceCream src={ice_cream} />
          <IceCream2 src={ice_cream2} />
          <IceCream3 src={ice_cream3} />
        </Main.Right>
      </Main>
    </Container>
  );
};

export default HomePage;
