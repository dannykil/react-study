import React from "react";
import { useParams } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "길종민",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전소설 홍길동전의 주인공",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];

  console.log(data);

  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
