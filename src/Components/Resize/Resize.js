import "./Resize.css";
import useResize from "../Hooks/useResize";


export default function Resize() {
   const resize = useResize()
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
