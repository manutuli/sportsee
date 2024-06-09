import WeightSection from './components/WeightSection'
import GoalsSection from './components/GoalsSection'
import RadarSection from './components/RadarSection'
import ScoreSection from './components/ScoreSection'
import Monitoring from './components/Monitoring'
import Header from './components/Header'
import useCharts from './utils/useCharts'
import { Suspense } from 'react'
import PropTypes from 'prop-types'
function App(props) {
  const userId = props.id // useParams
  const [
    chart, 
  ] = useCharts("user", userId)
   return(        
    <div className='api-container'>
          <Suspense fallback={<p>Loading...</p> }>
            <Header userInfos={{...chart?.userInfos}}/>
          </Suspense>
          <main className='main-content'>
            <div className="inner-main">
              <section className='section-big'>
                <Suspense fallback={<p>Loading...</p> }>
                  <WeightSection userId={userId} />
                </Suspense>
              </section>
              <section className='section-medium'>
                <Suspense fallback={<p>Loading...</p> }>
                  <GoalsSection userId={userId} />
                </Suspense>
                <Suspense fallback={<p>Loading...</p> }>
                  <RadarSection userId={userId} />
                </Suspense>
                <Suspense fallback={<p>Loading...</p> }>
                  <ScoreSection score={chart?.score} />
                </Suspense>
              </section>
            </div>
            <section className='section-small'>
              <Suspense fallback={<p>Loading...</p> }>
                <Monitoring keyData={{...chart?.keyData}}/>
              </Suspense>
            </section>
          </main>
        </div>
  )
}
App.propTypes={
  id: PropTypes.number,
}
export default App
