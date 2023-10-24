import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
            setTimeout(()=>{
                fetch(url)
            //Fetch is asyncronous so use .then but useEffect won't take async functions
            .then(res => { 
                if(!res.ok){
                    throw Error("Couldn't fetch data !")
                }
                return res.json()
                //.json() method converts it to js object but it is also async so .then again
            })                  
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null)
            })//make sure your use conditional rendering since rendering will preceed the result of these asyncronous processes
            .catch(e => {
                setIsPending(false)
                setError(e.message)
            })
            }, 1000)
        }, [url])

    return {data, isPending, error}
}

export default useFetch;