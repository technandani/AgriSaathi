import React from "react";
import Navbar from "../components/Navbar";
import InfoCard from "../components/profile/InfoCard";
import TabSwitcher from "../components/profile/TabSwitcher";
import FarmerPost from "../components/profile/FarmerPost";
import styled from "styled-components";

const ProfileWrapper = styled.div``;

const Profile = () => {
  return (
    <>
      <Navbar />
      <ProfileWrapper className="min-h-screen flex flex-col">
        <InfoCard />
        <TabSwitcher />
        <FarmerPost />
      </ProfileWrapper>
    </>
  );
};

export default Profile;
