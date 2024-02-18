// v6
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const WithRouterSample = () => {
  const params = useParams(); // url에 대한 정보
  const location = useLocation(); // 현재 페이지에 대한 정보
  const navigate = useNavigate();
  return (
    <div>
      <h4>params</h4>
      <textarea value={JSON.stringify(params, null, 2)} readOnly rows={7} />
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly rows={7} />
      <h4>navigate</h4>
      <button onClick={() => navigate(-1)}>홈으로</button>
    </div>
  );
};
export default WithRouterSample;

// v5
// import React from "react";

// const WithRouterSample = ({ location, match, history }) => {
//   return (
//     <div>
//       <h4>location</h4>
//       <textarea
//         value={JSON.stringify(location, null, 2)}
//         rows={7}
//         readOnly={true}
//       ></textarea>
//       <h4>match</h4>
//       <textarea
//         value={JSON.stringify(match, null, 2)}
//         rows={7}
//         readOnly={true}
//       ></textarea>
//       <button onClick={() => history.push("/")}>홈으로</button>
//     </div>
//   );
// };

// export default WithRouterSample;
