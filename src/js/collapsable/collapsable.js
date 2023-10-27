import "./collapsable.css";

export default class Collapsable {
  constructor(element) {
    this.element = element;
    this.button = element.querySelector(".button");
    this.target = element.querySelector(".collapse");
    this.init();
  }

  init() {
    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      this.element.classList.toggle("collapsable_show");
      this.target.classList.toggle("collapse_show");
    });
  }
}