function handleChangeFlexDirection(event) {
  let container = document.querySelector('#flex-direction-container');

  container.setAttribute('style', `flex-direction: ${event.srcElement.value}`);
}