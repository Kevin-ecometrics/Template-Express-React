import React from 'react';
import logo from "../assets/logo.png"
const Navbar: React.FC = () => {
    return (
        <nav>
            <div className='absolute'>
                <img src={logo} alt="" className='w-48 h-32 p-8' />
            </div>
        </nav>
    );
};

export default Navbar;