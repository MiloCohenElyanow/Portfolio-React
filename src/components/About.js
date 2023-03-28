
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
                  <img src="static/img/headshot-vignet.png" title="Milo Cohen-Elyanow Headshot polygon style" alt="Milo Cohen-Elyanow Headshot polygon style" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">


              <div className="title">
                <h3>About me</h3>
              </div>


              <div className="about-text">
                <h3 className="Center">
                  {`I'm`} a passionate back-end focused web developer.{" "}
                </h3>
                  <ul>
                    <li>
                      "Growth Mindset". I have always had a growth mindset. But up until now, diving deep into development, it hardly mattered. Now my growth mindset
                      benefits me greatly! Theres simply to much to learn in one lifetime, and I am one stubborn nail, I cant stop myself from taking time to understand 
                      something I don't. So you can be sure, I'll be picking up lots of new technology's on my path in development.
                    </li>
                    <li>
                      Team based development. Naturally I work well in a team. With a team it's my mission
                      to serve those around me. I'm not much of one for UI/UX to be honest, but when whipping up witty back ends my code is based on the ease of access
                      for the front end. I diligently stick to this principle behind well rounded back end development.
                    </li>
                    <li>
                      Passionate about coding! I haven't stopped trying to take things apart, and put them back together, since I was little.
                      This is the core principle behind <u>ME</u>. Its how my brain works. That's only one of the reasons I make a "good" developer.
                    </li>
                  </ul>
              </div>
                <div className="about-info">
                  <h3 className="title"> <u> ~ Skills ~ </u></h3>
                </div>
                <div className="about-text">
                  <ul>
                    <li><u>TECHNICALS</u>: REST, ORM's, MVC's, PWA's, OOP, React, Packaging, Unit testing {"(Jest)"}, Git & GitHub. Lots of other goodies. </li>
                    <li><u>LANGUAGES</u>: JavaScript, CSS, HTML 5, Python, C++ {"rusty"}.</li>
                    <li>Creating fluid Back-ends from <u>endpoint to endpoint</u>, making the user experience for front end developers easy.</li>
                    <li>Accurate, thorough understanding of REST Apis, Practices, & applications. Making the code you want easier to work with, and last longer.</li>
                    <li>Intuitive, efficient database management. I don't just want you to know the data, I want you to be able to work with it, with the code I write!</li>
                  </ul>

                </div>




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
        <div className="separated" />
      </div>
    </section>
  );
};
export default About;
