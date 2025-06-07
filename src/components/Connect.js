import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Youtube from "./Youtube";

function Connect() {
  return (
    <div className="content" id="contact">
      <div className="text">
        <h1>Connect</h1>
      </div>
      <div className="options">
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

export default Connect;