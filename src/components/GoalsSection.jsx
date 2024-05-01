import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import useCharts from "../utils/useCharts"
function GoalsSection(){
    const userId = 18
    const [isLoading, chart, error] = useCharts("sessions", userId)
    const component = isLoading||error ? 
      <div>Loading...</div> : 
     (
        <article  className="goals">
            <ResponsiveContainer width="90%" height="90%">
                <LineChart 
                  data={chart?.sessions} 
                  accessibilityLayer 
                >
                    <Tooltip wrapperStyle={{scale: "0.4", fontSize: "large", color: "#000"}} />
                    <Legend 
                      verticalAlign="top" 
                      payload={[{color: "#fff", value: "Durée moyenne des sessions."}]} 
                      iconSize={0}
                    />
                    <XAxis 
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{fill: "#fff"}}
                    />
                    <Line dot={false} stroke="#fff" type="monotone" dataKey="sessionLength" activeDot={{r: 3}} />
                </LineChart>
            </ResponsiveContainer>
        </article>
    )
    return component
}

export default GoalsSection