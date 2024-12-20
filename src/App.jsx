import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { usePrevious } from '@uidotdev/usehooks';
import { setPage } from './slicers/shared';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  //const [page, setPage] = useState("lives");
  const page = useSelector(state => state.shared.page)
  const dispatch = useDispatch();
  const lastPage = usePrevious(page);
  return (
      <div id="app">
        <p>Welcome to BadLife {page}</p>
        <button onClick={()=>dispatch(setPage("credits"))}><img className="credits" src="assets/credits.svg"/></button>
        <button onClick={()=>dispatch(setPage("faq"))}><img className="question" src="assets/question.svg"/></button>
      </div>
  )
}

export default App
