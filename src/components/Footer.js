import React from "react";

const Footer = () => {
  const footerStyle = { color: "black", fontStyle: "italic", fontSize: 16 };
  return (
    <div style={footerStyle}>
      {" "}
      <br />{" "}
      <em>
        Note app, Giancarlo Guerra 2021
      </em>{" "}
    </div>
  );
};

export default Footer;
