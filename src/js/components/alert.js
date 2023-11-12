export function alert() {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const appendAlert = (сообщение, тип) => {
    const обертка = document.createElement("div");
    обертка.innerHTML = [
      `<div class="alert alert-${тип} alert-dismissible" role="alert">`,
      `   <div>${сообщение}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(обертка);

    setTimeout(() => {
      обертка.remove();
    }, 7000);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      appendAlert("Поздравляю, вы вызвали это сообщение!", "success");
    });
  }
}
