import React, { useState, useEffect } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = (props) => {
  // name:String
  // interviewer:Number
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer);
  const [error, setError] = useState("");

  const handleFormChange = (event) => {
    setName(event.target.value || "");
  };

  const reset = () => {
    setInterviewer(null);
    setName("");
  };

  const onSave = () => {
    validate();
    if (name && interviewer) {
      props.onSave(name, interviewer);
      reset();
    }
  };

  const onCancel = () => {
    props.onCancel();
    reset();
  };

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
  }

  useEffect(() => {
    setInterviewer(() => {
      return props.interviewer;
    });
  }, [props.interviewer]);

  return (
    <>
      <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
          <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <input
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              value={name}
              placeholder="Enter Student Name"
              onChange={handleFormChange}
              data-testid="student-name-input"
              /*
                This must be a controlled component
              */
            />
            <section className="appointment__validation">{error}</section>
          </form>
          <InterviewerList
            interviewers={props.interviewers}
            value={interviewer}
            onChange={setInterviewer}
          />
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button onClick={onCancel} danger>
              Cancel
            </Button>
            <Button onClick={onSave} confirm>
              Save
            </Button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Form;
