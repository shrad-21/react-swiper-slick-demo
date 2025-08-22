import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;
  margin: 20px auto;
  /* width: 90%; */
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (min-width: 768px) {
    max-width: 500px;
    padding: 15px;
    margin: 50px auto;
    
  }

  @media (min-width: 1024px) {
    max-width: 650px;
    padding: 18px;
  }
`;

export const ImageBox = styled.div`
  margin: 20px auto;
  width: 50%;
  border-radius: 6px;
  /* overflow: hidden; */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  /* width: 40%; */
  padding: 10px;

  @media(min-width:768px){
    margin: 20px auto;
  width: 90%;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  object-fit: cover;
  /* border: 1px solid black; */
`;

export const ArticleTitle = styled.h1`
width: 90%;
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin: 8px 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ArticleDescription = styled.p`
  font-size: 14px;
  color: #444;
  line-height: 1.4;
  text-align: left;
  width: 90%;
  /* max-width: 100%; */

  @media (min-width: 768px) {
    font-size: 16px;
    max-width: 90%;
  }
`;

export const ShareContainer= styled.div`
    margin:10px;
    display: flex;
    gap: 10px;
`