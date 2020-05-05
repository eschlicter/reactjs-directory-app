import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <div>
        <input className="search-box" onChange={handleChange} type="search" placeholder={placeholder}/>
    </div>
);