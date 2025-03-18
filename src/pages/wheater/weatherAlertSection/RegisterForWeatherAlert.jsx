import React from 'react';
import Navbar from '../../../components/common/Navbar';
import AlertRegistration from './AlertRegistration';
import styled from 'styled-components';
import SafetyInstraction from './SafetyInstraction';

const Wrapper = styled.div``;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div``;

const RegisterForWeatherAlert = () => {
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <Navbar />
        <Wrapper className='grid lg:grid-cols-2 mt-4 gap-4'>
             <LeftWrapper className='bg-[#fff] dark:bg-[#1a1a1a] rounded-lg'>
                <AlertRegistration/>
             </LeftWrapper>
             <RightWrapper className='lg:grid sm:hidden bg-[#fff] dark:bg-[#1a1a1a] rounded-lg'>
                <SafetyInstraction/>
             </RightWrapper>
        </Wrapper>
    </div>
  )
}

export default RegisterForWeatherAlert
