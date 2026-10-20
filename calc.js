const num1 = document.getElementById("first-number");
const num2 = document.getElementById("second-number");
const result = document.getElementById("result");

document.getElementById("add").addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);
    result.textContent = `${a} + ${b} = ${a + b}`;
    result.style.color = "green";
});

document.getElementById("subtract").addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);
    result.textContent = `${a} - ${b} = ${a - b}`;
    result.style.color = "red";
});

document.getElementById("multiply").addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);
    result.textContent = `${a} x ${b} = ${a * b}`;
    result.style.color = "blue";
});

document.getElementById("divide").addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);
    result.textContent = `${a} / ${b} = ${a / b}`;
    result.style.color = "purple";
});
