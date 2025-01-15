// Function to connect the wallet
const connectWallet = async () => {
    if (checkIfPhantomInstalled()) {
        try {
            const response = await window.solana.connect();
            userWalletAddress = response.publicKey.toString();
            alert("Connected! Your wallet address is " + userWalletAddress);
            document.getElementById("donation-info").style.display = "block"; // Show donation button
            document.getElementById("connect-wallet-btn").style.display = "none"; // Hide connect button
        } catch (err) {
            if (err.code === 4001) {
                alert("User rejected the connection request.");
            } else {
                console.error("Wallet connection failed:", err);
            }
        }
    } else {
        alert("Please install Phantom wallet to proceed.");
    }
};

// Connect button event listener
document.getElementById("connect-wallet-btn").addEventListener("click", connectWallet);
