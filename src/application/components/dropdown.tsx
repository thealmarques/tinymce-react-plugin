import * as React from 'react';
import './dropdown.scss';

export const Dropdown = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div className='dropdown'>
            <span onClick={() => setIsOpen(!isOpen)} className={'dropdown__base'}>Click me</span>
            { isOpen && (
                <ul className='dropdown__options'>
                    <li>Option 1</li>
                    <li>Option 2</li>
                </ul>
            )}
        </div>
    );
};
