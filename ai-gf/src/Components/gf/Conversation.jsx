import React, { useEffect, useState } from 'react'
import styled from 'styled-components';


const StyledConversation = styled.section`
    width: 100%;
    height: 30vh;

    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 0;

    background: rgb(9,27,42);
    background: linear-gradient(180deg, rgba(9,27,42,0) 0%, rgba(9,27,42,0.45) 20%, rgba(9,27,42,0.65) 40%, rgba(9,27,42,0.95) 100%);

    /* box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75); */

    padding: 0 15%;


    & .character-info{
        margin-top: 50px;
        padding-bottom: 10px;
        border-bottom: 2px solid #767680;

        & span:first-child {      
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            margin-left: 5px;
            margin-right: 14px;
        }
        & span:last-child {
            color: #6AD2FC;
            font-size: 1.2rem;
            font-weight: bold;
        }
    }

    & .conversation {
        /* margin-top: 20px; */

        & p {
            color: white;
            font-size: 1.2rem;
            font-weight: bold;
            line-height: 1.5rem;
            padding: 0px 5px;
        }
    
    }

`; 
const Conversation = () => {

    const [name, setName] = useState('');
    const [bukatsu, setBukatsu] = useState('');

    const [index, setIndex] = useState(0);
    const [conversation, setConversation] = useState('');
    const [visibleConversation, setVisibleConversation] = useState('');

    useEffect(() => {
        setName('滝本 ひふみ');
        setBukatsu('Eagle Jump');

        setConversation('뭐.. 뭔가 용건이라도 있어?');
    }, []);

    useEffect(() => {
        if (index < conversation.length) {
            console.log('index: ', index)
            const timeoutId = setTimeout(() => {
                setVisibleConversation(visibleConversation + conversation.charAt(index));
                setIndex(index + 1);
            }, 100); // 50ms 간격으로 문자가 나타나게 설정
    
            return () => clearTimeout(timeoutId);
        }
      }, [index, conversation, visibleConversation]);

    return (
        <StyledConversation>
            <section className='character-info'>
                <span>{name}</span>
                <span>{bukatsu}</span>
            </section>

            <section className='conversation'>
                <p>{visibleConversation}</p>
            </section>
        </StyledConversation>
    )
};

export default Conversation;