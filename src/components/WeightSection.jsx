import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import useCharts  from "../utils/useCharts";
function WeightSection(){
    const userId = 18
    const [isLoading, chart, error] = useCharts("activity", userId);
    const component = isLoading||error ?
    <div>Loading...</div> :
     ( 
        <article className="weight">
            <ResponsiveContainer width="90%" height="90%">
                <BarChart 
                  width="90%" height="90%"
                  data={chart?.sessions} 
                >
                    <CartesianGrid vertical={false}/>
                    <Legend 
                        iconSize={4} 
                        iconType="circle"
                        align="center"
                        verticalAlign="top" 
                        layout="horizontal" 
                        wrapperStyle={{scale: "0.9", top: "2%"}} 
                    />
                    <Tooltip 
                      itemStyle={{layout: "horizontal", gap:"10px", backgroundColor: "#f00", color: "#fff"}} 
                      wrapperStyle={{ scale: "0.6", color: "#fff", backgroundColor: "#f00"}} 
                      label={false}
                    />
                    <XAxis dataKey="day" />
                    <YAxis tickCount={"4"} domain={['dataMin - 20', 'dataMax + 20']} orientation="right" type="number" />
                    <Bar dataKey="kilogram" fill="#000" barSize={5} />
                    <Bar dataKey="calories" fill="#f00" barSize={5}  />
                </BarChart>
            </ResponsiveContainer>
        </article>
    )
    return component
}

export default WeightSection