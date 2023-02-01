import axios from 'axios';
import {useEffect, useState} from 'react'

export default function useFetch(request) {
const [data, setData]=useState([]);
const [error, showError] = useState("");
const [Loaded, setLoaded]= useState(false);
  useEffect(()=>{
    axios.get(request)
    .then(promiseRes=> {
    setData(promiseRes);
    setLoaded(true)
    })
    .catch(error=>{
      showError(error.message)
      setLoaded(true)
      }
    );
  }, []);
  return {data, error, Loaded };
}
