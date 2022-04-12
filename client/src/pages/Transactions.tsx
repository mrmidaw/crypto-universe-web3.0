import React, { FC, useContext } from 'react';

import { TransactionContext } from "../context/TransactionContext";
import { TransactionCard } from '../components/TransactionCard';

import dummyData from '../utilities/dummyData';

export const Transactions: FC = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 p-12 px-4'>
                {currentAccount ?
                    (
                        <h3 className='text-white text-3xl text-center my-2'>
                            Latest Transactions
                        </h3>
                    )
                    :
                    (
                        <h3 className='text-white text-3xl text-center my-2'>
                            Connect your account to see the latest transactions
                        </h3>
                    )
                }

                <div className='flex flex-wrap justify-center items-center mt-10'>
                    {[...dummyData, ...transactions].reverse().map((transaction, index: number) => (
                        <TransactionCard key={index} transaction={transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
};