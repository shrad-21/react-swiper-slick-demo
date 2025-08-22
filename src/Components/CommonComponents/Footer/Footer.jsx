import React from 'react'
import {FooterWrapper, FooterContainer,Quicklinks,FooterSectionTitle,ContactUs,ContactItem, BankCardsContainer,PaymentIcons } from './FooterStyles'
import { AmericanExpress, Mail, Map, Visa, Discover, MasterCard, Payment, Paypal, Phone } from '../../../assets/Icons'
const Footer = () => {
    return (
        <>
        <FooterWrapper>
            <FooterContainer>
                <Quicklinks>
                    <FooterSectionTitle>Quick Links</FooterSectionTitle>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Return Policy</li>
                        <li>Terms of Service</li>
                        <li>Contact</li>
                    </ul>
                </Quicklinks>

                <ContactUs>
                    <FooterSectionTitle>Contact Us</FooterSectionTitle>
                    <ContactItem>
                    <Map/><p>8385 South Allen Street,<span>Suite 111,</span><span>Sandy UT 84070</span></p>
                    </ContactItem>
                    <ContactItem>
                        <Phone/><p>801-462-6210</p>
                    </ContactItem>
                    <ContactItem>
                        <Mail/><p>Support@concetti-di-lusso.com</p>
                    </ContactItem>
                </ContactUs>

                <BankCardsContainer>
                    <FooterSectionTitle>We Accept</FooterSectionTitle>
                    <PaymentIcons>
                        <Visa/>
                        <Discover/>
                        <AmericanExpress/>
                        <MasterCard/>
                        <Payment/>
                        <Paypal/>
                    </PaymentIcons>
                    <hr/>
                    <p>© 2020, Concetti Di-Lusso Powered by Shopify</p>
                    </BankCardsContainer>
                
            </FooterContainer>
            </FooterWrapper>
        </>
    )
}

export default Footer