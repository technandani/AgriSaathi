import React from "react";
import Navbar from "../components/Navbar";
import Suggiession from "../components/post/Suggiession";
import styled from "styled-components";
import FarmersPosts from "../components/post/FarmersPosts";

const MainWrapper = styled.div``;
const LeftWrapper = styled.div``;
const RightWrapper = styled.div``;

const Posts = () => {
  return (
    <>
      <Navbar />
      <MainWrapper className="flex">
        <LeftWrapper className="w-8/12">
          <FarmersPosts />
        </LeftWrapper>
        <RightWrapper className="w-1/3">
          <Suggiession/>
        </RightWrapper>
      </MainWrapper>
    </>
  );
};

export default Posts;
