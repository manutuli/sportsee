import { useState, useEffect } from "react";
import FormatCharts from "./formatCharts";
// 
function useCharts (option, userId) {
    const [isLoading, setLoading] = useState(false)
    const [chart, setChart] = useState(null)
    const [error, setError] = useState(null)
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
        const abortController = new AbortController()
        const FetchChart = async () => {
            try {
                setLoading(true)
                const response = await fetch(url, {signal: abortController.signal,})
                const data = await response.json()
                const formattedChart = FormatCharts(opt, data)
                setChart(formattedChart)
                setError(null)
            }
            catch (e) {
                if (e.name === "AbortError") {console.log('abort error : ', e.name); return}
                setError(e)
                setChart(null)
                console.log('error', e)
            }
            finally {
                setLoading(false)
            }
        }
        FetchChart()
        return () => abortController.abort()
    },[option, userId, opt, uid]);
    // 
    return [isLoading, chart, error];
}

export default useCharts;
