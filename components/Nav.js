"use server";
import React from "react";
import { client } from "../app/client";
import { ConnectButton } from "thirdweb/react";

const Nav = () => {
  return (
    <div className="w-full h-24 bg-blue-800 flex justify-between item-center">
      <h1 className="text-3xl text-white p-6">Voting Contract</h1>
      <div>
        <ConnectButton
          connectButton={{
            label: "Connect your wallet",
            className: "my-custom-class",
            style: {
              borderRadius: "10px",
              marginTop: "20px",
            },
          }}
          client={client}
        />
      </div>
    </div>
  );
};

export default Nav;
