import { useDispatch, useSelector } from "react-redux";
import list from "../json/miscMenuList.js";
import { setPage } from "../slices/shared.js";
import BackArrow from "./backArrow.jsx";

export default function Menu() {
  const dispatch = useDispatch();
  const previousUniquePage = useSelector(state => state.shared.previousUniquePage);
  const listOfElements = list.map((value) => {
    const page = value.page;
    return (
     <div key={value.id} style={{margin: "2px"}}>
       <button style={{fontSize: "2.5em"}} onClick={()=>dispatch(setPage(page))}>{value.text}</button>
     </div>
    )
   })
  return (
    <div>
      <div style={{display: "flex", flexDirection: "column", overflow: "auto", scrollbarWidth: "none", height: "600px", transform: "translateY(25%)"}}>
        {listOfElements}
      </div>
      <BackArrow></BackArrow>
    </div>
  )    
}