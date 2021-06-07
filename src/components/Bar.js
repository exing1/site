import Logo from "./Logo";
import { HashLink } from 'react-router-hash-link';

function Bar() {
  return (
    <div className="stick">
      <div className="bar">
        <HashLink smooth to="#start">
          <Logo id="main" path="main-path"/>
        </HashLink>
        <div className="options">
          <HashLink className="link" smooth to="#about">
            About
          </HashLink>
          <HashLink className="link" smooth to="#projects">
            Projects
          </HashLink>
          <HashLink className="link" smooth to="#contact">
            Contact
          </HashLink>
        </div>
      </div>
      <div className="line"/>
    </div>
  );
}

export default Bar;