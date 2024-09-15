import React from "react";
import FooterMid from "../footer/footer-mid";
import FooterBottom from "../footer/footer-bottom";
import FooterTop from "../footer/footer-top";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="px-20">
      <FooterTop />
      <FooterMid />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
