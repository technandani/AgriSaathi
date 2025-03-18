import React from "react";
// import Navbar from "../components/Navbar";
import Navbar from "../../components/common/Navbar";
// import Suggiession from "../components/post/Suggiession";
import styled from "styled-components";
import FarmersPosts from "./postSection/FarmersPosts";
import PostHeader from "./postSection/PostHeader";
import Farmers from "../farmer/farmerSection/Farmers";

const MainWrapper = styled.div``;
const LeftWrapper = styled.div``;
const RightWrapper = styled.div``;

const Posts = () => {
  return (
    <>
      <div className="w-full h-full overflow-y-scroll">
        <Navbar />
        <MainWrapper className="grid lg:grid-cols-6 mt-4 gap-4 fixed ">
          <LeftWrapper className="lg:col-span-4 sm:col-span-6 bg-[#fff] dark:bg-[#1a1a1a] rounded-lg p-4">
            <PostHeader />
            <FarmersPosts />
          </LeftWrapper>
          <RightWrapper className="lg:grid lg:col-span-2 sm:hidden bg-[#fff] dark:bg-[#1a1a1a] rounded-lg">
            {/* <Suggiession/> */}
            <Farmers/>
          </RightWrapper>
        </MainWrapper>
      </div>
    </>
  );
};

export default Posts;
