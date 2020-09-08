import React from "react";
import classNames from 'classnames/bind';

import "components/InterviewerListItem.scss"

const InterviewerListItem = function(props){

  const interviewerClass = classNames({"--selected": props.selected})

  return (
    <li className={`interviewers__item${interviewerClass}`} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.avatar}
      />
      {props.name}
    </li>
  );
}

export default InterviewerListItem;