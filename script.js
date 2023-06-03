"use strict";

1;
let divWraper = document.querySelector(".wraper");
let ulItem = document.createElement("u");

function apiRequest() {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then(function (responsJs) {
        responsJs.data.forEach((element) => {
          let liItem = document.createElement("li");
          liItem.innerText = `${element.email}`;
          ulItem.appendChild(liItem);
        });
      })
      .catch((error) => reject(error));
  });
}
divWraper.appendChild(ulItem);
apiRequest()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

2;

let divConteiner = document.querySelector(".conteiner");

async function asyncFunction() {
  let element = await fetch("https://reqres.in/api/users?page=2");
  if (element.status !== 200) {
    throw "error";
  }
  let responsInfo = await element.json();
  return responsInfo;
}

asyncFunction()
  .then((dataJs) => {
    dataJs.data.forEach((object) => {
      console.log(object);
      let liElement = document.createElement("li");
      liElement.innerText = `${object.first_name}`;
      let ulElement = document.createElement("ul");

      ulElement.appendChild(liElement);
      divConteiner.appendChild(ulElement);
    });
  })
  .catch((error) => console.log(error));
