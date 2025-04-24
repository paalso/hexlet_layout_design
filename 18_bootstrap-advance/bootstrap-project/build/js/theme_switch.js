const darkModeSwitchInput = document.querySelector('input#darkModeSwitch');
const bodyTag = document.querySelector('[data-tag="dark-light-theme-section"]');

console.log('✅ theme_switch.js подключён и работает!');
if (darkModeSwitchInput && bodyTag) {
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
}
