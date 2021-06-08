import { HashLink } from 'react-router-hash-link';
import Youtube from "./Youtube";

function Details() {
  return (
    <div className="details">
      <div className="pop-content">
        <div className="text" id="pop">
          <h1>More About Me</h1>
          <p>
            My name is Edward Xing. I am a student at Brown University, class of 2023, studying Applied Mathematics-Computer Science and Economics. Although I entered college having never touched computer science, I have fallen in love with the power it gives me to leverage creativity and bring ideas to life in a way that is unique to me. Throughout my experiences, I have thoroughly explored the intersections of computer science with other fields and found that those which require a synergy of knowledge to be the most rewarding. From being a data analyst to a teaching assistant, I have refined my skillset and strengthened my understanding of core computer science concepts. Through my <HashLink className="inline-link" smooth to="#projects">projects</HashLink>, I am the most comfortable using computer programming languages such as Java, C++, and Javascript but have ample experience in mathematical languages such as R, SAS, and Matlab.
          </p>
          <p>
            My other interests stem from my propensity towards problem-solving. I am an avid speedcuber with an official record of 9.94 seconds for the 3x3 Rubik's cube. I have spent countless hours developing algorithm sets, modifying underlying mechanisms, and analyzing patterns. That same drive to obtain results has helped improve my abilities as a professional magician. I have performed for people of all walks of life, from corporate executives to cruise ship captains. To amaze them, I have crafted novel illusions and relentlessly practiced sleight-of-hand, requiring a similar kind of ingenuity and creativity that makes the magic of computer science possible. Yet personal well-being is not comprised solely of the mind but the body as well. I continue to train as a member of Brown's table tennis team where I coach new players and compete in collegiate tournaments. In the past, I have won the 2018 Joola North American Teams Championship. To get a better glimpse into my life, take a look below.
          </p>
        </div>
        <iframe className="video" src="https://www.youtube.com/embed/UE9AvpJzG7E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <a className="social" id="mobile-video" href="https://www.youtube.com/watch?v=UE9AvpJzG7E">
          <Youtube/>
        </a>
      </div>
    </div>
  );
}

export default Details;