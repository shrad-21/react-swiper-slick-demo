import styled from "styled-components";

export const ArticleListContainer = styled.div`
  /* width: 90%;
  margin: 0 auto;
  padding: 20px; */
  /* max-width: 1200px; */
  justify-content: center;
  margin-bottom: 5%;
  /* .slick-list {
    overflow: hidden;
  } */
`;
export const SliderWrapper = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  `
  export const ScrollableSlider = styled.div`
  display: flex;
  /* gap: 15px; */
  overflow-x: auto;
  /* overflow-y: hidden;  */
  scroll-behavior: smooth;
  /* padding: 10px; */
  /* Hide scrollbar */
  margin-bottom: 40px;
  &::-webkit-scrollbar {
    display: none;
  }

  .scroll-card {
    background: #fff;
    height: 400px;
    border-radius: 10px;
    scroll-snap-align: start;
    flex: 0 0 100%; /* Default for mobile: 1 card per row */

    @media (min-width: 600px) {
      flex: 0 0 50%; /* Tablet: 2 cards per row */
    }
    @media (min-width: 900px) {
      flex: 0 0 33.33%; /* Normal desktop: 3 cards per row */
    }
    @media (min-width: 1200px) {
      flex: 0 0 25%; /* Large desktop: 4 cards per row */
    }
  }
`;


