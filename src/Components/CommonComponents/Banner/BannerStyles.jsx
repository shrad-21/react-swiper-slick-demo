
import styled from "styled-components";
import bgImage from '../../../assets/Images/bgImage.png';


export const BannerImage = styled.div`
  /* width: 100%; */
  height: 700px; 
  background-image: url(${bgImage}); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
  text-align: left;
  padding-left:5%;
  margin-bottom: 5%;
`;

export const BannerHeading = styled.h1`
  font-size: 64px;
  color: white;
  margin-bottom: 10px;
  
  span{
    display: block;
  }
`;

export const BannerSubHeading = styled.p`
  font-size: 24px;
  color: white;
  /* margin-bottom: 20px; */
`;
