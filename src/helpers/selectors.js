/**
 * Get days that is related to today
 * @param {Obj} state React State
 * @param {String} day Day to filter by
 */
const getDays = function (state, day) {
  const newState = { ...state };
  if (!day || state.days.length < 1) {
    return [];
  }

  const days = newState.days.filter((el) => {
    return el.name === day;
  });

  if (days.length < 1) {
    return [];
  }
  return days;
};

export function getAppointmentsForDay(state, day) {
  const days = getDays(state, day);

  if (days.length < 1) return [];

  const appointments = days[0].appointments;

  if (appointments.length < 1) {
    return [];
  }

  return appointments.map((el) => {
    return state.appointments[el];
  });
}

export function getInterviewersForDay(state, day) {
  const days = getDays(state, day);

  if (days.length < 1 || days[0].interviewers.length < 1) return [];

  let interviewers = [];
  const interviewerIds = days[0].interviewers;

  interviewerIds.forEach((el) => {
    interviewers.push(state.interviewers[el]);
  });

  return interviewers;
}

export function getInterview(state, interview) {
  if (!interview) return null;
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
}
