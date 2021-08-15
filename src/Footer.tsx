import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const Footer: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Footer;
