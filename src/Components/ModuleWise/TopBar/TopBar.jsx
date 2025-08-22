import React from "react";
import { Map, Phone, Mail } from "../../../assets/Icons";
import {
  HeaderWrapper,
  HeaderBar,
  ContactSection,
  ContactItem,
  OfferText,
  LocationWrapper,
  Span,
} from "./TopBarStyles";

const TopBar = () => {
  return (
    <HeaderWrapper>
      <HeaderBar>
        <ContactSection>
          <ContactItem>
            <Phone />
            <Span>+1 234 567 890</Span>
          </ContactItem>
          <ContactItem>
            <Mail />
            <Span>info@example.com</Span>
          </ContactItem>
        </ContactSection>

        <OfferText>FREE SHIPPING! Orders $35+</OfferText>

        <LocationWrapper>
          <Map />
          <Span>8385 South Allen St, Suite 111, Sandy UT 84070</Span>
        </LocationWrapper>
      </HeaderBar>
    </HeaderWrapper>
  );
};

export default TopBar;
