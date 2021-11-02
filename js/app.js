const btnModalLogin = document.getElementById("login__submit");

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
    if (ajax.status == 200) {
      var data = ajax.responseText;
      console.log(data);
    } else {
      console.log("ERRO");
    }
  };
});
