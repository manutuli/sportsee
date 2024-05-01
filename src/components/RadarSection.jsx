import { RadarChart, Radar, ResponsiveContainer, PolarGrid, PolarAngleAxis } from "recharts"
import useCharts from "../utils/useCharts"
// 
function RadarSection(){
  const userId = 18;
    const [isLoading, chart, error] = useCharts("performance", userId)
    const component = isLoading||error ?
      <div>Loading...</div> :
     (
        <article id="radar" className="radar">
            <ResponsiveContainer width="90%" height="90%">
                <RadarChart 
                  data={chart?.data} 
                >
                  <PolarGrid 
                    radialLines={false} 
                    polarRadius={[5, 15, 25, 40, 50]} 
                    gridType="polygon" 
                  />
                  <PolarAngleAxis tick={{fontSize: "10"}} dataKey="kind" />
                  <Radar dataKey="value" stroke="transparent" fill="#f00" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    )
    return component
}

export default RadarSection