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

export const dashBoardCycleTopSeo = ({ t, blocks, dashboardState, loading, ...S }) => {
  const { dashblocks, dashTxs } = dashboardState || {}

  return (homeLayout(
      <div className="container dash-container">
        <div className="block-container block-container--info">
          <div className="blocks-table">
            <h1>Bitcoin Pi Cycle Top Indicator</h1>
            <p>The Bitcoin Pi Cycle Top Indicator is a popular on-chain metric used to identify potential market cycle peaks in Bitcoin’s price. Learn how it's calculated, its accuracy in past cycles, and its practical application for crypto investors and analysts.</p>
          </div>
        </div>
        { blks( dashblocks, true, false, { t, ...S }) }
        <div className="block-container block-container--info block-container--info-accent">
          <div className="blocks-table">
            <h2>What Is the Pi Cycle Top Indicator?</h2>
            <p>The Pi Cycle Top Indicator is a technical tool used to forecast potential market tops based on a data-driven approach using long-term moving averages. Moving averages are tools that smooth out price data to reveal trends over time. The indicator was created by Philip Swift, the founder of Bitcoin Magazine Pro in April 2019. While no indicator is infallible, the Pi Cycle Top has been remarkably consistent in previous cycles, making it a favorite among macro traders and long-term Bitcoin holders.</p>
          </div>
        </div>
        <div className="block-container block-container--info">
          <div className="blocks-table">
            <h2>How It Predicts Bitcoin Market Tops</h2>
            <p>The indicator tracks the relationship between two distinct moving averages: </p>
            <ul>
              <li>111-day moving average (captures shorter-term price trends)</li>
              <li>2x multiple of the 350-day moving average (represents longer-term price trends)</li>
            </ul>
            <p>When the shorter-term average crosses above the longer-term one, the indicator signals a potential market top. This method is based on historical data showing that previous Bitcoin bull runs peaked shortly after such a crossover occurred. It doesn’t rely on sentiment or news, but purely on price action and momentum.</p>
          </div>
        </div>
        {transactions( dashTxs, true, { t } )}
        <div className="block-container block-container--info block-container--info-accent">
          <div className="blocks-table">
            <h2>Historical Examples of the Indicator in Action</h2>
            <p>Examining historical chart data reveals how the Pi Cycle Top Indicator has predicted major Bitcoin tops with uncanny accuracy. For instance, it successfully marked the April 2013, December 2017, and April 2021 peaks—days before the markets reversed. These case studies highlight the value of long-term moving average strategies, especially when combined with price velocity. The indicator often aligns with moments of euphoric market behavior, excessive leverage, and FOMO-driven retail interest. Analyzing these events not only builds trust in the tool but also provides valuable insight into recurring market psychology during bull cycles.</p>
          </div>
        </div>
        <div className="block-container block-container--info">
          <div className="blocks-table">
            <h2>Using the Pi Cycle Top for Strategy</h2>
            <p>Traders and investors use the Pi Cycle Top Indicator not as a sell signal but as a strong warning of overbought market conditions. When the crossover happens, many begin de-risking their positions, taking profits, or tightening stop losses. Some even use it to short the market or rotate into stablecoins. However, professionals often combine this indicator with on-chain data like NUPL (Net Unrealised Profit/Loss) or exchange inflows to validate signals. It’s best used as part of a multi-layered strategy rather than in isolation, helping traders stay disciplined during euphoric price surges while avoiding premature exits.</p>
          </div>
        </div>
        <div className="block-container block-container--info" style={{marginBottom: '40px'}}>
          <div className="blocks-table">
            <h2>Limitations and Criticisms</h2>
            <p>Despite its track record, the Pi Cycle Top Indicator has limitations. It is a lagging indicator and can produce late or premature signals depending on market volatility. Critics argue it may be a product of curve-fitting—where a tool is engineered to match past data but lacks predictive power for the future. Additionally, macroeconomic changes or the rise of institutional trading might alter future cycle dynamics, reducing its accuracy. Over-reliance can also lead to missed gains if one exits too early. Like all technical analysis tools, it's best used in conjunction with broader market context, sentiment analysis, and risk management.</p>
          </div>
        </div>
        <div>
          <h3><b>Frequently Asked Questions</b></h3>

          <div className="question-section">
            <p><b>Has the Pi Cycle Top Indicator accurately predicted previous Bitcoin tops?</b></p>
            <span>Historically, it has closely aligned with several cycle tops, but it's not infallible.</span>
          </div>

          <div className="question-section">
            <p><b>Is the Pi Cycle Top useful for short-term trading?</b></p>
            <p>It's better suited for macro trends, not intraday or short-term trading.</p>
          </div>

          <div className="question-section">
            <p><b>Where can I track the live Pi Cycle Top Indicator?</b></p>
            <p>It is available on platforms like Bitcoin Magazine Pro and TradingView.</p>
          </div>
        </div>
      </div>
      , { ...S, t, activeTab: '' })
  )}
