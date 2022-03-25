import React, { FC } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../images/logo.png';
import ethLogo from '../images/eth-logo.svg';

interface IProps {
    title: string;
    classProps?: string;
}

const NavbarItem: FC<IProps> = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
};

export const Navbar: FC = () => {
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={ethLogo} alt='logo' className='w-32 cursor-pointer' />
                {/* <p className='text-lg text-white ' >Crypto Universe</p> */}
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
        </nav >
    );
};