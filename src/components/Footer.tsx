import { ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return <footer>{children}</footer>;
};

export default Footer;
