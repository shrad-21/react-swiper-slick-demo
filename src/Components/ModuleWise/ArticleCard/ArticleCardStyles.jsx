import styled from "styled-components";

export const CardContainer = styled.div`
  height: 400px;
  /* width: 300px; */
  padding: 10px;
  border: ${({borderNone})=> borderNone ? '' :'1px solid #ddd'} ;
  border-radius: 8px;
  box-shadow: ${({borderNone})=> borderNone ? "" : "2px 2px 10px rgba(0, 0, 0, 0.1)"};
  text-align: center;
`;
export const ImageBox = styled.div`
    /* border: 2px solid black; */
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 10px; */
`
export const ArticleImage = styled.img`
   /* width: auto;  */
  /* max-width: 400%;  */
  height: 200px; 
  display: block;
  margin: 0 auto; 
  object-fit: contain; 
`;

export const ArticleTitle = styled.h3`
  font-size: 18px;
  color:#9E3040;
  margin: 10px 0;
  text-align: left;
  line-height: 1.2;
`;

export const ArticleDescription = styled.p`
  font-size: 12px;
  color: #303030;
  text-align: left;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;


