import React from 'react';

const Footer = () => {
    var dateobj = new Date();
    var dateObject = dateobj.getFullYear();
    return (
        <div>
            <p className='text-center'><small>copyright &copy; {dateObject} </small></p>
        </div>
    );
};

export default Footer;