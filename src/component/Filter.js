import { useDispatch } from "react-redux";
import { filter, filterDone } from "../redux/Actions";

function Filter() {
 const dispatch = useDispatch()
  return (
    <div className='FilterDiv'>
      <p className="Filter"> Sort by : </p>
      <button style={{ width: "40px" }} className="Filter"  
      onClick={()=>dispatch(filterDone(true))}  value="Done">Done</button>

      <button className="Filter" 
      onClick={()=>dispatch(filterDone(false))}  value="Undone" >Undone</button>

      <button style={{ width: "30px" }} value="All" className="Filter" 
      onClick={()=>dispatch(filter())}>All</button>
    </div>
  )
}

export default Filter