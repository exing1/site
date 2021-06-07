import Github from "./Github";
import Insta from "./Insta";
import LinkedIn from "./LinkedIn";
import Youtube from "./Youtube";

function Contact() {
  return (
    <div className="content" id="contact">
      <div className="text">
        <h1>Contact</h1>
        <p>
          Reach me at <a className="inline-link" href = "mailto: edward_xing@brown.edu">edward_xing@brown.edu</a> or connect with me on social media.
        </p>
      </div>
      <div className="options">
        <a className="social" href="https://www.instagram.com/edwardxing_/">
          <Insta/>
        </a>
        <a className="social" href="https://www.linkedin.com/in/edward-xing/">
          <LinkedIn/>
        </a>
        <a className="social" href="https://github.com/exing1">
          <Github/>
        </a>
        <a className="social" href="https://www.youtube.com/watch?v=UE9AvpJzG7E">
          <Youtube/>
        </a>
      </div>
    </div>
  );
}

export default Contact;