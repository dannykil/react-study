// import React, { useCallback, useState } from 'react';
import React from 'react';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
// import Categories from './components/Categories';
// import NewsList from './components/NewsList';
import NewsPage from './components/NewsPage';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Routes>
      {/* v5 */}
      {/* <Route path="/:category?" component={NewsPage} /> */}
      {/* v6 */}
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
  // (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );
};

export default App;
