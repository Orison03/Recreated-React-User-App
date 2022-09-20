import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EditUser } from "../actions/userActions";

function EditUserForm({ userData, deleteUser, handleEdit, hide }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(userData.name);
  const [position, setPosition] = useState(userData.position);
  const [jerseyNumber, setJerseyNumber] = useState(userData.jerseyNumber);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditUser({ id: userData.id, name, position, jerseyNumber }));
    setName("");
    setPosition("");
    setJerseyNumber("");
    hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Position</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Position"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>jersey Number</Form.Label>
        <Form.Control
          type="jerseyNumber"
          placeholder="Enter Jersey Number"
          value={jerseyNumber}
          onChange={(e) => {
            setJerseyNumber(e.target.value);
          }}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditUserForm;
