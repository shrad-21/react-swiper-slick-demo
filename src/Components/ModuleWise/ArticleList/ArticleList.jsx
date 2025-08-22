import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import { fetchArticles } from "../../../utils/Service/Generic-api";
import { ArticleListContainer, SliderWrapper, ScrollableSlider } from "./ArticleListStyles";
import { SectionHeading, SectionWrapper } from "../../StyledComponents/CommonStyles";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        setError("Failed to load products.");
      }
    };

    getArticles();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 900, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
      <SectionWrapper>
        <SectionHeading>Trending Articles</SectionHeading>
        <ArticleListContainer>
          <SliderWrapper>
            <Slider {...settings}>
              {articles.slice(14, 21).map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </Slider>
          </SliderWrapper>
        </ArticleListContainer>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading>CSS Scroll Slider</SectionHeading>
        <ArticleListContainer>
          <ScrollableSlider>
            {articles.slice(14, 21).map((article, index) => (
              <div key={index} className="scroll-card">
                <ArticleCard borderNone={+false} key={index} article={article} />
              </div>))}
          </ScrollableSlider>
        </ArticleListContainer>
      </SectionWrapper>
      </>
      );
};

      export default ArticleList;
