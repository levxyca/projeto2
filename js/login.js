const btnModalLogin = document.getElementById("login__submit");
const btnModalRegister = document.getElementById("register__submit");

btnModalLogin.addEventListener("click", () => {
  const user = document.getElementById("user");
  const pass = document.getElementById("pass");

  let login = {
    email: user.value,
    password: pass.value,
  };

  var ajax = new XMLHttpRequest();

  ajax.open("POST", "https://reqres.in/api/login", true);
  ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  ajax.send(`email=${login.email}&password=${login.password}`);

  ajax.onreadystatechange = function () {
    const respostaErroLogin = document.querySelector(".modal__login-error");
    if (ajax.status == 200) {
      const title = document.querySelector(".modal__login-title");
      const titleSucesso = document.querySelector(
        ".modal__login-title-sucesso"
      );
      const form = document.querySelector(".modal__login-form");
      const home = document.querySelector(".home");
      const app = document.querySelector(".app");

      respostaErroLogin.classList.toggle("none");
      form.classList.toggle("none");
      title.classList.toggle("none");
      titleSucesso.classList.toggle("none");
      home.classList.toggle("none");
      app.classList.toggle("none");
    } else {
      respostaErroLogin.innerHTML =
        "Desculpe, ocorreu um erro ao tentar realizar o seu login.";
    }
  };
});

btnModalRegister.addEventListener("click", () => {
  const user = document.getElementById("userRegister");
  const pass = document.getElementById("passRegister");

  let register = {
    email: user.value,
    password: pass.value,
  };

  var ajax = new XMLHttpRequest();

  ajax.open("POST", "https://reqres.in/api/register", true);
  ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  ajax.send(`email=${register.email}&password=${register.password}`);

  ajax.onreadystatechange = function () {
    const respostaErroRegister = document.querySelector(
      ".modal__register-error"
    );
    if (ajax.status == 200) {
      const title = document.querySelector(".modal__register-title");
      const titleSucesso = document.querySelector(
        ".modal__register-title-sucesso"
      );
      const form = document.querySelector(".modal__register-form");

      respostaErroRegister.classList.toggle("none");
      form.classList.toggle("none");
      title.classList.toggle("none");
      titleSucesso.classList.toggle("none");
    } else {
      if (register.email == "" || register.password == "") {
        respostaErroRegister.innerHTML = "O campo não pode estar vazio!";
      } else if (register.email.length < 3 || register.password.length < 3) {
        respostaErroRegister.innerHTML =
          "Você precisa inserir mais de 3 dígitos!";
      } else {
        respostaErroRegister.innerHTML =
          "Por favor, preencha os campos corretamente!";
      }
    }
  };
});
