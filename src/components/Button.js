import React from "react";
import classNames from 'classnames/bind';

import "components/Button.scss";
   
export default function Button(props) {
  let buttonClass = classNames("button", { 
    "button--confirm": props.confirm, 
    "button--alert": props.alert,
    "button--danger": props.danger,
    "button--warning": props.warning })

  return (
    <button 
      disabled={props.disabled} 
      onClick={props.onClick}
      className={buttonClass}
    >
      {props.children}
    </button>);
}
