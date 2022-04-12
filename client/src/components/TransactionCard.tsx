import React, { FC } from 'react';
import { useFetch } from '../hooks/useFetch';

interface ITransaction {
    addressFrom: string;
    addressTo: string;
    amount: number;
    keyword: string;
    message: string;
    timestamp: Date;

}

interface IProps {
    transaction: ITransaction;
}

export const TransactionCard: FC<IProps> = ({ transaction }) => {
    const gifUrl = useFetch(transaction.keyword);

    // Short eth address
    const shortenAddress = (address: string) => {
        return `${address.slice(0, 5)}.........${address.slice(address.length - 4)}`;
    };

    return (
        <div className='bg-[#181918] m-4 flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px]
        flex-col p-3 rounded-md hover:shadow-2xl'>
            <div className='flex flex-col items-center w-full mt-3'>
                <div className='w-full mb-6 p-2'>
                    <a href={`https://ropsten.etherscan.io/address/${transaction.addressFrom}`} target="_blank" rel="noreferrer noopener">
                        <p className='text-white text-base'>
                            From: {shortenAddress(transaction.addressFrom)}
                        </p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${transaction.addressTo}`} target="_blank" rel="noreferrer noopener">
                        <p className='text-white text-base'>
                            To: {shortenAddress(transaction.addressTo)}
                        </p>
                    </a>
                    <p className='text-white text-base'>Amount: {transaction.amount} ETH</p>

                    {transaction.message && (
                        <>
                            <br />
                            <p className='text-white text-base'>
                                Message: {transaction.message}
                            </p>
                        </>
                    )}
                </div>

                <img
                    src={gifUrl}
                    alt='gif'
                    className='w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover'
                />
                <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-xl'>
                    <p className='text-[#37c7da] font-bold'>
                        {transaction.timestamp}
                    </p>
                </div>
            </div>
        </div >
    );
};
