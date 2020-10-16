import React from "react";
import InterviewListItem from "components/InterviewerListItem";
import PropTypes from "prop-types";

import "components/InterviewList.scss";

const InterviewerList = function (props) {
  let interviewers = props.interviewers.filter(
    (interviewer) => interviewer != null
  );

  interviewers = interviewers.map((interviewer) => {
    console.log("TESTING", interviewer);
    return (
      <InterviewListItem
        key={interviewer.id}
        setInterviewer={(event) => {
          props.onChange(interviewer.id);
        }}
        selected={props.value === interviewer.id}
        {...interviewer}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
