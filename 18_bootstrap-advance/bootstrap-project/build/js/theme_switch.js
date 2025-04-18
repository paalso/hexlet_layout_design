const darkModeSwitchInput = document.querySelector('input#darkModeSwitch');
const bodyTag = document.querySelector('[data-tag="dark-light-theme-section"], [data-tag="dark-light-theme-section"]');

const themeSwitch = () => {
  const currentState = bodyTag.getAttribute('data-bs-theme');

  switch (currentState) {
    case "light":
      bodyTag.setAttribute('data-bs-theme', "dark");
      break;
    default:
      bodyTag.setAttribute('data-bs-theme', "light");
  }
};

darkModeSwitchInput.addEventListener('change', themeSwitch);
