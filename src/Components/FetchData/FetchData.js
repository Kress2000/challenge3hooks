import axios from "axios";
import React, { useEffect, useState } from "react";
import './FetchData.css';

export default function FetchData() {
  const [people, setPeople]=useState([]);
  const [seePeople, setSeePeople]=useState(false);
  const [showErr, setShowErr] = useState("");
  const [status, setStatus] = useState(0);
  const [Loaded, setLoaded]= useState(false)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=> {
    setStatus(res.status)
    setPeople(res.data);
    setLoaded(true)
    })
    .catch(err=>{
      setShowErr(err.message)
      setLoaded(true)
      }
    );
  }, []);

   return (
     <div className="fetchData">
        <h1 className="title">b. Fetch data From API</h1>
        <div className="data-got-box">
          {seePeople&&
            <div className="displayBox">
              {people.map((person, i)=>(
                <div className="people" key={person.id}>
                  <button className="number">{i +1}</button>
                  <div>
                    <h1>Title: </h1>
                    <h4>{person.title}</h4>
                  </div>
                  <div>
                    <h3>Body: </h3>
                    <small>{person.body}</small>
                  </div>
                </div>
              ))}

            </div>
          }
          <div className="btnBox">
            <p className={Loaded?"": "green"}>Loading: {Loaded?"Loaded":"True"}</p>
            {status===200?<button onClick={()=>setSeePeople(prev=> !prev)} className="viewBtn">
                        {seePeople?"Hide People":"View People"}
                         </button> : <button>Data: {"{}"} </button>
  
            }
            <p className={status!==200?"red error": "error"}>Error: {status!==200?showErr: "{}"}</p>
          </div>
        </div>
     </div>
   )
 }
 