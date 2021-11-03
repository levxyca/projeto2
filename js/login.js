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
      var data = ajax.responseText;
      const title = document.querySelector(".modal__login-title");
      const titleSucesso = document.querySelector(
        ".modal__login-title-sucesso"
      );
      const form = document.querySelector(".modal__login-form");

      respostaErroLogin.classList.toggle("none");
      form.classList.toggle("none");
      title.classList.toggle("none");
      titleSucesso.classList.toggle("none");
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
    if (ajax.status == 200) {
      var data = ajax.responseText;
    } else {
      console.log("ERRO");
    }
  };
});
