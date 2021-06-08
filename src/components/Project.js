function Project() {
  return (
    <div className="content" id="projects">
      <div className="text">
        <h1>Featured Projects</h1>
      </div>
      <div className="cards">
          <div className="card">
            <h2>CDN Caching</h2>
            <p>
              Research analyzing caching and eviction policies using Verizon’s Edgecast Caching Emulator by comparing traditional and tangential metrics.
            </p>
          </div>
          <div className="card">
            <h2>Rings</h2>
            <p>
              Time management web app that reimagines workflow productivity. Winner of the WolframAlpha and Contrary Venure Capital Awards at Hack@Brown 2021.
            </p>
          </div>
          <div className="card">
            <h2>Fork</h2>
            <p>
              Fully functional food recommendation web app for groups that finds restaurants and makes decisions based off of group preferences.
            </p>
          </div>
        </div>
    </div>
  );
}

export default Project;