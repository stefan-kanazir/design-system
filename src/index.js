import React from 'react';
import ReactDOM from 'react-dom';

import PrimaryButton, { SecondaryButton, TertirayButton } from './components/Buttons';
import { GlobalStyle } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <PrimaryButton modifiers={["small", "warning"]}>Learn more</PrimaryButton>
            <SecondaryButton modifiers={["error", "large", "primaryButtonError"]}>Learn more</SecondaryButton>
            <TertirayButton modifiers={["small", "success", "primaryButtonSuccess"]}>Learn more<FontAwesomeIcon icon={faLongArrowAltRight} /></TertirayButton>
            <GlobalStyle />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));