import { useEffect, useState } from 'react';


export default function useResize() {
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

  return resize;
}
