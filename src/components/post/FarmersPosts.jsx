import React, { useContext } from "react";
import PostCard from "./PostCard";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  height: 89vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FarmersPosts = () => {
  const { postData, loading, error } = useContext(PostContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Posts>
      {postData.map((post) => (
        <PostCard
          key={post.post_id}
          profilePic={post.user_id?.profile_pic_url}
          creatorName={post.user_id?.name}
          creatorSubTitle={post.user_id?.occupation}
          title={post.title}
          description={post.description}
          media_type={post.media_type}
          media_urls={post.media_urls}
          view={post.likes_count}
          likes={post.likes_count}
          share={post.share_count}
          comments={post.comments_count}
        />
      ))}
    </Posts>
  );
};

export default FarmersPosts;