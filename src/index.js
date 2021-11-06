import React from 'react';
import ReactDOM from 'react-dom';

import { SignUpModal } from './components';
import { GlobalStyle } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <div>
            <SignUpModal />
            <GlobalStyle />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));