import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import useCharts from "../utils/useCharts";
import PropTypes from "prop-types"
function WeightSection(){
    const userId = 18
    const [isLoading, chart, error] = useCharts("activity", userId);
    function CustomTooltip ({ active, payload }) {
        if (active && payload && payload.length) {
          return (
            <>
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].value} Kg -`}</p>
                </div>
                <div className="custom-tooltip">
                    <p className="label">{`- ${payload[1].value} Kcal`}</p>
                </div>
            </>
          )
        }
    }
    CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array,
    }
    const component = isLoading||error ?
    <div>Loading...</div> :
     ( 
        <article className="weight">
            <p className="weight-title"> Activité quotidienne </p>
            <ResponsiveContainer width="90%" height="90%">
                <BarChart 
                  width="90%" height="90%"
                  data={chart?.sessions} 
                >
                    <CartesianGrid vertical={false}/>
                    <Legend 
                        iconSize={0} 
                        verticalAlign="top"
                        layout="vertical" 
                        wrapperStyle={{right: "60px", scale: "0.9",}} 
                    />
                    <Tooltip 
                        content={<CustomTooltip/>}
                        // itemStyle={{outline: "3px solid black", minWidth: "40%"}}
                        wrapperStyle={{scale: "0.6", color: "#fff", backgroundColor: "#f00",  minWidth: "30%"}} 
                    />
                    <XAxis tickSize={7} tickLine={false} fontSize="small"/>
                    <YAxis 
                        tickSize={7} 
                        tickLine={false} 
                        fontSize="small"
                        tickCount={"4"} 
                        domain={['dataMin - 20', 'dataMax + 20']} 
                        orientation="right"
                        type="number"
                    />
                    <Bar dataKey="kilogram" unit={"Kg"} name={"Weight (Kg)"} fill="#000" barSize={5} />
                    <Bar dataKey="calories" unit={"Kcal"} name={"Activity (Kcal)"} fill="#f00" barSize={5}  />
                </BarChart>
            </ResponsiveContainer>
        </article>
    )
    return component
}
export default WeightSection