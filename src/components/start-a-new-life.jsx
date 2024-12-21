import { useDispatch, useSelector } from "react-redux";
import { goBackToLastPage, setPage } from "../slices/shared";
import BackArrow from "./backArrow";


export default function NewLifePage() {
  const dispatch = useDispatch();
  const previousUniquePage = useSelector(state => state.shared.previousUniquePage);
  return (
    <div>
      <BackArrow></BackArrow>
      <h1>Please Confirm</h1><br/>
      <p><b>Are you sure you want to start a new life?</b><br/><br/>Your current life will be erased. This action cannot be undone.</p>
      <div style={{textAlign: "center"}}>
        <button style={{color: "blue", cursor: "pointer"}}>Yes I&apos;m sure</button>
        <button style={{color: "blue", cursor: "pointer"}} onClick={() => dispatch(goBackToLastPage())}>No, go back</button>
        <br/><br/><br/><br/><br/>
      </div>
    </div>
  )
}