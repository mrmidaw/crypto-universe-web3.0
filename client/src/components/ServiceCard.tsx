import React, { FC } from 'react';
// import { IconType } from 'react-icons';

export interface IServiceCard {
    color: string;
    title: string;
    icon: any; // or IconType
    subTitle: string;
}

export const ServiceCard: FC<IServiceCard> = ({ color, title, icon, subTitle }) => {
    return (
        <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>

            <div className='ml-5 flex flex-col flex-1'>
                <h1 className='mt-2 text-white text-lg'>{title}</h1>
                <p className='mt-2 text-white text-sm md:w-9/12'>{subTitle}</p>
            </div>
        </div>
    );
};