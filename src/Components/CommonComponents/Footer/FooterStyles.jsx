import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: #F3F5F6;
  color: black;
  padding: 20px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  width: 90%;
  margin: 0 auto;
  text-align: left; 

  @media (min-width: 768px) { 
    flex-direction: row; 
    justify-content: space-between;
    text-align: left;
  }
`

export const Quicklinks = styled.div`
  width: 100%; 
  margin-bottom: 20px;

  

  ul {
    list-style: none;
    padding: 0;
    margin: 10px;    

    li {
      margin-bottom: 8px;
      font-size: 14px;
      color: #333;
      cursor: pointer;
    }

    li:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) { 
    width: 20%;
    margin-bottom: 0;
  }
`

export const ContactUs = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
  

  span {
    display: block;
  }

  p {
    font-size: 14px;
    color: #333;
  }

  @media (min-width: 768px) { 
    width: 30%;
    margin-bottom: 0;
    
    
  }
`

export const ContactItem = styled.div`
  display: flex;
  /* align-items: flex-start; */
  gap: 10px;
  margin-bottom: 10px;
  justify-content: left; 

  p {
    margin: 0;
  }

  @media (min-width: 768px) { 
    justify-content: flex-start; 
    margin-top: 8px;
    margin: 8px;
    margin-bottom: 8px;
  }
`

export const BankCardsContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  h4 {
    font-size: 17px;
  }

  p {
    font-size: 14px;
    color: #333;
    margin: 10px;
  }

  @media (min-width: 768px) { 
    width: 30%;
    margin-bottom: 0;
  }
`

export const PaymentIcons = styled.div`
  display: flex;
  justify-content: left; 
  flex-wrap: wrap;
  gap: 15px;
  margin: 10px auto;

  @media (min-width: 768px) { 
    justify-content: flex-start; 

  }
`
export const FooterSectionTitle= styled.h4`
h4 {
    font-size: 17px;
    margin-bottom: 10px;
  }
`