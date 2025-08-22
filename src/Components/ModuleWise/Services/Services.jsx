import React from 'react'
import { SecurePayment, Support, Travel } from '../../../assets/Icons'
import { ServicesContainer, ServiceCard, CardImage, CardTitle ,Image} from './ServicesStyles'
import { Description, SectionWrapper} from '../../StyledComponents/CommonStyles'
const Services = () => {
    return (
        <>
        <SectionWrapper>
            <ServicesContainer>
                <ServiceCard>
                    <CardImage>
                        <Image><Travel /></Image>
                    </CardImage>
                    <CardTitle>Free Delivery</CardTitle>
                    <Description>For all orders above $35</Description>
                </ServiceCard>

                <ServiceCard>
                    <CardImage>
                        <Image> <SecurePayment /></Image>
                    </CardImage>
                    <CardTitle>Secure Payment</CardTitle>
                    <Description>100% Secure payment methods</Description>
                </ServiceCard>
                
                <ServiceCard>
                    <CardImage>
                        <Image><Support /></Image></CardImage>
                    <CardTitle>24/7 Support</CardTitle>
                    <Description>We have dedicated Support</Description>
                </ServiceCard>
            </ServicesContainer>
            </SectionWrapper>
        </>
    )
}

export default Services