function Project() {
  return (
    <div className="content" id="projects">
      <div className="text">
        <h1>Featured Projects</h1>
      </div>
      <div className="cards">
        <a href="https://github.com/zhouzypaul/deblur" className="project">
          <div className="card">
            <h2>Deblur</h2>
            <p>
              Text deblurring using L<sub>0</sub>-regularized intensity and gradient prior for blur kernel estimation through alternating minimization based on half-quadratic splitting.
            </p>
          </div>
        </a>
        <a href="https://github.com/exing1/split-it" className="project">
          <div className="card">
            <h2>Split</h2>
            <p>
              Bill splitting using optical character recognition and ChatGPT to parse receipts from photos. Winner of Nelson Center for Entrepreneurship Award at Hack@Brown2023.
            </p>
          </div>
        </a>
        <a href="https://github.com/seanxzhan/TaiChiMaster" className="project">
          <div className="card">
            <h2>Train</h2>
            <p>
              Real-time training using OpenPose for pose estimation and joint-angle similarity for accuracy measurement. Used to analyze correlation between exercise accuracy and effectiveness.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;