import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [upadteSpojRank] = useState(0);
  const [upadteHackerank] = useState(0);
  const [upadateSem] = useState(0);
  const [upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend developer 'ADCI Solutions'"
              date="Март 2019 - Декабрь 2021"
              content={["разработка веб приложений на React JS и Vue"]}
            />
            <Resumecontent
              title="Frontend developer 'Exelo'"
              date="Декабрь 2021 - Август 2022"
              content={["Разработка веб приложений компании на Vue"]}
            />
            <Resumecontent
              title="Frontend developer 'Nemo travel'"
              date="Сентябрь 2022 - Июнь 2023"
              content={["Разработка CRM на Vue 3"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="ОмГАУ им П.А. Столыпина"
              date="2011 - 2015"
              content={["Инженер-технолог продуктов из растительного сырья"]}
            />
            <Resumecontent
              title="ОмГАУ им П.А. Столыпина"
              date="2015 - 2016"
              content={["Энергоснабжение, промышленные логические контроллеры"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
