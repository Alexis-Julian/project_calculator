const ul = document.getElementById("323");
const container_led = document.getElementById("led");

ul.addEventListener("click", (e) => {
  if (e.target.localName == "li") {
    let number = e.target.innerHTML;
    if (!(number == "=")) {
      if (container_led.innerHTML == "0") {
        container_led.innerHTML = number;
      } else {
        container_led.innerHTML += number;
      }
    } else {
      aritmetica(number);
    }
  }
});
let acum = [];

function aritmetica(operator) {
  /* const limit = container_led.innerHTML.length; */
  let aux = "";
  let acumm = 0;
  const asd = "523+235-532+";
  const limit = asd.length;
  for (let index = 0; index < limit; index++) {
    if (asd[index] === "+" || asd[index] === "-") {
      acum.push(aux);
      acum.push(asd[index]);
      aux = "";
    } else {
      aux += asd[index];
    }
  }
  console.log(acum);
}
aritmetica();
