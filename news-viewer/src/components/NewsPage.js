import React, { useCallback, useState } from 'react';
// import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  console.log(category);

  return (
    <>
      {/* <Categories />
      <NewsList category={category} /> */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
