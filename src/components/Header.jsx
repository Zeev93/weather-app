import React from 'react';

const Header = ({title}) => {
    return ( 
        <>
            <div className="header">
                <h1 className="text-center text-3xl font-bold pb-5 text-blue-600">{title}</h1>
            </div>
        </>
     );
}
 
export default Header;