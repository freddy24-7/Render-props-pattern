import React, { useState } from 'react';
import './Toggle.css';

const Toggle = ({ render }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the 'isOpen' state
    const toggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div className={`toggle-container ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={toggle}>Toggle</button>
            {/* Render content based on the 'isOpen' state */}
            {render(isOpen)}
        </div>
    );
};

export default Toggle;