import React, {useContext} from "react";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";

const MainWrapper = styled.div`
  height: 89vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Suggiession = () => {
  const { postData } = useContext(PostContext);

   // Filter unique users by user_id._id
  const uniqueUsers = [];
  const seenUserIds = new Set();

  postData.forEach((post) => {
    if (!seenUserIds.has(post.user_id._id)) {
      seenUserIds.add(post.user_id._id);
      uniqueUsers.push(post.user_id);
    }
  });

  return (
    <>
      <MainWrapper className="bg-green-900 text-white rounded-lg shadow-lg max-w-md mx-auto p-6 m-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Explore more farmers
        </h2>
        <ul>
          {uniqueUsers.map((user)  => (
            <li key={user._id} className="flex items-center justify-between py-3 border-b border-green-800 last:border-none">
              <div className="flex items-center space-x-4">
                <img
                  src={user.profile_pic_url}
                  alt=""
                  className="w-10 h-10 rounded-full border-solid border object-cover"
                />
                <span className="text-lg font-medium">{user.name}</span>
              </div>

              <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-1 rounded">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </MainWrapper>
    </>
  );
};

export default Suggiession;
