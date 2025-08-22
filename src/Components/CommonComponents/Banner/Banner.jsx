import React from 'react'
import { BannerImage, BannerHeading, BannerSubHeading } from './BannerStyles'
// import { Button1 } from './CommonComponents/ButtonStyles'

const Banner = () => {
  return (
    <>
    <BannerImage>
        <BannerHeading>Beautiful Color <span>Contrast</span></BannerHeading>
        <BannerSubHeading>Over 50 Collections to Choose for !</BannerSubHeading>
        {/* <Button1 text="Shop Now" bgColor="#9E3040" textColor="#fffff" /> */}
    </BannerImage>
    </>
  )
}

export default Banner