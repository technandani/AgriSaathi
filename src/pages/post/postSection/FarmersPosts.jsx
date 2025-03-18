import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../../features/posts/postSlice";
import PostCard from "./PostCard";
import styled from "styled-components";
import PostCreators from "./PostCreators";

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

  if (loading ) {
    return (
      <>
        <div className="w-full bg-white p-4 rounded-lg shadow-md animate-pulse">
          {/* Skeleton Header */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-1/6"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3 mt-1"></div>
            </div>
          </div>

          {/* Skeleton Post Image */}
          <div className="w-full h-48 bg-gray-300 rounded-lg mt-4"></div>

          {/* Skeleton Post Title */}
          <div className="h-5 bg-gray-300 rounded w-2/6 mt-4"></div>

          {/* Skeleton Post Description */}
          <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>

          {/* Skeleton Actions */}
          <div className="flex space-x-4 mt-4">
            <div className="h-10 bg-gray-300 rounded w-10"></div>
            <div className="h-10 bg-gray-300 rounded w-10"></div>
            <div className="h-10 bg-gray-300 rounded w-10"></div>
          </div>
        </div>
      </>
    );
  }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div className="lg:max-h-[77vmin] sm:max-h-[80vmin]  overflow-y-scroll  w-full lg:m-4">
      <Posts className="flex flex-col gap-4 overflow-y-scroll justify-center p-4">
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
