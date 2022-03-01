import React, { useState, useEffect } from 'react'

export const TransactionContext = React.createContext()

let eth

if (typeof window !== 'undefined') {
  eth = window.ethereum
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask')
      const accounts = await metamask.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (err) {
      console.log(err)
      throw new Error('No ethereum object.')
    }
  }

  const checkIfWalletIsConnected = async (metemask = eth) => {
    try {
      if (!metemask) return alert('Please install metamask')

      const accounts = await metemask.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
        console.log('Wallet is already conneted!');
      }
    } catch (err) {
      console.log(err)
      throw new Error('No ethereum object.')
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
