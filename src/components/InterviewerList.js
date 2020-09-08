import React from "react";
import InterviewListItem from "components/InterviewerListItem";
import "components/InterviewList.scss"

const InterviewList = function(props){

  const interviewers = props.interviewers.map((interviewer)=>{
    if (interviewer){
      console.log("CHOOSEN", props.interviewer, props.value)
      return (<InterviewListItem 
        key={interviewer.id}
        setInterviewer={event => {
          props.onChange(interviewer.id)
        }}
        selected = {props.value === interviewer.id}
        {... interviewer}
      />)
    }
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  )
}

export default InterviewList;