import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  NavbarContainer,
  BrandHeading,
  NavLinks,
  NavItem,
  Hamburger,
  RightIcons,
  IconButton,
} from "./NavbarStyles";
import { SearchIcon,HeartIcon, CartIcon } from "../../../assets/Icons";
import Button from "../Button/Button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <BrandHeading>CONCETTI DI-LUSSO</BrandHeading>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </Hamburger>

      <NavLinks isOpen={isOpen}>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">Towels</NavItem>
        <NavItem href="#">Robes</NavItem>
        <NavItem href="#">Bathroom Sets</NavItem>
      </NavLinks>

      <RightIcons>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <HeartIcon />
        </IconButton>
        <IconButton>
          <CartIcon />
        </IconButton>
        <Button bgColor="#9E3040" textColor="white" text="SIGN IN" hoverBgColor="#121225"></Button>

        {/* <SignInButton>SIGN IN</SignInButton> */}
      </RightIcons>
    </NavbarContainer>
  );
};

export default Navbar;
