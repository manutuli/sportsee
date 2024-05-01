import WeightSection from './components/WeightSection'
import GoalsSection from './components/GoalsSection'
import RadarSection from './components/RadarSection'
import ScoreSection from './components/ScoreSection'
import Monitoring from './components/Monitoring'
import Header from './components/Header'
import HorizontalNav from './components/HorizontalNav'
import VerticalNav from './components/VerticalNav'
import useFetch from './utils/useCharts'
function App() {
  const userId = 18 // useParams
  const [isLoading, chart, error] = useFetch("user", userId)
  const component = isLoading||error ?
  <div>Loading...</div> :
   (
    <div className='outer-container'>
      <HorizontalNav />
      <div className='inner-container'>
        <VerticalNav />
        <div className='api-container'>
          <Header userInfos={{...chart?.userInfos}}/>
          <main className='main-content'>
            <div className="inner-main">
              <section className='section-big'>
                <WeightSection />
              </section>
              <section className='section-medium'>
                <GoalsSection />
                <RadarSection />
                <ScoreSection score={chart?.score} />
              </section>
            </div>
            <section className='section-small'>
              <Monitoring keyData={{...chart?.keyData}}/>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
  return component
}
// App.prototype = {
  
// }
export default App
