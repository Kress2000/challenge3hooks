import React, { useState } from "react";
import './FetchData.css';
import useFetch from "../Hooks/useFetch";

export default function FetchData() {
  const [seeData, hideData] = useState(false)
  const {data, error, Loading } = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div className="fetchData">
      <h1 className="title">b. Fetch data From API</h1>
      <div className="data-got-box">
        {seeData&&
          <div className="displayBox">
            {data.data.map((person, i)=>(
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
          <p className={Loading?"": "green"}>Loading: {Loading?"Loaded":"True"}</p>
          {data.status===200?<button onClick={()=>hideData(prev=> !prev)} className="viewBtn">
          {seeData?"Hide People":"View People"}
            </button> : <button>Data: {"{}"} </button>
          }
          <p className={data.status!==200?"red error": "error"}>Error: {data.status!==200?error: "{}"}</p>
        </div>
      </div>
    </div>
  )
}
 