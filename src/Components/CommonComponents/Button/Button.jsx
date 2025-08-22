import React from 'react'
import {StyledButton } from '../Button/ButtonStyles'
const Button = ({text,bgColor,textColor,hoverBgColor}) => {
  return (
    <>
    <StyledButton bgColor={bgColor} textColor={textColor} hoverBgColor={hoverBgColor} >
        {text}
    </StyledButton>
    </>
  )
}

export default Button