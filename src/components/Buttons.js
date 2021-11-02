import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';

const Primary = "#0066CC";


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
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }
`;

export const SecondaryButton = styled(Button) `
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};

    &:hover {
        background-color: ${defaultTheme.secondaryColorHover};
        color: ${defaultTheme.primaryColor};
    }
`;

export const TertirayButton = styled(Button) `
    background: none;
    color: ${defaultTheme.primaryColor};
    // text-decoration: underline;

    &:hover {
        svg {
            transform: translateX(5px);
        }
    }

    svg {
        transition: all 0.2s;
        margin-left: 8px;
    }
`;


export default PrimaryButton;
