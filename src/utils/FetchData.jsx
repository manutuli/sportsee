// import { useEffect, useState } from "react";

async function FetchData(url) {
    try {
        const data = await fetch(url)
        return await data.json()
    } catch (error) {
        console.log("fetch error : ", error)
    }
}

export default FetchData;