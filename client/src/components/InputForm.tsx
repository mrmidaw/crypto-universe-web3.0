import React, { FC } from 'react';

interface IProps {
    placeholder: string;
    name: string;
    type: string;
    value?: number | string;
    handleChange: any
}

export const InputForm:FC<IProps> = ({ placeholder, name, type, value, handleChange }) => {
    return (
        <input
            placeholder={placeholder}
            type={type}
            step='0.0001'
            value={value}
            onChange={(e) => handleChange(e, name)}
            className='my-2 w-full rounded-sm p-2 outline-none gb-transparent text-white border-none text-sm white-glassmorphism'
        />
    );
};