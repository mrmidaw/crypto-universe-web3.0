import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utilities/constants';
import { toast } from 'react-toastify';


export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethereum.contract(contractAddress, contractAbi, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
};

// eslint-disable-next-line react/prop-types
export const TransactionProvider = ({ children }: any) => {
    const [currentAccount, setCurrentAccount] = useState('');

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) {
                return alert("Please install Metamask");
            }

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                // getAllTransactions();
            } else {
                console.log('No accounts found');
            }
        } catch (error: any) {
            toast.error(`Error: ${error.message}`);
        }

    };

    const connectWallet = async () => {
        try {
            if (!ethereum) {
                return alert("Please install Metamask");
            }
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
            toast.success('Wow so easy!');
        } catch (error: any) {
            toast.error(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    console.log('currentAccount>>>', currentAccount);

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </TransactionContext.Provider>
    );
};