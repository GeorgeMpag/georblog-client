import {useEffect, useState} from 'react';

const useFetch =(url) =>{
    const [data, setData]= useState(null);
    const [isPending, setIsPending]=useState(true);
    const [error, setError]=useState(null);
    const [belongToUser, setBelongToUser]=useState(false)

    useEffect(() => {
        const abortCont=new AbortController();
        setTimeout(()=>{
            fetch(url,  {signal: abortCont.signal})
            .then(res=>{
                //console.log(res);
               if (!res.ok){
                    throw Error('Could not fetch the data ')
                }
                return  res.json();
            })
            .then(data => {
                // console.log(data);
                 setData(data);
                 setIsPending(false);
                 setError(null);
                 if (JSON.parse(sessionStorage.getItem('user')).user_name===data.author){
                        setBelongToUser(true)
                        //console.log('user post');
                    }
                 
     
            },)
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setError(err.message);
                    console.log(err.message);
                    setIsPending(false);
                }
            })
        }, 1000);

        return() => abortCont.abort();
     },
    [url]);

     
    return {data, isPending,error,belongToUser }
}

export default useFetch;