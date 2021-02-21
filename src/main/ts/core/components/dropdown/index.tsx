import * as React from 'react';
import { render } from 'react-dom';
import './index.scss';

export const Dropdown = (element: Element) => {
    const Component = () => {
        return (
            <ul className='sacode'>
                <li onClick={() => console.log('clicked!')}>Ai</li>
                <li>ui</li>
            </ul>
        );
    }

    render(
        <Component></Component>,
        element.insertAdjacentElement('beforeend', document.createElement('div'))
    );
};