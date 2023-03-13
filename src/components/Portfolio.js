import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
          </ul>
        </div>
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">

        <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Study Bud</h5>
                <span>Live website to bring those looking to study together! with study chats, video chats, and so much more.</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="https://github.com/MiloCohenElyanow/study-Bud"
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-link"
                  >
                    {/* <span className="fab fa-github" /> */}
                    <span class="fab fa-github"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">PWA TEXT EDITOR</h5>
                <span>a progressive, packaged, classic text editor</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="https://github.com/MiloCohenElyanow/PWAText-Editor"
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-link"
                  >
                    {/* <span className="fab fa-github" /> */}
                    <span class="fab fa-github"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">ORM E-Commerce</h5>
                <span>This is an Object Relational Mapping backend application to simulate an E-Commerce website</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="https://github.com/MiloCohenElyanow/ORM-E_Commerce"
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-link"
                  >
                    {/* <span className="fab fa-github" /> */}
                    <span class="fab fa-github"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">API-Social Network</h5>
                <span>This is a API focused backend application to simulate a Social Network backend</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="https://github.com/MiloCohenElyanow/SocialNetwork-API"
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-link"
                  >
                    {/* <span className="fab fa-github" /> */}
                    <span class="fab fa-github"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">CMS-Employee Tracker</h5>
                <span>Content Management System for an employee database</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="https://github.com/MiloCohenElyanow/cmsEmployeeTracker"
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-link"
                  >
                    {/* <span className="fab fa-github" /> */}
                    <span class="fab fa-github"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Regex Hexcode matcher</h5>
                <span>A full guided tutorial on a regex that matches hexcodes</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="https://github.com/MiloCohenElyanow/regexHexMatcher"
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-link"
                  >
                    {/* <span className="fab fa-github" /> */}
                    <span class="fab fa-github"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
