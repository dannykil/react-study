import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
// import Profile from "./Profile";
import Profiles from "./Profiles";

const App = () => {
  const { pathname } = useLocation(); // 추가(v6)
  function printMe() {
    console.log("Hello World!!!");
  }
  setTimeout(printMe, 3000);
  console.log("I am waiting...");
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
        {/* <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li> */}
      </ul>
      <hr />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/info" Component={About} />
        <Route path="/profiles/*" Component={Profiles} />
        <Route path="/history" Component={HistorySample} />
        <Route
          path="/*"
          element={<h1>이 페이지는 존재하지 않습니다 - {pathname}</h1>}
        />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨(v5)
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
        {/* <Route path="/profile/:username" Component={Profile} /> */}
        {/* <Route exact path={["/about", "/info"]} element={<About />} /> */}
        {/* <Route exact path={["/about", "/info"]} Component={About} /> */}
      </Routes>
    </div>
  );
};

export default App;
