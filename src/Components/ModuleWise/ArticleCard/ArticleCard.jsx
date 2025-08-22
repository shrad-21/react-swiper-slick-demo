import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, ArticleImage, ArticleTitle, ArticleDescription,ImageBox } from "./ArticleCardStyles";
import { SectionWrapper } from "../../StyledComponents/CommonStyles";
const ArticleCard = ({ article , borderNone}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/article/${article.id}`);
    };

    return (
        <>
        <SectionWrapper>
            <CardContainer borderNone={borderNone} onClick={handleClick}>
                <ImageBox>
                <ArticleImage src={article.image} alt={article.title} />
                </ImageBox>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
            </CardContainer>
            </SectionWrapper>
        </>
    );
};

export default ArticleCard;
