import React from 'react';
import Cursor from '../Cursor';

const Layout: React.FC<any> = ({ children }) => {
    return (
        <>
            <Cursor />
            {children}
        </>
    );
};

export default Layout;
