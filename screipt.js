<script src="https://cdn.jsdelivr.net/npm/@solana/web3.js@1.32.0/lib/index.iife.js"></script>

<script>
// Check if Phantom is installed
const checkIfPhantomInstalled = () => {
    return window.solana && window.solana.isPhantom;
};

let userWalletAddress = null;

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
            console.error(err);
            alert("Wallet connection failed.");
        }
    } else {
        alert("Please install Phantom wallet to proceed.");
    }
};

// Function to send a SOL donation (this example sends 0.1 SOL)
const sendDonation = async () => {
    if (!userWalletAddress) {
        alert("Please connect your wallet first.");
        return;
    }

    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
    const senderPublicKey = new solanaWeb3.PublicKey(userWalletAddress);
    const recipientPublicKey = new solanaWeb3.PublicKey('Recipient_Solana_Address'); // Replace with actual address
    const transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
            fromPubkey: senderPublicKey,
            toPubkey: recipientPublicKey,
            lamports: solanaWeb3.LAMPORTS_PER_SOL * 0.1, // 0.1 SOL
        })
    );

    try {
        const { signature } = await window.solana.signAndSendTransaction(transaction);
        await connection.confirmTransaction(signature);
        alert("Donation sent successfully!");
    } catch (err) {
        console.error(err);
        alert("Failed to send donation.");
    }
};

// Event Listeners
document.getElementById("connect-wallet-btn").addEventListener("click", connectWallet);
document.getElementById("send-donation-btn").addEventListener("click", sendDonation);
</script>
// Handle Scroll Effect on Banner
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bannerImage = document.querySelector('.banner-image');

    if (scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
