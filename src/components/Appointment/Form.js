import React, {useState, useEffect} from 'react'
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = (props) => {
  // name:String
  // interviewer:Number
  const [name, setName] = useState("");
  const [interviewer, setInterviewer] = useState("");
  
  const handleFormChange = (event) =>{
    setName(event.target.value);
  }

  const reset = ()=>{
    setInterviewer(null);
    setName("");
  }

  const onSave = () =>{
    console.log(name, interviewer)
    if(name && interviewer){
      props.onSave(name, interviewer);
      reset();
    } else {
      alert("Please choose interviewer")
    }
  }

  const onCancel = ()=>{
    props.onCancel();
    reset();
  }

  useEffect(()=>{
    console.log("props.name", props.name)
    setName(()=>{
      return props.name;
    });
  }, [props.name])

  useEffect(()=>{
    setInterviewer(()=>{
      return props.interviewer;
    });
  }, [props.interviewer])
  
  return (
    <>
      {console.log("K", props.interviewer, interviewer)}
      <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
          <form autoComplete="off" onSubmit={event => event.preventDefault()}>
            <input
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              value={name}
              placeholder="Enter Student Name"
              onChange = {handleFormChange}
              /*
                This must be a controlled component
              */
            />
          </form>
          <InterviewerList 
            interviewers={props.interviewers} 
            value={interviewer} 
            onChange={setInterviewer} />
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button 
              onClick={onCancel}
              danger
              >Cancel</Button>
            <Button 
              onClick={onSave}
              confirm
            >Save</Button>
          </section>
        </section>
      </main>
    </>
  )
}

export default Form
