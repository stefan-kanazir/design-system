import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { PrimaryButton, SecondaryButton, SignUpModal, TertirayButton } from './components';
import { GlobalStyle } from './utils';

// Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [showModal, setShowModal] = useState(true);

    return (
        <div>
            <div>
                <h2>Default</h2>
                <PrimaryButton>Primary Button</PrimaryButton>
                <SecondaryButton>Secondary Button</SecondaryButton>
                <TertirayButton>Tertiray Button</TertirayButton>
            </div>
            <div>
                <h2>Disabled</h2>
                <PrimaryButton disabled>Primary Button</PrimaryButton>
                <SecondaryButton disabled>Secondary Button</SecondaryButton>
                <TertirayButton disabled>Tertiray Button</TertirayButton>
            </div>
            {/* States */}
            <div>
                <h2>Success</h2>
                <PrimaryButton modifiers={["success", "primaryButtonSuccess"]}>Primary Button</PrimaryButton>
                <SecondaryButton modifiers={["success", "secondaryButtonSuccess"]}>Secondary Button</SecondaryButton>
                <TertirayButton modifiers="tertiaryButtonSuccess">Tertiray Button</TertirayButton>
            </div>
            <div>
                <h2>Warning</h2>
                <PrimaryButton modifiers="warning">Primary Button</PrimaryButton>
                <SecondaryButton modifiers={["warning", "secondaryButtonWarning"]}>Secondary Button</SecondaryButton>
                <TertirayButton modifiers="tertiaryButtonWarning">Tertiray Button</TertirayButton>
            </div>
            <div>
                <h2>Error</h2>
                <PrimaryButton modifiers={["error", "primaryButtonError"]}>Primary Button</PrimaryButton>
                <SecondaryButton modifiers={["error", "secondaryButtonError"]}>Secondary Button</SecondaryButton>
                <TertirayButton modifiers="tertiaryButtonError">Tertiray Button</TertirayButton>
            </div>
            {/* Modifiers */}
            <div>
                <h2>Small</h2>
                <PrimaryButton modifiers="small">Primary Button</PrimaryButton>
                <SecondaryButton modifiers="small">Secondary Button</SecondaryButton>
                <TertirayButton modifiers="small">Tertiray Button</TertirayButton>
            </div>
            <div>
                <h2>Large</h2>
                <PrimaryButton modifiers="large">Primary Button</PrimaryButton>
                <SecondaryButton modifiers="large">Secondary Button</SecondaryButton>
                <TertirayButton modifiers="large">Tertiray Button</TertirayButton>
            </div>
            {/* Modal Component */}
            <div>
                <h2>Modal</h2>
                <SecondaryButton onClick={() => setShowModal(!showModal)}>Toggle Modal</SecondaryButton>
                <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
            </div>

            <GlobalStyle />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));