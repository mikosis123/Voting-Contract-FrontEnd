"use client";
import React, { useEffect } from "react";
import { client } from "../app/client"; // Ensure client is properly set up elsewhere
import {
  ConnectButton,
  useWalletBalance,
  useActiveAccount,
} from "thirdweb/react";

const chain = "ethereum"; // Define your chain, e.g., 'ethereum', 'polygon', etc.

const Nav = () => {
  const account = useActiveAccount(); // Get the connected account
  const { data, isLoading } = useWalletBalance({
    client,
    chain,
    address: account?.address,
  });

  return (
    <div className="w-full h-24 bg-blue-700 flex justify-between items-center">
      <h1 className="text-3xl text-white p-6">Voting Contract</h1>

      <div className="text-white my-auto p-6">
        {account?.address ? (
          <>
            <p>Wallet Address: {account.address}</p>
            {isLoading ? (
              <p>Loading balance...</p>
            ) : (
              <p>
                Wallet Balance: {data?.displayValue} {data?.symbol}
              </p>
            )}
          </>
        ) : (
          <p>Wallet Not connected</p>
        )}
      </div>

      <div className="my-auto p-6">
        <ConnectButton
          connectButton={{
            label: "Connect Wallet",
            className: "bg-white text-blue-700 px-4 py-2 rounded-md",
            style: {
              borderRadius: "10px",
              padding: "10px 20px",
            },
          }}
          client={client}
        />
      </div>
    </div>
  );
};

export default Nav;
