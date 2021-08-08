import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Привет, меня зовут <span className="purple">Евгений </span>.
            Я из <span className="purple"> Омска.</span>
            <br />Свой путь в программировании я начал с прохождения курсов в Академии верстки. Прошел курсы про верстке, JS, React.
            <br /> Устроился в веб-студию Laika веб-разработчиком. Создавал многостраничные сайты и интернет магазины на Wordpress.
            <br />
            Затем перешел в веб-студию ADCI Solutions, где занимаю должность фронтенд разработчика на React.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
