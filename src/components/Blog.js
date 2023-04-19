
import Link from "next/link";
import React from "react";
import Image from "next/image"


import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Blog = () => {



  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Resume</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">

                {/* <Link href="https://drive.google.com/file/d/1h3YcazPB0KakZDU-Uh5LLqq56vM4qyuO/view?usp=sharing">
                </Link> */}
                <div>
                  <Container>
                  <a href="https://drive.google.com/file/d/12lH8p8s4A068FkRAnCC-X9o7yD-f7kHV/view?usp=sharing" target="_blank" rel="noreferrer">
                    <img src="static/img/pr222.PNG" title="" alt="" />
                  </a>
                  </Container>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
