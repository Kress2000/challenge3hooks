import React, { useEffect, useState } from 'react'
import "./Resize.css";


export default function Resize() {
    const [resize, setResize] = useState([window.innerWidth, window.innerHeight])
    const handleWindowSize =()=>{
        setResize([window.innerWidth, window.innerHeight]);
        return resize;
    }
    useEffect(()=>{
        window.addEventListener("resize", handleWindowSize)
        return () => {
            window.removeEventListener('resize', handleWindowSize);
          };
    }, [])
  return (
    <div className='resizeBox'>
        <h1 className='title'>a. Chech Window size</h1>
        <div>
            <span>Width:  </span>
            <h1>{resize[0]}px</h1>
        </div>
        <div>
            <span>Height: </span>
          <h1>{resize[1]}px</h1>
        </div>
    </div>
  )
}
