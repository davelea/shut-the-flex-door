function handleChangeFlexDirection(event) {
  let container = document.querySelector('#flex-direction-container');

  container.setAttribute('style', `flex-direction: ${event.srcElement.value}`);
}

function handleChangeOrder(event) {
  let element = event.srcElement;

  if (element.checkValidity()) {
    let container = event.srcElement.closest('.stfu__example-div');

    container.setAttribute('style', `order: ${event.srcElement.value}`);
  }
}