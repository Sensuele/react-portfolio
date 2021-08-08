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
              title="веб-разработчик 'Laika'"
              date="Май 2019 - Октябрь 2020"
              content={[
                "верстка макетов",
                "посадка верстки на Wordpress",
                "создание шаблонов на Wordpress",
              ]}
            />
            <Resumecontent
              title="frontend developer 'ADCI Solutions'"
              date="Октрябрь 2020 - по настоящее время"
              content={["разработка веб приложений на React JS"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="ОмГАУ им П.А. Столыпина"
              date="2011 - 2015"
              content={["Инженер-технолог продуктов из растительного сырья"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Resume;
