"use client"; 

import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { WagmiProvider } from 'wagmi'
import { config, projectId } from './config'
import { createWeb3Modal } from '@web3modal/wagmi/react'

const queryClient = new QueryClient() 

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

function Wrapper({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        {children}
      </QueryClientProvider> 
    </WagmiProvider>
  )
}

export default Wrapper;