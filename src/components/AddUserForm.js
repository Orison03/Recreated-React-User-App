import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, connect } from "react-redux";
import { AddNewUser } from "../actions/userActions";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/configer";

function AddUserForm({ AddNewUser }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [jerseyNumber, setJerseyNumber] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    let addForm = { name, position, jerseyNumber, id: uuidv4() };
    await setDoc(doc(db, "allUsers", addForm.id),  addForm );
    // AddNewUser({ name, position,jerseyNumber, id: uuidv4() });
    setName("");
    setPosition("");
    setJerseyNumber("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Position</Form.Label>
        <Form.Control
          type="text"
          value={position}
          placeholder="Enter Position"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Jersey Number</Form.Label>
        <Form.Control
          type="number"
          value={jerseyNumber}
          placeholder="Enter Jersey Number"
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
const mapDispatch = { AddNewUser: AddNewUser };

export default connect(null, mapDispatch)(AddUserForm);
