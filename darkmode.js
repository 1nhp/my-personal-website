

let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.querySelector(".theme-switch");

const enableLightmode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "active");
};

const disableLightmode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
};

if (lightmode === "active") enableLightmode();

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  lightmode !== "active" ? enableLightmode() : disableLightmode();
});

const img = document.querySelector(".img1");

function showiframe() {
  prepareFrame();
  img.style.opacity = "0";
  img.style.transform = "scale(0, 0)";
  img.style.transition = "0.8s";
  setTimeout(() => {
    img.remove();
  }, 500);
}

function prepareFrame() {
  var ifrm = document.createElement("iframe");
  const myDiv = document.querySelector(".giprn");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/Mbm9DDlgBo0");
  ifrm.style.width = "100%";
  ifrm.style.height = "400px";
  myDiv.appendChild(ifrm);
}
