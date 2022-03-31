import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className='error-container'>
            <h1>404</h1>
            <p>OOPS! NOTHING WAS FOUND</p>
            <p><small>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</small></p>
        </div>
    );
};

export default Error;