// import styled from "styled-components";
// import Colors from "../../assets/Colors";

// export const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   /* margin-bottom: 10%; */
//   background-color: ${Colors.primaryColor};

//   @media (min-width: 768px) {
//     padding: 10px 40px;
//   }
// `;

// export const BrandHeading = styled.h1`
//   font-size: 24px;
//   color: ${Colors.secondaryColor};
// `;

// export const NavLinks = styled.div`
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
//   position: absolute;
//   top: 60px;
//   left: 0;
//   width: 100%;
//   background: white;
//   text-align: center;
//   padding: 10px 0;

//   a {
//     display: block;
//     text-decoration: none;
//     padding: 10px;
//     color: #232323;
//   }

//   @media (min-width: 768px) {
//     display: flex;
//     position: static;
//     width: auto;
//     background: none;
//   }
// `;

// export const Hamburger = styled.div`
//   display: block;
//   cursor: pointer;

//   div {
//     width: 25px;
//     height: 3px;
//     background-color: #232323;
//     margin: 5px;
//   }

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

import styled from "styled-components";
import Colors from "../../../assets/Colors";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${Colors.primaryColor};
  position: relative;

  @media (min-width: 768px) {
    padding: 15px 40px;
  }
`;

export const BrandHeading = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${Colors.secondaryColor};
`;

export const NavLinks = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: white;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: flex;
    position: static;
    width: auto;
    background: none;
    box-shadow: none;
  }
`;

export const NavItem = styled.a`
  display: block;
  text-decoration: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #232323;
  transition: color 0.3s ease;

  &:hover {
    color: ${Colors.secondaryColor};
  }

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const Hamburger = styled.div`
  display: block;
  font-size: 24px;
  cursor: pointer;
  color: ${Colors.secondaryColor};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const RightIcons = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const IconButton = styled.button`
  /* display: none; */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
  }
`;

export const SignInButton = styled.button`
  background: #9e3040;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #7a1e2e;
  }
`;
