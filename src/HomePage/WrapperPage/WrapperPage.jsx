import React from "react";
import { Car, Child, Wrapper, WrapperImg } from "./styled";
import car from "../assets/car.png";
import box from "../assets/box.png";
import money from "../assets/money.png";
import delivery from "../assets/delivery.png";
import ice_cream2 from "../assets/ice_cream2.png";
import { Link } from "react-router-dom";

const WrapperPage = () => {
  return (
    <Wrapper>
      <Child>
        <Child.Btn>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <Car id="icon" src={car} />
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Free Shipping</h4>
          </Link>
          <p>
            Last Chance! Free shipping on all <br /> orders ends today.
          </p>
        </Child.Btn>
        <Child.Btn>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <Car id="icon" src={box} />
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Free Shipping</h4>
          </Link>
          <p>
            Last Chance! Free shipping on all <br /> orders ends today.
          </p>
        </Child.Btn>
        <Child.Btn>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <Car id="icon" src={money} />
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Free Shipping</h4>
          </Link>
          <p>
            Last Chance! Free shipping on all <br /> orders ends today.
          </p>
        </Child.Btn>
        <Child.Btn>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <Car id="icon" src={delivery} />
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h4>Free Shipping</h4>
          </Link>
          <p>
            Last Chance! Free shipping on all <br /> orders ends today.
          </p>
        </Child.Btn>
      </Child>
      <Wrapper.Pink>
        <Wrapper.Left>
          <h1>
            Brown Sugar <br /> Oatmea
          </h1>
          <p>
            Together with McDonald’s, Burger King has grown to become <br />{" "}
            synonymous with burgers in the US.Together with McDonald’s, <br />{" "}
            Burger King has grown to become synonymous.
          </p>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <button>See Details</button>
          </Link>
        </Wrapper.Left>
        <Wrapper.Right>
          <WrapperImg src={ice_cream2} />
        </Wrapper.Right>
      </Wrapper.Pink>
    </Wrapper>
  );
};

export default WrapperPage;
