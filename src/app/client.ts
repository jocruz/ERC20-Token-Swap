import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// Keep the existing clientId setup
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

// Initialize the Thirdweb client
export const client = createThirdwebClient({
  clientId: clientId,
});

// Define the chain (use the appropriate chain ID for your token's network)
const chain = defineChain(11155111); // Example: Sepolia testnet (use your chain ID)

// Connect to your ERC-20 contract
export const contract = getContract({
  client, // Use the client initialized with your clientId
  chain,
  address: "0x70f9A79E56Ee180f20c62dd9246aE85519A5972d", // Your token contract address
});
