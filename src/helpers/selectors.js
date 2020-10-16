export function getAppointmentsForDay(state, day) {
  if (!day || state.days.length < 1) {
    return [];
  }

  const newState = { ...state };

  const days = newState.days.filter((el) => {
    return el.name === day;
  });

  if (days.length < 1) {
    return [];
  }

  const appointments = days[0].appointments;

  if (appointments.length < 1) {
    return [];
  }

  return appointments.map((el) => {
    return state.appointments[el];
  });
}

export function getInterviewersForDay(state, day) {
  if (!day || state.days.length < 1) {
    return [];
  }

  const newState = { ...state };

  const days = newState.days.filter((el) => {
    return el.name === day;
  });

  if (days.length < 1) {
    return [];
  }

  const interviewersRes = [];

  const appointments = days[0].appointments;

  if (appointments.length < 1) {
    return [];
  }

  appointments.filter((el) => {
    return state.appointments[el].interview;
  });

  appointments.forEach((el) => {
    if (!state.appointments[el].interview) return;

    const interviewerId = state.appointments[el].interview.interviewer;
    interviewersRes.push(state.interviewers[interviewerId]);
  });

  // removes duplicate interviewers
  return [...new Set(interviewersRes)];
}

export function getInterview(state, interview) {
  if (!interview) return null;
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
}
