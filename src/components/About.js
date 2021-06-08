import Details from './Details';
import {useState, useEffect} from 'react';
import Popup from './Popup';

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
          <div className="stat">
            <h2>
              Top 3% Speedcuber
            </h2>
            <div className="sm">
              globally ranked,
              <br/>
              semifinalist in 8 competitions
            </div>
          </div>
          <div className="stat">
            <h2>
              Brown University
            </h2>
            <div className="sm">
              Applied Mathematics-Computer Science Sc.B. and Economics A.B.
              <br/>
              GPA: 4.0
            </div>
          </div>
          <div className="stat">
            <h2>
              Table Tennis Champion
            </h2>
            <div className="sm">
              2018 JOOLA North American Teams Championship
            </div>
          </div>
          <div className="stat">
            <h2>
              Professional Magician
            </h2>
            <div className="sm">
              with over 100 performances
            </div>
          </div>
          <div className="stat">
            <h2>
              Best Public Speaker
            </h2>
            <div className="sm">
              Brown Entrepreneurship Program Innovation Dojo Fall 2019 Cohort
            </div>
          </div>
          <div className="stat">
            <h2>
              Over 100k Views
            </h2>
            <div className="sm">
              on YouTube with over 2k likes
            </div>
          </div>
          <div className="stat">
            <h2>
              Over 100 Hours
            </h2>
            <div className="sm">
              of volunteer work for WCA, hospitals, and learning centers.
            </div>
          </div>
          <div className="stat">
            <h2>
              Hackathon Winner
            </h2>
            <div className="sm">
              Winner of the WolframAlpha and Contrary Venure Capital Awards at Hack@Brown 2021.
            </div>
          </div>
        </div>
        <button className="learn" onClick={display}>
            <strong>Learn More</strong>
        </button>
      </div>
      {showDetails ? <Popup message={<Details/>} toggle={display}/> : null}
    </>
  );
}

export default About;