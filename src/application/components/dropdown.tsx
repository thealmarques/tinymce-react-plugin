import * as React from 'react';
import './dropdown.scss';

export const Dropdown = () => {
    return (
        <ul className='sacode'>
            <li onClick={() => console.log('clicked!')}>Ai</li>
            <li>ui</li>
        </ul>
    );
};
