const ul = document.getElementById("323");
const container_led = document.getElementById("led");
const container_cientific = document.getElementById("cientific");
const cbox1 = document.getElementById("cbox1");
const cbox2 = document.getElementById("cbox2");
let acum = [];

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
      aritmetica(container_led.innerHTML);
    }
  }
});

function test(cuenta) {
  aux = 0;
  switch (cuenta[1]) {
    case "+":
      aux = parseInt(cuenta[0]) + parseInt(cuenta[2]);
      break;
    case "-":
      aux = parseInt(cuenta[0]) - parseInt(cuenta[2]);
      break;
    default:
      break;
  }
  return aux;
}

function aritmetica(numbers) {
  let calculate = FormatingNumbers(numbers);

  let limit = calculate.length - 1;
  let aux = 0;
  let resultado = 0;

  let cuenta = calculate.slice(0, 3);

  for (let index = 0; index < limit / 2; index++) {
    aux += 2;

    resultado = test(cuenta);

    cuenta = calculate.slice(aux, 3 + aux);

    cuenta[0] = resultado;
  }

  container_led.innerHTML = resultado;
}

function FormatingNumbers(numbers) {
  const limit = numbers.length;
  let aux = "";
  let index = 0;

  while (index < limit) {
    if (numbers[index] == "+" || numbers[index] == "-") {
      acum.push(aux);
      acum.push(numbers[index]);
      aux = "";
    } else {
      aux += numbers[index];
    }
    if (index == limit - 1) {
      acum.push(aux);
    }
    index++;
  }
  return acum;
}

cbox2.addEventListener("click", (e) => {
  if (e.target.checked) {
    container_cientific.classList.add("cbox1_active");
  } else {
    container_cientific.classList.remove("cbox1_active");
  }
});
