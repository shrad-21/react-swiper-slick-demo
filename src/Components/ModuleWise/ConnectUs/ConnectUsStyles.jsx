import styled from 'styled-components'

export const GetInTouchContainer= styled.div`
text-align: center;
padding: 10px;

`

export const Description = styled.p`
font-size: 17px;
margin-bottom: 20px;

span{
    display: block;
}
`

export const ConnectField = styled.div`
margin-bottom: 10%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

@media(min-width: 768px){
    flex-direction: row;
    gap: 0;
  }
`

export const Input = styled.input`
  padding: 10px;
  width: 90%;
  border: 1px solid #ccc; 
  border-radius: 5px;
  font-size: 1rem;
  outline: none; 
  
  @media(min-width: 768px){
    width: 40%;
  }
  &:hover {
    border: 1px solid black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.9);

  }

  &:focus {
    border: 1px solid black; 
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.9);
  }
`;


