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
            <PrimaryButton disabled>Learn more</PrimaryButton>
            <SecondaryButton disabled>Learn more</SecondaryButton>
            <TertirayButton disabled>Learn more<FontAwesomeIcon icon={faLongArrowAltRight} /></TertirayButton>
            <GlobalStyle />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));