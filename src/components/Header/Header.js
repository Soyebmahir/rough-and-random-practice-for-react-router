import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
                <CustomLink to='/' >Home</CustomLink>
                <CustomLink to='/about' >About</CustomLink>
                <CustomLink to='/Friends'>Friends</CustomLink>
                
            </nav>
        </div>
    );
};

export default Header;