const search = document.getElementById("app_btn");

search.addEventListener("click", () => {
  var ajax = new XMLHttpRequest();

  ajax.open("GET", "https://foodish-api.herokuapp.com/api", true);

  ajax.send();

  ajax.onreadystatechange = function () {
    if (ajax.status == 200) {
      var data = ajax.responseText;
      document.getElementById("app__image").src = data.slice(10, -2);
    } else {
      console.log("ERRO");
    }
  };
});
