import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/item-13.jpg";
import emotion from "../../Assets/Projects/item-1.jpg";
import editor from "../../Assets/Projects/item-12.jpg";
import chatify from "../../Assets/Projects/item-14.jpg";
import suicide from "../../Assets/Projects/item-11.jpg";
import bitsOfCode from "../../Assets/Projects/portfolio-1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Мои <strong className="purple">проекты </strong>
        </h1>
        <p style={{ color: "white" }}>
          Тут несколько проектов, разработанных мной.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
              description="Поиск фильм и сериалов React (pet project)"
              link="https://github.com/Sensuele/box-office"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Parmesan"
              description="Доставка пиццы и суши. Сайт сделан на Wordpress"
              link="https://parmessan-pizza.ru/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="WhyNot?"
              description="Доставка цветов и косметики. Сайт сделан на Wordpress"
              link="https://whynotflowers.ru/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Технопарк"
              description="Газпром. Технопарк промышленной автоматизации"
              link="https://capas.ru/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
