import React from 'react'
import Navbar from '../components/Navbar'
import AlertRegistration from '../components/wheater/AlertRegistration'
import styled from 'styled-components'
import SafetyInstraction from '../components/wheater/SafetyInstraction';

const Wrapper = styled.div``;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div``;

const RegisterForWeatherAlert = () => {
  return (
    <>
      <Navbar />
      <>
        <Wrapper className='flex'>
             <LeftWrapper className="h-full w-1/2 p-6">
                <AlertRegistration/>
             </LeftWrapper>
             <RightWrapper className='w-1/2 p-6'>
                <SafetyInstraction/>
             </RightWrapper>
        </Wrapper>
      </>
    </>
  )
}

export default RegisterForWeatherAlert
