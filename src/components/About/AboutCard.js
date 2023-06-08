import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Привет! Я занимаюсь фронтендом с 2019-го года.
          Мои навыки:
          <ul>
            <li>Семантическая, кроссбраузерная и адаптивная верстка.</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Vue 2/3 + Vuex (Pinia)</li>
            <li>Webpack</li>
            <li>Git</li>
            <li>оценка и декомпозирование задач;</li>
            <li>Английский язык: intermediate.</li>
            <li>Опыт разработки коммерческих продуктов;</li>
            <li>Работа с легаси, разбор и чтение чужого кода, рефакторинг;</li>
          </ul>
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
