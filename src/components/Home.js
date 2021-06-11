import Logo from "./Logo";
import {useState} from 'react';

const BLUE = "#60c1eb";
const RED = "#fb5052";

function Home() {
  const [color, setColor] = useState(BLUE);
  const toggle = () => {
    setColor(old => old === BLUE ? RED : BLUE);
  }

  return (
    <div className="home">
      <div className="welcome" onMouseEnter={toggle} onMouseLeave={toggle}>
        <div className="welcome-inner">
          <div className="welcome-front">
            <div className="small" id="hey">
              Hey, I'm
            </div>
            <div>
              Edward Xing
            </div>
            <Logo id="logo"/>
          </div>
          <div className="welcome-back"/>
        </div>
      </div>
      <svg className="radial" viewBox="0 0 690 690">
        <circle className="main-circle" stroke={color + "90"}/>
        <circle className="main-circle" id="second" stroke={color + "60"}/>
        <circle className="main-circle" id="third" stroke={color + "40"}/>
      </svg>
    </div>
  );
}

export default Home;