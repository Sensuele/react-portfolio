import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiGit,
  DiSass,
} from "react-icons/di";
import { SiEslint, SiTypescript, SiWebpack } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span>Javascript</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <span>TypeScript</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span>Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiVuejsFill />
        <span>Vue</span>
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
