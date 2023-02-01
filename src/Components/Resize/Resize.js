import "./Resize.css";
import useResize from "../Hooks/useResize";


export default function Resize() {
   const {width, height} = useResize()
  return (
    <div className='resizeBox'>
        <h1 className='title'>a. Chech Window size</h1>
        <div>
            <span>Width:  </span>
            <h1>{width}px</h1>
        </div>
        <div>
            <span>Height: </span>
          <h1>{height}px</h1>
        </div>
    </div>
  )
}
