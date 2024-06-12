import React from 'react'
import styled from 'styled-components';

import Conversation from './Conversation';

import takimoto_hifumi from '../../Assets/images/takimoto_hifumi.png'

const StyledIndex = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${takimoto_hifumi});
    background-size: cover;
    background-repeat: no-repeat;
`

const Index = () => {
    return (
        <StyledIndex>
            <Conversation />
        </StyledIndex>
    )
}

export default Index;