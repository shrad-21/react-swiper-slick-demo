import styled from "styled-components";


export const GalleryContainer = styled.div`
  /* width: 90%; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 20px; */
  /* padding: 20px; */

  @media (min-width: 768px) {
    /* width: 90%; */
    flex-direction: row;
    justify-content: space-between;
    /* margin-bottom: 5%; */
  }
`;

export const LeftImages = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    display: flex;
  flex-direction: column;
  gap: 20px;
  /* width: 500px; */
  width:28.5%;
  }
`;

export const CenterImage = styled.div`
   width: 90%;

  @media (min-width: 768px) {
    width: 40%;
  display: flex;
  justify-content: center; 
  }
`;

export const RightImages = styled.div`
 width: 90%;
 
  @media(min-width:768px){
    display: flex;
  flex-direction: column;
  width: 28.5%;
  gap: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;

  @media(min-width:768px){
  margin-bottom: 0;
  }
`;
