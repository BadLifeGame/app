import Perfection from "../assets/achievements/perfection.png";
import StrikeRich from "../assets/achievements/strike-it-rich.png";
import Achach from "../assets/achievements/achach.png";
import RichBastard from "../assets/achievements/rich-bastard.png";
import SpareChange from "../assets/achievements/spare-some-change.png";
import HardenedCriminal from "../assets/achievements/hardened-criminal.png"
import Jailbird from "../assets/achievements/jailbird.png";
import WaitNo from "../assets/achievements/wait-no.png";
import DoIUseMyMouth from "../assets/achievements/do-i-use-my-mouth.png";
import FirstTimer from "../assets/achievements/first-timer.png";
import WaitIGetSomething from "../assets/achievements/wait-i-get-something.png"

import BackArrow from "./backArrow";

export default function AchievementsMenu() {
  return (
    <div>
      <BackArrow/>
      <h1>Achievements</h1>
      <p style={{fontSize: "1.5em"}}><b>0 Stars</b></p>
      <p style={{fontSize: 14/16 + "em"}}>0 / 34 Achievements</p>
      <p><i>Each difficulty awards a different number of stars.<br/>Effortless = 1, Easy = 2, Medium = 4, Hard = 7, Extreme = 12, and Diabolical = 18.</i></p><br/>
      <p style={{fontSize: 20/16 + "em", color: "green"}}>Money: $0</p><br/>
      <img src={Perfection} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="0-details">Unachieved | Difficulty: Medium | Reward: 4 Stars</p><br/>
      <img src={StrikeRich} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="1-details">Unachieved | Difficulty: Easy | Reward: 2 Stars</p><br/>
      <img src={Achach} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="2-details">Unachieved | Difficulty: Effortless | Reward: 1 Star</p><br/>
      <img src={RichBastard} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="3-details">Unachieved | Difficulty: Hard | Reward: 7 Stars</p><br/>
      <img src={SpareChange} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="4-details">Unachieved | Difficulty: Easy | Reward: 2 Stars</p><br/>
      <img src={HardenedCriminal} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="5-details">Unachieved | Difficulty: Medium | Reward: 4 Stars</p><br/>
      <img src={Jailbird} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="6-details">Unachieved | Difficulty: Medium | Reward: 4 Stars</p><br/>
      <img src={WaitNo} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="7-details">Unachieved | Difficulty: Hard | Reward: 7 Stars</p><br/>
      <img src={DoIUseMyMouth} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="8-details">Unachieved | Difficulty: Medium | Reward: 4 Stars</p><br/>
      <img src={FirstTimer} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="9-details">Unachieved | Difficulty: Effortless | Reward: 1 Stars</p><br/>
      <img src={WaitIGetSomething} style={{width: "20%", display: "block", margin: "0 auto", borderRadius: "10px"}}/>
      <p id="10-details">Unachieved | Difficulty: Medium | Reward: 4 Stars, $1,000</p><br/>
    </div>
  )
}