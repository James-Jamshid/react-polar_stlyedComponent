import React from "react";
import { Container, Navbar, Title, Wrapper, WrapperImg } from "./Styled";
import first from "../assets/first.png";
import sec from "../assets/sec.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import anna from "../assets/anna.png";
import left from "../assets/left.png";
import jack from "../assets/jack.png";
import anna2 from "../assets/anna3.png";
import right from "../assets/right.png";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Container>
      <Title>
        <h1>Our Product</h1>
      </Title>
      <Navbar>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <h5>ICE CREAM</h5>
        </Link>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <h5>CAYENNE CHOCOLATE</h5>
        </Link>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <h5>CAKE BATTER</h5>
        </Link>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <h5>CANDY CANE</h5>
        </Link>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <h5>PLATTERS</h5>
        </Link>
        <Link to="/btn" style={{ textDecoration: "none" }}>
          <h5>DESSERT</h5>
        </Link>
      </Navbar>

      <Wrapper>
        <Wrapper.Inner>
          <WrapperImg src={first} />
        </Wrapper.Inner>
        <Wrapper.Btn>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Brown bread</h4>
          </Link>
          <p>
            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au{" "}
            <br /> Pain is a pioneer in the healthy fast food scene.Bon Au Pain
            is a <br /> pioneer in the healthy fast food scene.
          </p>
          <h4>$19.55</h4>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <button>Buy Now</button>
          </Link>
        </Wrapper.Btn>
        <Wrapper.Btn2>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Brown bread</h4>
          </Link>
          <p>
            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au{" "}
            <br /> Pain is a pioneer in the healthy fast food scene.Bon Au Pain
            is a <br /> pioneer in the healthy fast food scene.
          </p>
          <h4>$19.55</h4>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <button>Buy Now</button>
          </Link>
        </Wrapper.Btn2>

        <Wrapper.Inner>
          <WrapperImg src={sec} />
        </Wrapper.Inner>
        <Wrapper.Inner>
          <WrapperImg src={third} />
        </Wrapper.Inner>
        <Wrapper.Btn>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Brown bread</h4>
          </Link>
          <p>
            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au{" "}
            <br /> Pain is a pioneer in the healthy fast food scene.Bon Au Pain
            is a <br /> pioneer in the healthy fast food scene.
          </p>
          <h4>$19.55</h4>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <button>Buy Now</button>
          </Link>
        </Wrapper.Btn>
        <Wrapper.Btn3>
          <Wrapper.Upper>
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <WrapperImg id="icon" src={anna} />
            </Link>
            <Wrapper.Upper1>
              <Link to="/btn" style={{ textDecoration: "none" }}>
                <h4>Adele A. McNeill</h4>
              </Link>
              <p>AMIRICAN</p>
            </Wrapper.Upper1>
          </Wrapper.Upper>
          <Wrapper.Middle>
            <p>
              Thanks a lot for the prompt service. Really <br /> appreciate.
              Excellence taste in Every Bite. Add <br /> a joy of best Taste.
              Foodie Moments.
            </p>
          </Wrapper.Middle>
          <Wrapper.Lower>
            <WrapperImg id="icon" src={left} />
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <WrapperImg id="icon" src={jack} />
            </Link>
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <WrapperImg id="icon" src={anna} />
            </Link>
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <WrapperImg id="icon" src={anna2} />
            </Link>
            <WrapperImg id="icon" src={right} />
          </Wrapper.Lower>
        </Wrapper.Btn3>
        <Wrapper.Inner>
          <WrapperImg src={fourth} />
        </Wrapper.Inner>
      </Wrapper>
    </Container>
  );
};

export default Product;
