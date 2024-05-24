// import { useEffect, useState } from "react";
import data from "./data.json"
function fetchData(opt) {
    // if (url === "error") return data[opt]
    // try {
    //     const response = await fetch(url)
    //     return response.json()
    // } catch (error) {
    //     console.log("fetch error : ", error)
    // }
    return data[opt]
}

export default fetchData;