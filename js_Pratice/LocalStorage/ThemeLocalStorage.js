window.document.title = "ThemeLocalStorage";

const btn = document.getElementsByTagName("button")[0];
const banner = document.querySelector(".banner");

btn.addEventListener("click", Themechange);

function Themechange() {
  banner.classList.toggle("dark");
  const isDarkTheme = banner.classList.contains("dark");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "blue"); //light is dummuy value
}

window.addEventListener("DOMContentLoaded", function () {
  const themeSet = this.localStorage.getItem("theme");
  console.log(themeSet);
  if (themeSet === "dark") {
    banner.classList.add("dark");
  }
});
