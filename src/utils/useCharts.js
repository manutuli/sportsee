import { useState, useEffect } from "react";
import formatCharts from "./formatCharts";
// import fetchData from "./fetchData";
import { mock } from "./mock";
// 
function useCharts (option, userId) {
    // const [isLoading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    const [chart, setChart] = useState(null)
    const [opt, setOption] = useState("")
    const [uid, setUserId] = useState(0)
    // 
    useEffect(()=>{
        let url ;
        setOption(option)
        setUserId(userId)
        switch (opt) {
            case "performance" : {
                url = `http://localhost:3000/user/${uid}/performance`
            }
            break;
            
            case "activity" : {
                url = `http://localhost:3000/user/${uid}/activity`
            }
            break;
            
            case "sessions" : {
                url = `http://localhost:3000/user/${uid}/average-sessions` 
            }
            break;
    
            case "user" : {
                url = `http://localhost:3000/user/${uid}/`
            }
            break;
            default : "error"
        }
        if (!url||!opt||!uid) return
        const controller = new AbortController()
        const FetchChart = async () => {
            try {
                const response = await fetch(url, {signal: controller.signal,})
                const formattedChart = formatCharts(opt, await response.json())
                setChart(formattedChart)
            }
            catch (e) {
                if (e.name === "AbortError") {console.log('abort error : ', e); return}
                console.log('fetch error : ', e)
                const formattedChart = formatCharts(opt, {data : mock[opt][0]})
                setChart(formattedChart)
            }
            // finally {
            //     // setLoading(false)
            // }
        }
        FetchChart()
        return () => controller.abort()
    },[option, userId, opt, uid]);
    // 
    return [
        chart, 
    ];
}

export default useCharts;
