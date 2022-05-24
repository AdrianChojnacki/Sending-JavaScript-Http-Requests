const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  fetch("https://reqres.in/api/users").then(response => {
    console.log(response);
  });
};

const sendData = () => {};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
