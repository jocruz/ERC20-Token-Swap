"use client";

import {
  ConnectButton,
  TokenName,
  TokenProvider,
  TokenIcon,
  useReadContract,
} from "thirdweb/react";
import { client, contract } from "./client"; // Import your client and contract setup
import { sepolia } from "thirdweb/chains"; // Use this if you need a specific chain

export default function Home() {
  // Fetch the total supply using useReadContract
  const { data: totalSupply, isLoading } = useReadContract({
    contract,
    method: "function totalSupply() view returns (uint256)", // Specify the method to call
    params: [], // No parameters for totalSupply
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex flex-col items-center justify-center container max-w-screen-lg mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">ERC-20 Token Dashboard</h1>

      {/* Wallet Connect Button */}
      <ConnectButton
        client={client}
        appMetadata={{
          name: "Example App",
          url: "https://example.com",
        }}
      />

      {/* Token Details */}
      <div className="mt-8">
        <TokenProvider
          address="0x70f9A79E56Ee180f20c62dd9246aE85519A5972d" // Replace with your token address
          client={client}
          chain={sepolia} // Optional, specify the chain
        >
          <h2 className="text-2xl font-semibold">Token Details:</h2>
          {/* Display the token name */}
          <p>
            <strong>Name:</strong> <TokenName nameResolver="$JEEZY" />
          </p>
          <TokenIcon className="w-20 h-20" />

          {/* Display Total Supply */}
          <p className="mt-4">
            <strong>Total Supply:</strong>{" "}
            {isLoading ? "Loading..." : totalSupply?.toString() || "Currently Unavailable"}
          </p>
        </TokenProvider>
      </div>
    </main>
  );
}
