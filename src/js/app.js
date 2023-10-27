import Collapsable from "./collapsable/collapsable";

document.addEventListener("DOMContentLoaded", () => {
  const collapsableElements = document.querySelectorAll(".collapsable");
  const collapsables = [...collapsableElements].map(el => new Collapsable(el))
});
