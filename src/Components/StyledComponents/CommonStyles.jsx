import styled from 'styled-components'
import Colors from '../../assets/Colors'

export const SectionHeading=styled.h2`
    font-size: 38px;
    margin-bottom: 20px;
    text-align: center;
    color: ${Colors.headingColor};
`

export const Description= styled.p`
    font-size:16px;
    font-weight: 400;
    color:${Colors.DescriptionColor};
`

export const SectionWrapper=styled.div`
    width: 90%;
  margin: 0 auto;
  /* padding: 20px; */

  @media (min-width: 768px) {
    width: 90%;
    margin-bottom: 5%;
    margin:0 auto;
  }
`