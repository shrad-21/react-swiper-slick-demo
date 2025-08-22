import styled from "styled-components";

export const ServicesContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
/* gap: 20%; */
/* padding: 10px; */
/* width: 90%; */
/* margin: 0 auto; */
margin-bottom:5%;
 
@media(min-width: 568px){
flex-direction: row;
}
`

export const ServiceCard = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center; 
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
/* border: 1px solid black; */
 `
export const CardTitle = styled.h4`
font-size: 18px;
margin: 10px 0;
`;

export const CardDesc = styled.p`
font-size: 14px;
color: #666;
`;

export const Image=styled.div`
/* border: 1px solid black; */
padding: 10px;
color: white;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); 
`

export const CardImage = styled.div`
/* border: 1px solid black; */
display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: 10px; 
`
    

