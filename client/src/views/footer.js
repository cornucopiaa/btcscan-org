import Snabbdom from 'snabbdom-pragma'

const staticRoot = process.env.STATIC_ROOT || ''
const links = process.env.FOOTER_LINKS ? JSON.parse(process.env.FOOTER_LINKS) : { [staticRoot + 'img/github_blue.png']: 'https://github.com/blockstream/esplora' }


export default ({ t, page }) =>
  <footer className="footer">
    <div className="container">
      <div className="footer_container_content">
        <div className="footer_container_wrapper">
          <div className="container sub-navsub-nav-link">
            <a href="bitcoin-testnet">Testnet Tools & Wallets</a>
            <a href="pi-cycle-top">Pi Cycle Top Indicator</a>
            <a href="btc-transaction-speed">Transaction Speed</a>
            <a href="ledger-vs-bitcoin">Ledger Wallets</a>
            <a href="200-week-moving-average">200-Week Moving Average</a>
          </div>
          <div className="footer_container_right">
            <div className="footer_container_content_row_social-media_container">
              {Object.entries(links).map(([imgSrc, url]) =>
                <a className="footer_container_content_row_social-media_link" href={url} target="_blank">
                  <img className="footer_container_content_row_social-media_item" alt="" src={imgSrc} />
                </a>
              )}
            </div>
            <div className="language">
              <form method="get">
                {!process.browser && Object.entries(page.query).map(([k, v]) =>
                  k != 'lang' && <input type="hidden" name={k} value={v} />
                )}
                <select className="language-selector" name="lang">
                  {Object.entries(t.langs).map(([lang_id, lang_t]) =>
                    <option value={lang_id} attrs={lang_id == t.lang_id ? { selected: true } : {}}>{lang_t`lang_name`}</option>
                  )}
                </select>
                {!process.browser && <input type="submit" className="language-submit" value={t`Go`} />}
              </form>
            </div>
          </div>
        </div>


        <div className="footer_container_content_copyright">
          <div>
            {process.env.TERMS && <span><a href={process.env.TERMS} target="_blank">Terms &amp; </a></span>}
            {process.env.PRIVACY && <span><a href={process.env.PRIVACY} target="_blank">Privacy</a></span>}
          </div>
          <div>© 2026 Bitcoin Block Explorer.</div>
        </div>
      </div>
    </div>
  </footer>
