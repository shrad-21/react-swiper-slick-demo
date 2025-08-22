import styled from "styled-components";

export const StyledButton=styled.button`
  background-color: ${(props)=>props.bgColor};
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  /* margin-top: 15px; */
  cursor: pointer;
  font-weight: bold;
  display: inline-block;

  &:hover {
    background-color: ${(props) => props.hoverBgColor};
  }
`