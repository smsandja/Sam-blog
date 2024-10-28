import { useEffect, useState } from "react";

const useFetch = (url) => {
 const abortCont = new AbortController();

   const [data, setData] = useState(null); 
   const [isPending, setPending] = useState(true);
   const [error, setError] = useState(null);

    useEffect(() =>{
        setTimeout(()=>{
            fetch(url)
            .then(res => { 
                if(!res.ok){
                    throw new Error("Could not found data !"); 
                }
                return res.json(); })
            .then(data => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                // if (err.name === 'AbortError') {
                //     console.log('fetch aborted')
                // } else {
                  setError(err.message);
                  setPending(false);  
                // }
                
            })
        }, 1000);

        return () => abortCont.abort();
   }, [url]);
   return { data, isPending, error }
}
 
export default useFetch;