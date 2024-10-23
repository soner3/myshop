// Funktionen um den Dark und White mode zu implementieren
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
  const cookieArray = document.cookie.split("=");

  const [cookieThemeValue] = cookieArray.filter((cookieItem) => {
    return cookieItem === "light" || cookieItem === "dark";
  });

  if (cookieThemeValue) {
    return cookieThemeValue;
  } else {
    return null;
  }
}
