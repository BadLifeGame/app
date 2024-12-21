import { useEffect, useState } from 'react'
import '../css/App.css'
import { usePrevious } from '@uidotdev/usehooks';
import { setPage } from '../slices/shared'; 
import { useDispatch, useSelector } from 'react-redux';
import Lives from "./lives.jsx"
import Menu from './misc-menu.jsx';
import NewLifePage from './start-a-new-life.jsx';
import CreditsMenu from './credits.jsx';
import AchievementsMenu from './achievements.jsx';
import Life from './life.jsx';


function App() {
  //const [page, setPage] = useState("lives");
  const page = useSelector(state => state.shared.page)
  const dispatch = useDispatch();
  const lastPage = usePrevious(page);
  let PageComponent;
  switch (page) {
    case "lives": {
      PageComponent = Lives;
      break;
    }
    case "misc-menu": {
      PageComponent = Menu;
      break;
    }
    case "start-a-new-life": {
      PageComponent = NewLifePage;
      break;
    }
    case "credits": {
      PageComponent = CreditsMenu;
      break;
    }
    case "achievements": {
      PageComponent = AchievementsMenu;
      break;
    }
    case "life": {
      PageComponent = Life;
      break;
    }
    default: {
      PageComponent = "div"
    }
  }
  return (
      <div id="app">
        <PageComponent/>
      </div>
  )
}

export default App
