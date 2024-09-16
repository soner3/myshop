export function applyTheme() {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function applyLightMode() {
  localStorage.theme = "light";
  applyTheme();
}

export function applyDarkMode() {
  localStorage.theme = "dark";
  applyTheme();
}
