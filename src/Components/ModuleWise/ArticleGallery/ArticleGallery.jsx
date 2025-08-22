import React from "react";
import {
  GalleryContainer,
  LeftImages,
  CenterImage,
  RightImages,
  Image,
} from "./ArticleGalleryStyles";
import img2 from '../../../assets/Images/MaskGroup1.png'
import img1 from '../../../assets/Images/MaskGroup2.png'
import img3 from '../../../assets/Images/MaskGroup3.png'
import img4 from '../../../assets/Images/MaskGroup.png'
import img5 from '../../../assets/Images/image_18.png'
import { SectionHeading, SectionWrapper } from "../../StyledComponents/CommonStyles";

const ArticleGallery = () => {
  return (
    <>
    <SectionHeading>Article Gallery</SectionHeading>
    
    <SectionWrapper>
    <GalleryContainer>
      <LeftImages>
        <Image src={img2} alt="Left Image 1" />
        <Image src={img1} alt="Left Image 2" />
      </LeftImages>

      <CenterImage>
        <Image src={img5} alt="Center Image" />
      </CenterImage>

      <RightImages>
        <Image src={img4} alt="Right Image 1" />
        <Image src={img3} alt="Right Image 2" />
      </RightImages>
      </GalleryContainer>
      </SectionWrapper>
    
    </>
  );
};

export default ArticleGallery;
