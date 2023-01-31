import React, { useState } from "react";
import axios from "axios";
import './FetchData.css';
import useFetch from "../Hooks/useFetch";

export default function FetchData() {
  const [seePeople, hidePeople] = useState(false)
  const {people, showErr, status, Loaded } = useFetch(
  axios.get("https://jsonplaceholder.typicode.com/posts")
  )
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
          {status===200?<button onClick={()=>hidePeople(prev=> !prev)} className="viewBtn">
          {seePeople?"Hide People":"View People"}
            </button> : <button>Data: {"{}"} </button>

          }
          <p className={status!==200?"red error": "error"}>Error: {status!==200?showErr: "{}"}</p>
        </div>
      </div>
    </div>
  )
}
 