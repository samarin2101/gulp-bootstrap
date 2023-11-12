import "../../../node_modules/inputmask/dist/inputmask.js";
export function masks() {
  let selectors = document.querySelectorAll(".phone");
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selectors);
}
