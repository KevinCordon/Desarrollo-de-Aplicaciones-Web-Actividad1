import React from "react";
import { Card, Button } from "react-bootstrap";
import './Item.scss';

const dummyGoals = [
  {
    name: "Proyecto de Curso de desarrollo web",
    description: "Elaborar una aplicación web responsive en la que se pueda llevar control de mis metas y tareas personales",
    dueDate: "31/05/2024"
  },
  {
    name: "Terminar de leer libro",
    description: "Finalizar mi libro de React",
    dueDate: "31/05/2024"
  },
  {
    name: "Subir Actividad 1",
    description: "Responder el test en el GES correspondiente a la actividad 1",
    dueDate: "31/05/2024"
  },
  {
    name: "Contestar test relacionado a la actividad 1",
    description: "Ingresar al GES y responder test relacionado a la actividad 1",
    dueDate: "31/05/2024"
  }
];

function Item() {
  return (
    <div className="goal-list">
      {dummyGoals.map((goal, index) => (
        <Card style={{ width: '18rem' }} key={index} className="mb-3 goal-card">
          <Card.Body>
            <Card.Title><strong>Name</strong><br />{goal.name}</Card.Title>
            <Card.Text>
              <strong>Description</strong><br />{goal.description}
            </Card.Text>
            <Card.Text>
              <strong>Due Date:</strong> {goal.dueDate}
            </Card.Text>
            <Button variant="primary" className="w-100">Remover</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Item;