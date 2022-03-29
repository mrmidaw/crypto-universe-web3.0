import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utilities/constants';
import { toast } from 'react-toastify';


export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractAbi, signer);

    return transactionsContract;
};

// eslint-disable-next-line react/prop-types
export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    });

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

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
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }

    };

    const connectWallet = async () => {
        try {
            if (!ethereum) {
                return toast.error("Please install Metamask");
            }
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
            toast.success('Wow so easy!');
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    const sendTransaction = async () => {
        try {
            if (!ethereum) {
                return toast.error("Please install Metamask");
            }

            const { addressTo, amount, keyword, message } = formData;

            const transactionContract = getEthereumContract();
            const parseAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', // 21000 GWEI
                    value: parseAmount._hex
                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parseAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading ${transactionHash.hash}`);
            await transactionHash.wait();

            setIsLoading(false);
            console.log(`Success ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber());

        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    console.log('currentAccount>>>', currentAccount);

    return (
        <TransactionContext.Provider
            value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}
        >
            {children}
        </TransactionContext.Provider>
    );
};