import { useDispatch } from "react-redux";
import BackArrowImage from "../assets/left.svg";
import { goBackToLastPage, setPage } from "../slices/shared";

export default function BackArrow() {
  const dispatch = useDispatch();
  
  return <button onClick={()=>dispatch(goBackToLastPage())}><img className="top-left" src={BackArrowImage}></img></button>
}