import { RadarChart, Radar, ResponsiveContainer, PolarGrid, PolarAngleAxis } from "recharts"
import useCharts from "../utils/useCharts"
import PropTypes from "prop-types"
function RadarSection(props){
  const {userId} = props;
    const [
      chart, 
    ] = useCharts("performance", userId)
    return (
        <article id="radar" className="radar">
            <ResponsiveContainer width="90%" height="90%">
                <RadarChart 
                  outerRadius={50}
                  data={chart?.data} 
                >
                  <PolarGrid 
                    radialLines={false} 
                    polarRadius={[4, 12, 24, 38, 48]} 
                    gridType="polygon" 
                  />
                  <PolarAngleAxis 
                    tick={{fontSize: "10",}} 
                    dataKey="kind" 
                  />
                  <Radar 
                    dataKey="value" 
                    fill="#f00" 
                    fillOpacity={0.6} 
                  />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    )
}
RadarSection.propTypes={
  userId: PropTypes.number,
}
export default RadarSection