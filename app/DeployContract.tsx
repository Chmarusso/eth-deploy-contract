"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { getWalletClient } from '@wagmi/core'
import { config } from './config'
import erc20 from '../public/erc20.json'

function DeployContract() {
  const [deployed, setDeployed] = useState("");
  const account = useAccount();

  const handleDeploy = async () => {
    const client = await getWalletClient(config)
    
    const tx = await client.deployContract({
      account: account?.address,
      abi: erc20.abi,
      bytecode: erc20.bytecode,
      args: [account?.address]
    })
    setDeployed(tx)
  }

  if(!account?.address) {
    return (
      <w3m-button />
    )
  }

  return (
    <div>
      Connected: {account.address.slice(0, 6)}...{account.address.slice(-4)}
      <p>
        <button className="mt-5 text-center" onClick={handleDeploy}>
          Deploy
        </button>
        {deployed && (<p>Deployed: {deployed}</p>)}
      </p>
    </div>
  )
}

export default DeployContract;