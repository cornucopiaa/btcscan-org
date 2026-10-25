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

export const dashBoardMovingAverageSeo = ({ t, blocks, dashboardState, loading, ...S }) => {
  const { dashblocks, dashTxs } = dashboardState || {}

  return (homeLayout(
      <div className="container dash-container">
        <div className="block-container block-container--info">
          <div className="blocks-table">
            <h1>Bitcoin 200-Week Moving Average</h1>
            <p>The 200-week moving average is a significant long-term technical indicator in Bitcoin analysis. This page explains what the 200-week MA is, why it's important, and how traders and investors use it to guide decision-making in bear and bull markets alike.</p>
          </div>
        </div>
        { blks( dashblocks, true, false, { t, ...S }) }
        <div className="block-container block-container--info block-container--info-accent">
          <div className="blocks-table">
            <h2>What is the 200-Week Moving Average?</h2>
            <p>The 200-week moving average (200WMA) is a long-term technical indicator calculated by taking the average of Bitcoin’s weekly closing prices over the last 200 weeks. As a simple moving average (SMA), it assigns equal weight to each data point, unlike exponential moving averages (EMAs), which give more weight to recent prices. This smooths out short-term volatility and highlights the underlying trend of the asset over nearly four years of market data.</p>
            <p>Because it aggregates such a large amount of data, the 200WMA reacts slowly to recent price action, making it more suitable for macro analysis rather than short-term trading.</p>
          </div>
        </div>
        <div className="block-container block-container--info block-container--info-accent">
          <div className="blocks-table">
            <h2>Why the 200-Week MA Matters in Crypto</h2>
            <p>The 200-week moving average has long served as Bitcoin’s unofficial price floor in bear markets. It smooths out price fluctuations across nearly four years of data, filtering out noise and reflecting long-term sentiment. Historically, this average acts as a psychological support level where buyers accumulate and long-term holders re-enter. When Bitcoin’s price dips to or near the 200-week MA, it often signals deep value territory—offering potential entry points for patient investors.</p>
          </div>
        </div>
        {transactions( dashTxs, true, { t } )}
        <div className="block-container block-container--info block-container--info-accent">
          <div className="blocks-table">
            <h2>Historical Performance of Bitcoin and the 200-Week MA</h2>
            <p>A look at Bitcoin’s past performance shows just how often the 200-week moving average acts as a bounce zone. In the 2015, 2018, and 2022 bear markets, price respected or slightly dipped below the line before reversing course. These rebounds suggest the 200-week MA represents not only technical support, but also a point of renewed investor confidence. It has become a touchstone level during capitulation phases—often aligning with low RSI readings and peak fear in the market.</p>
          </div>
        </div>
        <div className="block-container block-container--info">
          <div className="blocks-table">
            <h2>Using the 200-Week MA for Strategy</h2>
            <p>Investors use the 200-week MA as both a strategic entry signal and a barometer for broader market sentiment. Some allocate capital in tranches when price nears or tests this average, while others track how far the price deviates from it to measure overextension. Advanced traders use it in combination with other moving averages—like the 50-week and 100-week—to confirm trend reversals or identify death crosses. For passive investors, it can be a guide for dollar-cost averaging into long-term positions.</p>
          </div>
        </div>
        <div className="block-container block-container--info" style={{marginBottom: '40px'}}>
          <div className="blocks-table">
            <h2>Comparing with Other Long-Term BTC Indicators</h2>
            <p>While the 200-week MA is powerful, it shouldn't be used in isolation. Comparing it to other long-term indicators such as the 50-week MA, 100-week MA, and Pi Cycle Bottom can provide more nuanced signals. For instance, when the price is below all three, it may signal capitulation; when it climbs back above them, it could suggest a trend reversal. Some investors combine moving averages with on-chain metrics like HODL waves, realized cap, or MVRV to build a more complete picture of market cycles and turning points.</p>
          </div>
        </div>
        <div>
          <h3><b>Frequently Asked Questions</b></h3>

          <div className="question-section">
            <p><b>Why is the 200-week MA significant in Bitcoin analysis?</b></p>
            <span>It has historically acted as a strong support level during market bottoms.</span>
          </div>

          <div className="question-section">
            <p><b>How often is the 200-week MA updated?</b></p>
            <p>It's updated weekly based on the average of the past 200 weekly closing prices.</p>
          </div>

          <div className="question-section">
            <p><b>Is the 200-week MA enough for making investment decisions?</b></p>
            <p>It should be used alongside other indicators and market data for balanced analysis.</p>
          </div>
        </div>
      </div>
      , { ...S, t, activeTab: '' })
  )}
