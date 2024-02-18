import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
// import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          {/* <Link to="/profiles/velopert">velopert</Link> */}
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            to="/profiles/velopert"
          >
            velopert
          </NavLink>
        </li>
        <li>
          {/* <Link to="/profiles/gildong">gildong</Link> */}
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route
          path="/profiles"
          render={() => <div>사용자를 선택해주세요.</div>}
        />
        <Route path="/:username" Component={Profile} />
      </Routes>
      {/* <WithRouterSample /> */}
    </div>
  );
};

export default Profiles;
