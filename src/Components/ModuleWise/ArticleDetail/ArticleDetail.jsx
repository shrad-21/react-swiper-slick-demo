import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../../utils/Service/Generic-api";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from "react-share";
import {
  CardContainer,
  ArticleImage,
  ArticleTitle,
  ArticleDescription,
  ImageBox,
  ShareContainer
} from "./ArticleDetailStyles";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const data = await fetchArticles();
        const selectedArticle = data.find((item) => item.id === parseInt(id));

        if (selectedArticle) {
          setArticle(selectedArticle);
        } else {
          setError("Article not found.");
        }
      } catch (err) {
        setError("Failed to load article.");
      }
    };

    getArticle();
  }, [id]);


  const shareUrl = `http://localhost:5173/article/${id}`;


  return (
    <CardContainer>
    {article ? (
      <>
        <ImageBox>
          <ArticleImage src={article.image} alt={article.title} />
        </ImageBox>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleDescription>{article.description}</ArticleDescription>


        {/* social media share links */}
        <ShareContainer>
          <WhatsappShareButton url={shareUrl} title={article.title}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <FacebookShareButton url={shareUrl} quote={article.title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <TwitterShareButton url={shareUrl} title={article.title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <LinkedinShareButton url={shareUrl} title={article.title}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </ShareContainer>
      </>
    ) : (
      <p>Loading article...</p>
    )}
  </CardContainer>
  );
};

export default ArticleDetail;
