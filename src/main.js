async function test(params) {
  console.log("HI!");
}

function component() {
  var element = document.createElement("div");

  element.innerHTML = "study good";
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());
