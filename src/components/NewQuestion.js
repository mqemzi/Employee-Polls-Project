import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = ({ authedUser, dispatch }) => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const navigate = useNavigate();

  const question = {
    optionOneText,
    optionTwoText,
    author: authedUser,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(question));
    setOptionOneText("");
    setOptionTwoText("");
    navigate("/");
  };

  return (
    <Form className="form-new-question" onSubmit={handleSubmit}>
      <h1>Would You Rather</h1>
      <p className="text-center">Create Your Own Poll</p>
      <Form.Group className="mb-3" controlId="firstOption">
        <Form.Label>First Option</Form.Label>
        <Form.Control
          placeholder="Option One"
          type="text"
          name="option1"
          value={optionOneText}
          onChange={(e) => setOptionOneText(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="secondOption">
        <Form.Label>Second Option</Form.Label>
        <Form.Control
          placeholder="Option Two"
          type="text"
          name="option1"
          value={optionTwoText}
          onChange={(e) => setOptionTwoText(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
