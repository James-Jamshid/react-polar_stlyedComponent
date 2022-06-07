import React from "react";
import {
  Container,
  FooterImage,
  FooterImg,
  Lower,
  LowerIcon,
  LowerInner,
  Upper,
  UpperInner,
  UpperMail,
} from "./Styled";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import p from "../assets/p.png";
import master from "../assets/master.png";
import visa from "../assets/visa.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Upper>
        <UpperInner>
          <h1>
            Have Question in Mind? <br /> Let us help you
          </h1>

          <UpperMail>
            <input type="text" placeholder="Enter your question" />
            <button>Send</button>
          </UpperMail>
        </UpperInner>
      </Upper>
      <Lower>
        <LowerInner>
          <FooterImage>
            <Link to="/btn" style={{ textDecoration: "none" }}>
              <FooterImg id="icon" src={logo} />
            </Link>
          </FooterImage>
          <p>
            Some food has looked so awful that <br /> it's looked like something
            that the <br /> dog's brought home.
          </p>
          <p>Follow Us</p>
          <LowerIcon>
            <a href="https://www.facebook.com">
              <FooterImg id="icon" src={facebook} />
            </a>
            <a href="https://twitter.com">
              <FooterImg id="icon" src={twitter} />
            </a>
            <a href="https://www.instagram.com">
              <FooterImg id="icon" src={instagram} />
            </a>
            <a href="https://www.linkedin.com">
              <FooterImg id="icon" src={linkedin} />
            </a>
          </LowerIcon>
        </LowerInner>
        <LowerInner>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Home</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Product</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Blog</h5>
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
        </LowerInner>
        <LowerInner>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Delivery Information</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Privacy Policy</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Terms & Condition</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Search Terms</h5>
          </Link>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Order & Return</h5>
          </Link>
        </LowerInner>
        <LowerInner>
          <Link to="/btn" style={{ textDecoration: "none" }}>
            <h5>Newsletter</h5>
          </Link>
          <UpperMail>
            <input type="email" placeholder=" Your Email" />
            <button>Subscribe</button>
          </UpperMail>
          <LowerIcon>
            <a
              href="https://www.prioritypass.com
"
            >
              <FooterImg id="icon" src={p} />
            </a>
            <a href="https://www.mastercard.us/en-us.html">
              <FooterImg id="icon" src={master} />
            </a>
            <a href="https://usa.visa.com/pay-with-visa/find-card/apply-credit-card">
              <FooterImg id="icon" src={visa} />
            </a>
          </LowerIcon>
        </LowerInner>
      </Lower>
    </Container>
  );
};

export default Footer;
