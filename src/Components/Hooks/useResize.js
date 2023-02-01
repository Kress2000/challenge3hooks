import { useEffect, useState } from 'react';


export default function useResize() {
    const [resize, setResize] = useState({width: window.innerWidth, height: window.innerHeight})
    const {width, height}= resize;
    const handleWindowSize =()=>{
        setResize({width: window.innerWidth, height: window.innerHeight});
        return resize;
    }
    useEffect(()=>{
        window.addEventListener("resize", handleWindowSize)
        return () => {
            window.removeEventListener('resize', handleWindowSize);
          };
    }, [])

  return {width, height};
}
