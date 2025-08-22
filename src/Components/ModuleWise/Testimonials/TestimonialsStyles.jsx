import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const TestimonialWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: auto;  */
  /* padding: 50px 0;  */
`;

export const TestimonialContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: auto; 
  /* width: 90%; */
  /* max-width: 1200px; */
  /* margin: auto; */
  overflow: visible;
  /* margin-bottom: 7%; */
`;

export const TestimonialSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  position: relative;

  /* Default tilt for all slides */
  transform: rotate(-8deg) scale(0.9);
  opacity: 0.8;

  &.swiper-slide-active {
    margin: 30px;
    transform: rotate(0deg) scale(1.1);
    z-index: 2;
    opacity: 1;
  }

  &.swiper-slide-prev {
    opacity: 0.6;
    margin-top: 90px;
    transform: rotate(-8deg) scale(0.95);
  }

  &.swiper-slide-next {
    opacity: 0.6;
    margin-top: 90px;
    transform: rotate(8deg) scale(0.95);
  }
`;

export const TestimonialCard = styled.div`
  padding: 36px 32px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: center;
  background: #F2F6FF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  margin: 0 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 10px;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
`;

export const NameRoleContainer = styled.div`
  text-align: left;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const Role = styled.div`
  font-size: 14px;
  color: #777;
`;

export const DescriptionContainer = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #3e3e3e;
  text-align: left;
  font-weight: 500;
  line-height: 24px;
  display: block;

  .subDesc {
    color: #716e6e;
    display: block;
  }
`;

