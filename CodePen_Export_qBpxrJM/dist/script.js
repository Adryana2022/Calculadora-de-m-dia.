const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const one = document.querySelector("#input1");
  const two = document.querySelector("#input2");
  const three = document.querySelector("#input3");
  const four = document.querySelector("#input4");
  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);
  const c = parseFloat(input3.value);
  const d = parseFloat(input4.value);
  const calcMedia = (a + b + c + d) / 4;
  if (calcMedia >= 7) {
    console.log("Parabéns você está Aprovado");
  }
  document.querySelector("#calcResultadoLayer").innerHTML =
    "Resultado: " + calcMedia;
});