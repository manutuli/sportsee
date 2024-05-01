function FormatCharts(option, data) {
    // console.log(`Format ${option} : `, data)
    const obj = {}
    if (option === "performance" ) {
        obj.kind = data.data.data.map((o, index ) => o.kind = data.data.kind[index+1])
        obj.data = data.data.data.toReversed()
        return obj
    }
    if (option === "activity" ) {
        obj.sessions = data.data.sessions
        return obj
    }
    if (option === "user" ) {
        const {userInfos, score, keyData} = data.data
        obj.userInfos = userInfos
        obj.score = score
        obj.keyData = keyData
        return obj
    }
    if (option === "sessions" ) {
        const days = ["L", "M", "M", "J", "V", "S", "D"]
        obj.days = data.data.sessions.map((session, index) => session.day = days[index])
        obj.sessions = data.data.sessions
        return obj
    }
}
export default FormatCharts