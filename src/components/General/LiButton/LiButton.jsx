import React from 'react';
import './LiButton.css';

const LiButton = ({ pageNumber, currentPage, onPageChange }) => {
    return (
        <li className={`li-pagination-container`}>
            <button className={`button-pagination ${pageNumber === currentPage ? `active` : ``}`} onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
            {/* 
            'button-pagination'
            */}
        </li>
    );
};

export default LiButton;