function formatCharts(option, data) {
    const obj = {}
    if (option === "performance" ) {
        const temp = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
        // obj.kind = data.data.data.map((o, index ) => o.kind = data.data.kind[index+1])
        obj.kind = data.data.data.map((o, index ) => o.kind = temp[index])
        obj.data = data.data.data.toReversed()
        return obj
    }
    if (option === "activity" ) {
        obj.sessions = data.data.sessions
        return obj
    }
    if (option === "user" ) {
        const {userInfos, score, todayScore, keyData} = data.data
        obj.userInfos = userInfos
        obj.score = score ? score : todayScore
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
export default formatCharts