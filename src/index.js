import React from 'react';
import ReactDOM from 'react-dom';

import PrimaryButton, { SecondaryButton, TertirayButton } from './components/Buttons';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <PrimaryButton>Learn more</PrimaryButton>
            <SecondaryButton>Learn more</SecondaryButton>
            <TertirayButton>Learn more</TertirayButton>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));