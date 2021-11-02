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
`

const PrimaryButton = styled(Button) `
    //CSS
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: #fff;
`;

export const SecondaryButton = styled(Button) `
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};
`;

export const TertirayButton = styled(Button) `
    background: none;
    color: ${defaultTheme.primaryColor};
    text-decoration: underline;
`;


export default PrimaryButton;
