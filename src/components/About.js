

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


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


                <h3 className="Center">
                  A passionate, back-end focused web developer.{" "}
                </h3>
                <Tabs
                defaultActiveKey="AboutMe"
                id="justify-tab"
                className="mb-1"
                
                >
              <Tab eventKey="AboutMe" title="About me">
                <div className="about-text">
                  <ul>
                    <li>
                    I have always had a growth mindset — there's simply too much to learn in one lifetime. 
                    I can't stop myself from taking time to dig deeper, discover more. You can be sure I'll be 
                    picking up many new technologies on my path in development.
                    </li>
                    <li>
                    Naturally, I work well with a team. It's my mission to serve those around me. When whipping up 
                    witty back ends, my code keeps in mind ease of access for the front end — so my work is not only 
                    thoughtful, but well-rounded.
                    </li>
                    <li>
                    For as long as I remember, I{"'"}ve been taking things apart and putting them back together. At my core, 
                    I am a developer. It{"'"}s how my brain works, what my passion is, and where my talents live.
                    </li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="Skills" title="Skills">



                <div className="about-text">
                  <ul>
                    <li>Creating fluid back ends from <u>endpoint to endpoint</u>, making the user experience for front-end developers seamless.</li>
                    <li>Accurate, thorough understanding of RESTful API's, practices, and applications. Making the code you want easier to work with and last longer.</li>
                    <li>Intuitive, efficient database management. I don't just want you to know the data, I want you to be able to use it — and 
                      experience it — the way you want to. Personalization & simplicity are my go-to's. </li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="Technicals" title="Technicals">
                <ul>
                <li>REST, ORM's, MVC's, PWA's, OOP, React, Packaging, Unit testing {"(Jest)"}, Git & GitHub. Lots of other goodies. </li>
                </ul>
              </Tab>

              <Tab eventKey="Languages" title="Languages" >
              <ul>
              <li>JavaScript, CSS, HTML 5, Python, C++ {"(rusty)"}.</li>
              </ul>

              </Tab>
                </Tabs>




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
