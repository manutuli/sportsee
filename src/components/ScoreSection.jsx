import {ResponsiveContainer, RadialBarChart, RadialBar, Legend, PolarAngleAxis, Customized} from "recharts"
import PropTypes from "prop-types"
// 
function ScoreSection({...props}){
    const CustomLabel = (props) => {
        const {data} = props
        return (
            <text x="40%" y="50%" fill="#000" fontSize="18">
                <tspan fontWeight="bold" >{data[0].msg}</tspan>
                <tspan  x="38%" y="60%" fontSize="10" fill="##74798C">{data[0].txt}</tspan>
                <tspan x="38%" y="67%" fontSize="10" fill="##74798C">{data[0].txt2}</tspan>
            </text>
        )
    }
    return (
        <article id="score" className="score">
            <ResponsiveContainer width="90%" height="90%" >
                <RadialBarChart cx="50%" cy="50%"
                    innerRadius="90%"
                    outerRadius="105%"
                    startAngle={80}
                    endAngle={440}
                    data={[{
                        name: "Score", 
                        msg: ` ${props.score * 100}% `,
                        txt: "de votre",
                        txt2: " objectif",
                        value: props.score * 100,
                    }]}
                >
                    <Customized component={<CustomLabel/>} />
                    <PolarAngleAxis type="number" domain={[1, 100]} background={"#f00"} tick={false} axisLine={false} />
                    <Legend 
                        iconSize={0}
                        width="10%"
                        verticalAlign="top"
                        layout="horizontal"
                    />
                    <RadialBar 
                        dataKey='value'
                        fill="#f00"
                        minAngle={15}
                        clockWise={true}
                        background
                    >
                    </RadialBar>
                </RadialBarChart>
            </ResponsiveContainer>
        </article>
    )
}
ScoreSection.propTypes={
    score: PropTypes.number,
    data: PropTypes.array,
}

export default ScoreSection