import Snabbdom from 'snabbdom-pragma'
import layout from './layout'
import { blks } from './blocks'
import { transactions } from './transactions'

const isTouch = process.browser && ('ontouchstart' in window)

const homeLayout = (body, { t, activeTab, ...S }) => layout(
  <div>
    { body }
  </div>
  , { t, isTouch, activeTab, ...S })

export const dashBoardLedgerSeo = ({ t, blocks, dashboardState, loading, ...S }) => {
  const { dashblocks, dashTxs } = dashboardState || {}

  return (homeLayout(
      <div className="container dash-container">
        <div className="block-container block-container--info">
          <div className="blocks-table">
            <h1>Ledger Wallets for Bitcoin</h1>
            <p>Ledger wallets are among the most trusted hardware wallets for securing Bitcoin. This page outlines how to set up and use Ledger devices with Bitcoin, discusses their security features, and compares them with other storage options for BTC users.</p>
          </div>
        </div>
        { blks( dashblocks, true, false, { t, ...S }) }
        <div className="block-container block-container--info block-container--info-accent">
          <div className="blocks-table">
            <h2>Introduction to Ledger Wallets</h2>
            <p>Ledger wallets are hardware wallets designed to provide secure offline storage—also known as cold storage—for Bitcoin and other cryptocurrencies. Developed by the French company Ledger, these devices store your private keys in a physical device, isolated from internet exposure, which significantly reduces the risk of hacks, malware, and phishing attacks. Ledger offers four main models: </p>
            <ul>
              <li>Nano S Plus, a budget-friendly option with essential features</li>
              <li>Nano X, which includes Bluetooth support for mobile use</li>
              <li>Ledger Stax, a premium wallet with a curved E Ink touchscreen and wireless charging</li>
              <li>Ledger Flex, a lightweight version of Ledger Stax with a smaller touchscreen and without wireless charging</li>
            </ul>
            <p>All the devices integrate with Ledger Live, a companion app that allows you to manage your Bitcoin holdings, check balances, and send or receive funds securely.</p>
          </div>
        </div>
        <div className="block-container block-container--info">
          <div className="blocks-table">
            <h2>Benefits of Using Ledger for Bitcoin</h2>
            <p>Ledger wallets are considered one of the most secure ways to store Bitcoin, offering a blend of accessibility and protection through offline key management. Their security lies in hardware-level encryption, secure element chips, and air-gapped architecture. Unlike hot wallets, your private keys never leave the device, making them immune to malware or phishing attacks. Ledger’s reputation is backed by rigorous security audits and widespread community trust.</p>
          </div>
        </div>
        {transactions( dashTxs, true, { t } )}
        <div className="block-container block-container--info block-container--info-accent">
          <div className="blocks-table">
            <h2>Setting Up Your Ledger with BTC</h2>
            <p>Setting up a Ledger wallet with Bitcoin is straightforward, even for beginners.</p>
            <ol>
              <li>Once you unbox the device, download the Ledger Live app and follow step-by-step instructions.</li>
              <li>Create a recovery seed—a 24-word phrase that acts as a backup to restore access in case of loss. </li>
              <li>Then, install the Bitcoin app on the device and connect it to Ledger Live. </li>
              <li>From there, you can receive BTC to your hardware address, monitor balances, and initiate secure transactions easily. </li>
            </ol>
            <p>Setup typically takes 15–20 minutes and requires no technical experience.</p>
          </div>
        </div>
        <div className="block-container block-container--info">
          <div className="blocks-table">
            <h2>Transferring Bitcoin with Ledger</h2>
            <p>Transferring Bitcoin with a Ledger wallet involves a few secure steps. </p>
            <ol>
              <li>To receive BTC, generate a receive address from the Ledger Live app and confirm it on your device.</li>
              <li>For sending, you'll input the recipient's address, set a fee, and verify the transaction details directly on your Ledger screen.</li>
              <li>Once confirmed, the transaction is signed by the device’s private key and broadcast to the Bitcoin network. </li>
            </ol>
            <p>This process ensures your keys never touch the internet—significantly reducing the risk of theft or tampering.</p>
          </div>
        </div>
        <div className="block-container block-container--info" style={{marginBottom: '40px'}}>
          <div className="blocks-table">
            <h2>Security Tips and Best Practices</h2>
            <p>To maximize your Bitcoin security with Ledger, adopt best practices. </p>
            <ul>
              <li>First, always back up your 24-word recovery seed in a safe, offline location—consider using fireproof recovery plates for added resilience. </li>
              <li>Never share your seed phrase, even with support agents. </li>
              <li>Use a strong PIN, keep your device firmware updated, and double-check recipient addresses for every transaction.</li>
              <li>Be wary of phishing websites mimicking Ledger's official domain. </li>
              <li>Consider enabling additional security features like passphrases or a second PIN for added peace of mind.</li>
            </ul>
          </div>
        </div>
        <div>
          <h3><b>Frequently Asked Questions</b></h3>

          <div className="question-section">
            <p><b>What happens if I lose my Ledger wallet?</b></p>
            <span>You can recover your funds using your recovery seed phrase on a new device.</span>
          </div>

          <div className="question-section">
            <p><b>Is Ledger compatible with all Bitcoin wallets?</b></p>
            <p>It works with many popular wallets, including Ledger Live and Electrum.</p>
          </div>

          <div className="question-section">
            <p><b>Can I store other cryptocurrencies on Ledger?</b></p>
            <p>Yes, Ledger supports thousands of cryptocurrencies, not just Bitcoin.</p>
          </div>

          <div className="question-section">
            <p><b>What are some alternatives to Ledger wallets?</b></p>
            <p>Popular alternatives include Trezor (Model One and Model T), Coldcard (for advanced Bitcoin users), and BitBox02. Each offers a different mix of security features, usability, and coin support, so it’s worth comparing based on your needs and experience level.</p>
          </div>
        </div>
      </div>
      , { ...S, t, activeTab: '' })
  )}
