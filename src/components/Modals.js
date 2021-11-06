import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { Illustrations } from '../assets';
import { PrimaryButton } from './Buttons';

const ModalWrapper = styled.div`
    max-width: 70vw;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnformElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    padding: 10% 15%;
`;

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
    text-align: center;
`;

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    margin: 0 auto 1.5rem;
    text-align: center;
`;

export const SignUpModal = () => {
    return (
        <ModalWrapper>
            <img src={Illustrations.SignUp} alt="Sign up for an account" aria-hidden="true" />
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpText>Sign up today to get access!</SignUpText>
            <PrimaryButton>Sign up</PrimaryButton>
        </ModalWrapper>
    )
}