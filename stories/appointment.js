import React, {Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Appointment from "components/Appointment";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />)
  .add("Appointment Empty", () => (
    <Fragment>
      <Appointment id={1} time="12pm" />
      <Appointment id="last" time="1pm" />
    </Fragment>
  ))
  .add("Appointment Booked", () => (
    <Fragment>
      <Appointment
        id={1}
        time="12pm"
        interview={{ student: "Lydia Miller-Jones", interviewer }}
      />
      <Appointment id="last" time="1pm" />
    </Fragment>
  ))
  .add("Header", () => <Header time="12pm" />)
  .add("Empty", () => <Empty onAdd={action("onAdd")}/>)
  .add("Show", () => <Show 
                        student = {"Bab Binga"}
                        interviewer = {interviewer}
                        onEdit={action("onEdit")}
                        onDelete={action("onDelete")}
                        />)
  .add("Confirm", () => <Confirm message="Cancelling"
                          onCancel={action("onCancel")}
                          onClick={action("onClick")}
                        />)
  .add("Status", () => <Status message="Deleting"/>)
  .add("Error", () => <Error message="Deleting" onClose={action("onClose")}/>)
  .add("Edit Form", () => <Form 
                        name="Archie Cohen" 
                        interviewers={interviewers} 
                        interviewer={2}
                        onSave={action("onSave")}
                        onCancel={action("onCancel")}
                        />)
  .add("Create Form", () => <Form
                        interviewers={interviewers} 
                        onSave={action("onSave")}
                        onCancel={action("onCancel")}
                        />)
