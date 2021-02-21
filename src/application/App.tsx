import React from 'react';
import { render } from 'react-dom';
import { Dropdown } from './components/dropdown';

export const setupReactApp = (element: Element) => {
    const App = () => (
        <Dropdown></Dropdown>
    );

    render(
        <App></App>,
        element.insertAdjacentElement('beforeend', document.createElement('div')),
    );
};
