import React from 'react'
import { GetInTouchContainer,Description,ConnectField,Input} from './ConnectUsStyles'
import Button from '../../CommonComponents/Button/Button'
import { SectionHeading,SectionWrapper } from '../../StyledComponents/CommonStyles'
const ConnectUs = () => {
  return (
    <>
    <SectionWrapper>
    <GetInTouchContainer>
      <SectionHeading>Get In Touch</SectionHeading> 
      <Description>
        Subscribe to our weekly newsletter and receive exclusive offers on
        products<span> you love!</span>
      </Description>
      <ConnectField>
        <Input type="email" placeholder="Email Address" />
        <Button bgColor="#9E3040" textColor="white" text="Subscribe" hoverBgColor="#44161c"></Button>
      </ConnectField>
    </GetInTouchContainer>
    </SectionWrapper>
    </>
  )
}

export default ConnectUs