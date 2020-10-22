import { useState, useEffect } from "react";
import axios from "axios";
// import { data } from "cypress/types/jquery";

/**
 * Custom hook to fetch all data required for the application
 */
const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => {
    setState((prev) => ({ ...prev, day }));
  };

  const setSpot = (increase, selectedDay) => {
    setState((prev) => {
      let tempState = { ...prev };
      tempState.days.filter((day) => {
        if (day.name === selectedDay) {
          return increase ? day.spots++ : day.spots--;
        }
      });
      return tempState;
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => {
        //   //*** IMPORTANT: MUST INCLUDE PREVBIOUS STATE */
        const resObj = {
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        };

        return resObj;
      });
    });
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, appointment).then((res) => {
      setState({
        ...state,
        appointments,
      });
    });
  }

  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`, appointment).then((res) => {
      setState({
        ...state,
        appointments,
      });
    });
  };

  return { state, setDay, setSpot, bookInterview, cancelInterview };
};

export default useApplicationData;
