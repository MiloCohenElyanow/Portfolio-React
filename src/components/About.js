const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a passionate back-end focused, web developer.{" "}
                </h3>
                <p>
                recently-graduated student from the University of Minnesota Coding Bootcamp. From 
                lightweight standalone Javascript content to fully-fledged MERN applications, I completed this 
                12-week intensive with high grades and high praise from instructors. Referrals upon request.
                </p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#ContactMeLink">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#PortfolioLink">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};
export default About;
