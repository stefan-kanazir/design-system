import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

export const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.h5};
        padding: 16px 24px;
    `,

    // WARNING
    warning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};

        &:hover, &:focus {
            background-color: ${defaultTheme.status.warningColorHover};
            outline: 3px solid ${defaultTheme.status.warningColorHover};
        }

        &:active {
            background-color: ${defaultTheme.status.warningColorActive};
        }
    `,
    primaryButtonWarning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonWarning: () => `
        background: none;
        border: 2px solid ${defaultTheme.status.warningColor};
        color: ${defaultTheme.status.warningColor};

        &:hover, &:focus {
            color: ${defaultTheme.textColorInverted};
        }

        &:active {
            background-color: ${defaultTheme.status.warningColorActive};
        }
    `,
    tertiaryButtonWarning: () => `
        background: none;
        color: ${defaultTheme.status.warningColor};

        &:hover, &:focus {
            background: none;
            color: ${defaultTheme.status.warningColorActive}};
        }

        &:active {
            transform: scale(0.975);
        }
    `,

    // ERROR
    error: () => `
        background: none;
        color: ${defaultTheme.status.errorColor};

        &:hover, &:focus {
        background-color: ${defaultTheme.status.errorColorHover};
        outline: 3px solid ${defaultTheme.status.errorColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
        }

        &:active {
            background-color: ${defaultTheme.status.errorColorActive};
        }
    `,
    primaryButtonError: () => `
        background-color: ${defaultTheme.status.errorColor};
        color: ${defaultTheme.textColorInverted};
        border: 2px solid ${defaultTheme.status.errorColor};

        &:hover, &:focus {
            color: ${defaultTheme.textColorInverted};
        }
    `,
    secondaryButtonError: () => `
        border: 2px solid ${defaultTheme.status.errorColor};

        &:hover, &:focus {
            color: ${defaultTheme.textColorInverted};
        }
    `,
    tertiaryButtonError: () => `
        color: ${defaultTheme.status.errorColor};

        &:hover {

        }

        &:active, &:focus {
            color: ${defaultTheme.status.errorColorActive};
        }
    `,

    // SUCCESS
    success: () => `
        background: none;
        color: ${defaultTheme.status.successColor};

        &:hover, &:focus {
        background-color: ${defaultTheme.status.successColorHover};
        outline: 3px solid ${defaultTheme.status.successColorHover};
        }

        &:active {
            background-color: ${defaultTheme.status.successColorActive};
        }
    `,
    primaryButtonSuccess: () => `
        background-color: ${defaultTheme.status.successColor};
        color: ${defaultTheme.textColorInverted};

        &:hover, &:focus {
            color: ${defaultTheme.textColorInverted};
        }
    `,
    secondaryButtonSuccess: () => `
        border: 2px solid ${defaultTheme.status.successColor};

        &:hover, &:focus {
            color: ${defaultTheme.textColorInverted};
        }
    `,
    tertiaryButtonSuccess: () => `
        color: ${defaultTheme.status.successColor};

        &:active, &:focus {
            color: ${defaultTheme.status.successColorActive};
        }
    `,
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

export const PrimaryButton = styled(Button) `
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
    text-decoration: underline;

    svg {
        transition: all 0.2s;
        margin-left: 8px;
    }

    &:focus {
        color: ${defaultTheme.primaryActiveColor};
    }

    &:active {
        transform: scale(0.975);
    }

    &:disabled {
        background-color: none;
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
