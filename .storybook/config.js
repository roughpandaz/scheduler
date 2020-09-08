import { configure } from "@storybook/react";

function loadStories() {
  [
    require("../stories"), 
    require("../stories/interview.js"),
    require("../stories/appointment.js")
  ];
}

configure(loadStories, module);
