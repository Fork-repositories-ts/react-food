import React from 'react';

export const ButtonPageChange = ({ children,onClick }) => {
    return (
        <button
            className="mx-1 rounded-[50%] border-2 w-[40px] h-[40px] flex justify-center items-center"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
