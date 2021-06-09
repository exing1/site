import Details from './Details';
import {useState, useEffect} from 'react';
import Popup from './Popup';
import Stats from './Stats';

function About() {
  const [showDetails, setDetails] = useState(false);
  const display = () => {
    setDetails(old => !old);
  };
  const closePopup = (e) => {
    if (e.target.className === "popup") {
      setDetails(false);
    }
  }
  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
      document.body.onclick = closePopup;
    } else {
      document.body.style.overflow = "auto";
      document.body.onclick = null;
    }
  }, [showDetails]);

  return (
    <>
      <div className="content" id="about">
        <div className="text">
          <h1>About Me</h1>
        </div>
        <div className="cards" id="stats">
          <Stats/>
        </div>
        <button className="learn" onClick={display}>
            <strong>Learn More</strong>
        </button>
      </div>
      {showDetails ? <Popup message={<Details close={display}/>} toggle={display}/> : null}
    </>
  );
}

export default About;