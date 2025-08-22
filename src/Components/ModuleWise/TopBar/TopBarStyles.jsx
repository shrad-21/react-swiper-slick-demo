// import styled from "styled-components"

// export const Top=styled.div`
//   background-color: #f8f9fa;
//   width: 100%;
// `
// export const HeaderBar = styled.div`
//   display: none;

//   @media (min-width:768px){
//     display: flex;
//   justify-content: space-between;
//   align-items: center;
//   /* padding: 10px 40px; */
//   width: 90%;
//   margin:  0 auto;
//   /* background-color: blue; */
//   }
// `;

// export const LeftSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// export const ContactItem = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 8px;
// `;

// export const OfferText = styled.p`
//   font-size: 18px;
//   font-weight:bold;
//   color: #9E3040;
// `;

// export const MapWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;
// export const Text = styled.div`
// `

// export const Span = styled.span`
//     font-size: 14px;
// `

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  /* display: none; */

  @media (min-width: 1024px) {
    background-color: #f8f9fa;
    width: 100%;
    padding: 10px 0;
  }
`;

export const HeaderBar = styled.div`
    /* flex-direction: row;
    gap: 8px;
    text-align: center; */
    display: none;

  @media (min-width: 1024px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const OfferText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #9e3040;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 14px;
  color: #333;
`;
