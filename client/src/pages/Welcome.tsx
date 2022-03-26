import React, { FC } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from '../components/Loader';
import { InputForm } from '../components/InputForm';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

export const Welcome: FC = () => {

    const connectWallet = () => {
        return null;
    };


    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1 '>
                        Send Crypto <br /> across the world
                    </h1>
                    <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Crypto Universe.
                    </p>
                    <button
                        className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
                        type='button' onClick={connectWallet}
                    >
                        <p className='text-white text-base font-semibold'>
                            Connect Wallet
                        </p>
                    </button>

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliability
                        </div>

                        <div className={commonStyles}>
                            Security
                        </div>

                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Ethereum
                        </div>

                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Web 3.0
                        </div>

                        <div className={commonStyles}>
                            Low fees
                        </div>

                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
                    <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
                        <div className='flex justify-between flex-col w-full h-full'>
                            <div className='flex justify-between item-start'>
                                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                                    <SiEthereum fontSize={22} color='#fff'/>
                                </div>
                                <BsInfoCircle fontSize={18} color='#fff'/>
                            </div>
                            <div className=''>
                                <p className='text-white font-light text-sm'>
                                0xBD34debc......6990377Cf2
                                </p>
                                <p className='text-white font-semibold text-lg mt-1'>
                                Ethereum 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                        <InputForm placeholder='Address To' name='addressTo' type='text' value={'0xBD34debc796F5337cEfAF24e3021AF6990377Cf2'} handleChange={() => {}} />
                        <InputForm placeholder='Amount (ETH)' name='amount' type='number' handleChange={() => {}} />
                        <InputForm placeholder='Keyword (reward)' name='keyword' type='text' handleChange={() => {}} />
                        <InputForm placeholder='Enter Message' name='message' type='text' handleChange={() => {}} />

                        <div className='h-[1px] w-full bg-gray-400 my-2'/>

                        {/* {isLoading && (

                        ) : ()} */}
                    </div>
                </div>

            </div>
        </div>
    );
};