export function applyTheme() {
  if (
    getThemeCookie() === "dark" ||
    (getThemeCookie() !== "light" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function applyLightMode() {
  document.cookie = "theme=light; path=/;";
  applyTheme();
}

export function applyDarkMode() {
  document.cookie = "theme=dark; path=/;";
  applyTheme();
}

function getThemeCookie() {
  const [cookieName, cookieValue] = document.cookie.split("=");
  if (cookieName === "theme") {
    return cookieValue;
  } else {
    return null;
  }
}
