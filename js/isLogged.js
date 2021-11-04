function check() {
  const logged = localStorage.getItem("logged");
  if (logged == "true") {
    const home = document.querySelector(".home");
    const app = document.querySelector(".app");

    home.classList.toggle("none");
    app.classList.toggle("none");
  }
}

window.onload = check;
