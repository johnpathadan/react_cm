import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const[data, setData] = useState(null);
    const[pending, setPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        const abortctrl = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortctrl.signal})
            .then((res)=>{
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data)=>{
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch((err)=>{
                if(err.name = 'AbortError'){
                    console.log('Fetch Aborted');
                }else{
                    setPending(false);
                    setError(err.message);
                }
            })
        }, 1000)
        return ()=>abortctrl.abort();
    }, [])

    return {data, pending, error};
}
 
export default UseFetch;