// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   descrption: '내용',
//   url: 'https://www.google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({ category }) => {
  //   const [articles, setArticles] = useState(null);
  //   const [loading, setLoading] = useState(false);
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1eed31c3e12844b79e7316a136041d43`,
    );
  }, [category]);
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러발생!</NewsListBlock>;
  }

  const { articles } = response.data;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const query = category === 'all' ? '' : `&category=${category}`;
  //         const response = await axios.get(
  //           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1eed31c3e12844b79e7316a136041d43`,
  //         );
  //         setArticles(response.data.articles);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, [category]);

  //   if (loading) {
  //     return <NewsListBlock>대기중...</NewsListBlock>;
  //   }
  //   if (!articles) {
  //     return null;
  //   }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
