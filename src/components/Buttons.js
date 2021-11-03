import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
    `
}

const Button = styled.button`
    padding: 12px 24px;
    box-sizing: border-box;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    border: none;
    min-width:1 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    transition: 0.2s linear;
`

const PrimaryButton = styled(Button) `
    //CSS
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: #fff;

    &:hover {
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.primaryActiveColor};
        border-color: ${defaultTheme.primaryActiveColor};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button) `
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};

    &:hover {
        background-color: ${defaultTheme.secondaryHoverColor};
        color: ${defaultTheme.primaryColor};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.secondaryActiveColor};
    }

    &:disabled {
        background: none;
        border-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertirayButton = styled(Button) `
    background: none;
    color: ${defaultTheme.primaryColor};
    // text-decoration: underline;

    svg {
        transition: all 0.2s;
        margin-left: 8px;
    }

    &:hover {
        svg {
            transform: translateX(5px);
        }
    }

    &:focus {
        transition: 0s;
        text-decoration: underline;
    }

    &:active {
        color: ${defaultTheme.primaryActiveColor};
    }

    &:disabled {
        background-color: none;
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

        ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;


export default PrimaryButton;
