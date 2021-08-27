import React from 'react';
import { render } from 'react-dom';
import { Dropdown } from './components/dropdown';

export const setupReactApp = (element: Element) => {
    const App = () => (
        <Dropdown />
    );

    render(
        <App />,
        element.insertAdjacentElement('beforeend', document.createElement('div')),
    );
};
