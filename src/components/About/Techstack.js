import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiSass,
} from "react-icons/di";
import { SiEslint, SiFirebase, SiWebpack } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span>Javascript</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span>React</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span>Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <span>Firebase</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEslint />
        <span>EsLint</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
        <span>Webpack</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <span>Sass</span>
      </Col>
      
    </Row>
  );
}

export default Techstack;
