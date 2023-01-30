import React, {useEffect, useState} from 'react'

export default function useFetch(request) {
const [people, setPeople]=useState([]);
const [showErr, setShowErr] = useState("");
const [status, setStatus] = useState(0);
const [Loaded, setLoaded]= useState(false);
const response ={
    people,
    showErr,
    status,
    Loaded
}
  useEffect(()=>{
    request.then(promiseRes=> {
    setStatus(promiseRes.status)
    setPeople(promiseRes.data);
    setLoaded(true)
    })
    .catch(err=>{
      setShowErr(err.message)
      setLoaded(true)
      }
    );
  }, []);
  return response;
}
