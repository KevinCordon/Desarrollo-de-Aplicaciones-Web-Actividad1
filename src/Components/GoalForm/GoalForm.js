import React from "react";
import { Form, Button } from "react-bootstrap";
import './GoalForm.scss';

function GoalForm() {
  return (
    <Form className="goal-form" style={{ width: '30rem' }}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Goal name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="Goal description" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        ADD GOAL
      </Button>
    </Form>
  );
}

export default GoalForm;