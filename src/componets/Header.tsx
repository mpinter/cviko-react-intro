import React from 'react';
import './Header.css';

type HeaderProps = {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <h1
                className="Header"
                style={{ backgroundColor: title === 'Hello' ? 'black' : 'white' }}
            >
                {title}
            </h1>
        </>
    );
};

export default Header;
