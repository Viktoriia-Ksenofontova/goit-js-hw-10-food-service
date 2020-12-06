const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

getSettings();

refs.checkbox.addEventListener('change', onSwitchToggleChange);

function onSwitchToggleChange() {
  if (refs.checkbox.checked) {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  }
  else {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  }
};


function getSettings() {
   const savedTheme = localStorage.getItem('theme');
    if (savedTheme === Theme.DARK) {
      refs.checkbox.checked = true;
      refs.body.classList.add(Theme.DARK);
    }
  else {
    refs.body.classList.add(Theme.LIGHT);
  }
   
}