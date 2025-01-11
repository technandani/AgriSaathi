import React from "react";
// import Navbar from "../components/Navbar";
import Navbar from "../components/common/Navbar";
// import Suggiession from "../components/post/Suggiession";
import styled from "styled-components";
import FarmersPosts from "../components/post/FarmersPosts";

const MainWrapper = styled.div``;
const LeftWrapper = styled.div``;
const RightWrapper = styled.div``;

const Posts = () => {
  return (
    <>
      <div className="w-full h-full overflow-y-scroll">
        <Navbar />
        <MainWrapper className="grid lg:grid-cols-6 mt-4">
          <LeftWrapper className="lg:col-span-4 bg-[#fff] dark:bg-[#1a1a1a] rounded-lg p-4">
          <h2 className="text-3xl font-semibold">Explore posts</h2>
            <FarmersPosts />
          </LeftWrapper>
          <RightWrapper className="lg:grid lg:col-span-2 sm:hidden bg-green-200">
            {/* <Suggiession/> */}
          </RightWrapper>
        </MainWrapper>
      </div>
    </>
  );
};

export default Posts;
