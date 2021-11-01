import styled from 'styled-components';

const Primary = "#0066CC";


const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 2px;
    min-width:1 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
`

const PrimaryButton = styled(Button) `
    //CSS
    background-color: ${Primary};
    border: none;
    color: #fff;
`;


export default PrimaryButton;
