import Logo from "./Logo";

function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <div className="welcome-inner">
          <div className="welcome-front">
            <div className="small" id="hey">
              Hey, I'm
            </div>
            <div>
              Edward Xing
            </div>
            <Logo id="logo" height="64" width="64"/>
          </div>
          <div className="welcome-back"/>
        </div>
      </div>
    </div>
  );
}

export default Home;