import React from 'react'
import Schemes from '../components/govermentScheme/Schemes'
import Navbar from '../components/common/Navbar'
import Styled from 'styled-components'

const MainWrapper = Styled.div``;
const TopWrapper = Styled.div``;
const BottomWrapper = Styled.div``;

const Goverment = () => {
  return (
    <>
    <Navbar/>
      <MainWrapper>
        <TopWrapper></TopWrapper>
        <BottomWrapper>
            <Schemes/>
        </BottomWrapper>
      </MainWrapper>
    </>
  )
}

export default Goverment
