import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'
import { typeScale } from '../utils';
import { Illustrations } from '../assets';
import { PrimaryButton } from './Buttons';

const ModalWrapper = styled.div`
    max-width: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnformElementBackground};
    flex-direction: column;
    display: flex;
    border-radius: 2px;
    margin: 30px 0;
    padding: 50px;

    img {
        max-width: 250px;
        padding: 0 20px;
        margin: 0 auto 30px;
    }
`;

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
    font-family: "Roboto Mono", monospace;
    text-align: center;
`;

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    font-family: "Roboto Mono", monospace;
    max-width: 70%;
    margin: 0 auto 1.5rem;
    text-align: center;
`;

export const SignUpModal = ({showModal, setShowModal}) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateX(0)` : `translateX(-100%)`
    })

    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignUp} alt="Sign up for an account" aria-hidden="true" />
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Sign up today to get access!</SignUpText>
                <PrimaryButton>Sign up</PrimaryButton>
            </ModalWrapper>
        </animated.div>
    )
}