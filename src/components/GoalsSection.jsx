import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import useCharts from "../utils/useCharts"
import PropTypes from "prop-types"
function GoalsSection(){
    const userId = 18
    const [
      chart, 
    ] = useCharts("sessions", userId)
    function CustomTooltip ({ active, payload }) {
      if (active && payload) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} min`}</p>
          </div>
        )
      }
    }
    CustomTooltip.propTypes = {
      active: PropTypes.bool,
      payload: PropTypes.array,
    }
   return (
        <article  className="goals">
            <ResponsiveContainer width="90%" height="90%">
                <LineChart 
                  data={chart?.sessions} 
                  accessibilityLayer 
                >
                    <Tooltip content={<CustomTooltip/>}
                      wrapperStyle={{
                        width: "50%", 
                        scale: "0.6", 
                        fontSize: "large", 
                        color: "#000",
                        backgroundColor: "#fff"
                      }} 
                      labelStyle={{color: "blue", height: "20px"}}
                      // payload={[{sessionLength: "min"}]}
                    />
                    <Legend 
                      height="50%" 
                      align="left" 
                      chartHeight="100px" 
                      verticalAlign="top" 
                      wrapperStyle={{top: "-15px", left: "-30px", scale: "0.6", }}
                      payload={[{color: "#fff", value: "Durée moyenne des sessions."}]} 
                      iconSize={0}
                    />
                    <XAxis 
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{fill: "#fff", fontSize: "10"}}
                    />
                    <Line dot={false} stroke="#fff" type="natural" dataKey="sessionLength" activeDot={{r: 3}} />
                </LineChart>
            </ResponsiveContainer>
        </article>
    )
}

export default GoalsSection