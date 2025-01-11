import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../features/posts/postSlice";
import PostCard from "./PostCard";
import styled from "styled-components";

const Posts = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FarmersPosts = () => {
  const dispatch = useDispatch();
  const { postData, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='lg:max-h-[77vmin] sm:max-h-[80vmin]  overflow-y-scroll  w-full lg:m-4'>
      <Posts className="flex flex-col gap-4 max-h-4/5 overflow-y-scroll justify-center p-4">
      
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
    </div>
  );
};

export default FarmersPosts;
