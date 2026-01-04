import './App.css'
import MarketCard from './components/Cards/MarketCard'
import PortfolioAnalyticsCard from './components/Cards/PortfolioAnalyticsCard'
import PortfolioCard from './components/Cards/PortfolioCard'
import SnapshotCard from './components/Cards/SnapshotCard'
import StockCards from './components/Cards/StockCards'
import WatchListCard from './components/Cards/WatchListCard'
import Header from './components/Header'

function App() {

  return (
 <>
  <Header />
  

  <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
    {/* Stock cards row */}
    <StockCards />

  {/* Bottom: Side-by-side cards */}
    <div className="flex gap-6 items-start">
      <PortfolioCard />
      <MarketCard />
      <SnapshotCard/>
    </div>

    <div className='flex gap-4 item-start'>
    <PortfolioAnalyticsCard/>
    <WatchListCard/>
    </div>
  </div>
</>

  )
}

export default App
