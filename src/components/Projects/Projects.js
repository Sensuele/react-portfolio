import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/item-13.jpg";
import chatify from "../../Assets/Projects/item-14.jpg";
import chess from "../../Assets/Projects/chess.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Мои <strong className="purple">проекты </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess"
              description=""
              link="https://github.com/Sensuele/gameOfLife"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TicTacToe"
              description="Крестики нолики на React"
              link="https://github.com/Sensuele/tictactoe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Films"
              description="Поиск фильм и сериалов React"
              link="https://github.com/Sensuele/box-office"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
