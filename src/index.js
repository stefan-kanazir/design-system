import React from 'react';
import ReactDOM from 'react-dom';

import PrimaryButton from './components/Buttons';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <PrimaryButton>Learn more</PrimaryButton>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));