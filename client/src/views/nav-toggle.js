import Snabbdom from 'snabbdom-pragma'
import { nativeAssetId } from '../const'
import { updateQuery } from '../util'

const staticRoot = process.env.STATIC_ROOT || ''
const hasCam = process.browser && navigator.mediaDevices && navigator.mediaDevices.getUserMedia
const otherTheme = { dark: 'light', light: 'dark' }

export default (t, theme, page) =>

<div className="toggle-container">
  <div className="burger-icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div className="toggle-menu">
    <div className="toggle-menu-header">
      { process.browser ? <div className="switch-theme-icon toggle-theme"></div>
        : <a href={page.pathname.substr(1) + updateQuery(page.query, { theme: otherTheme[theme] })} className="switch-theme-icon"></a>
      }
    </div>
    <div className="section2">
      <div className="link-list">
        <h4 className="menu-title">Explorers</h4>
        <ul>
          <li><a href="https://btcscan.org/" rel="external"><img src={`${staticRoot}img/icons/Bitcoin-menu-logo.svg`} alt="BTC" />BTC Explorer</a></li>
          <li><a href="https://ethscan.org/" rel="external"><img src={`${staticRoot}img/icons/eth-icon.svg`} alt="ETH" />ETH Explorer</a></li>
          <li><a href="https://xmrscan.org/" rel="external"><img src={`${staticRoot}img/icons/xmr-icon.svg`} alt="XMR" />XMR Explorer</a></li>
          <li><a href="https://moneroexplorer.org/#/" rel="external"><img src={`${staticRoot}img/icons/monero-icon.svg`} alt="Monero" />Monero Explorer</a></li>
          <li><a href="https://btcmempool.org/" rel="external"><img src={`${staticRoot}img/icons/BTCMempool-menu-logo.svg`} alt="BTC Mempool" />BTC Mempool</a></li>
          <li><a href="https://btcfee.org/" rel="external"><img src={`${staticRoot}img/icons/btc-fee-icon.svg`} alt="BTC Fee" />BTC Fee</a></li>
          <li><a href="https://btcfees.org/" rel="external"><img src={`${staticRoot}img/icons/btc-fees-icon-action.svg`} alt="BTC Fees" />BTC Fees</a></li>
        </ul>
      </div>
      <div className="link-list">
        <h4 className="menu-title">Developer Tools</h4>
        <ul>
          <li><a href="https://github.com/nobd/btcscan-org/blob/master/API.md" target="_blank">API</a></li>
          <li><a href="tx/push">Broadcast Transactions</a></li>
          <li> { hasCam ? <a href="scan-qr">Scan QR</a> : ""}</li>
          <li> { process.env.IS_ELEMENTS ? <a href={`asset/${nativeAssetId}`}>Pegs</a> : ""}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
