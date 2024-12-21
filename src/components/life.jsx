import { useDispatch } from "react-redux"
import { setPage } from "../slices/shared";

export default function Life() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="top-left credits" style={{marginLeft: "5px"}} onClick={()=>dispatch(setPage("misc-menu"))}>MENU</button>
      <h1>Bad Life Simulator</h1>
      <p>Age: 0</p>
      <p>Joy: 0</p>
      <p>Health: 0</p>
      <p>Looks: 0</p>
    </div>
  )
}