import React from "react";
import classNames from "classnames/bind";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });

  const formatSpots = () => {
    const spots = props.spots;
    if (spots < 1) {
      return "no spots remaining";
    }
    if (spots % 2 === 0) {
      return `${props.spots} spots remaining`;
    }
    return `${props.spots} spot remaining`;
  };

  return (
    <li
      data-testid="day"
      className={dayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
