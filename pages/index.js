
import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});


const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h1 className="font-alt">Milo C-E</h1>
                  <p className="lead">
                    Web Developer
                  </p>
                  <p className="desc">
                    Creating seamless back ends for full-stack applications.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="https://drive.google.com/file/d/12lH8p8s4A068FkRAnCC-X9o7yD-f7kHV/view?usp=sharing">
                      Download resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/headshotAnimation.gif" title="Milo Cohen-Elyanow headshot animation" alt="Milo Cohen-Elyanow headshot animation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About/>

      <Portfolio/>

      <Blog/>

      <Contact/>

    </Layout>
  );
};
export default Index;
