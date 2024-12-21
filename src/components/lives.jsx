import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../slices/shared";
import CreditImage from "../assets/credits.svg";
import FAQImage from "../assets/question.svg";

export default function Lives() {
    const page = useSelector(state => state.shared.page)
    const dispatch = useDispatch();
    return (
    <div>
        <p role="button" onClick={()=>dispatch(setPage("start-a-new-life"))} style={{color: "blue", textDecorationLine: "underline", cursor: "pointer"}}>Start a new life</p>
        <p role="button" onClick={()=>dispatch(setPage("life"))} style={{color: "blue", textDecorationLine: "underline", cursor: "pointer"}}>Continue life</p>
        <p>Welcome to BadLife {page}</p>
        <button className="top-left credits" style={{marginLeft: "5px"}} onClick={()=>dispatch(setPage("misc-menu"))}>MENU</button>
        <button onClick={()=>dispatch(setPage("credits"))}><img hidden className="top-left credits" src={CreditImage}/></button>
        <button onClick={()=>dispatch(setPage("faq"))}><img className="question" src={FAQImage}/></button>
    </div>
    )
}