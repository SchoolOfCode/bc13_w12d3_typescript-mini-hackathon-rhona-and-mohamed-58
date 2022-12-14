import { useEffect, useState } from 'react'

function useFetch(url: string){
    const [fetchItem, setFetchItem] = useState({})

    useEffect(() => {
        async function callURL() {
            fetch(url, {
                headers: { Accept: "application/json" },
            })
                .then((res) => res.json())
                .then((data) => setFetchItem(data))
        }
        callURL()
    }, [url])
    return fetchItem
}

export default useFetch