// ZEYNEL'e Teşekkürler
let intA = document.getElementById("intA");
let intB = document.getElementById("intB");
const buttons = document.querySelectorAll(".btn-op");
let resultHeader = document.querySelector(".result");


function appSubmit() {
    if (document.getElementById("intA").value.length == 0 || document.getElementById("intB").value.length == 0) {
        alert("Sayı Giriniz")
        return false
    }
    else {

        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.addEventListener("click", () => {
                checkOperations(element.textContent, intA.value, intB.value);
            });
        }

        const checkOperations = (op, intA, intB) => {
            switch (op) {
                case "+":
                    requestMethod("add", intA, intB);
                    break;
                case "-":
                    requestMethod("subtract", intA, intB);
                    break;
                case "/":
                    requestMethod("divide", intA, intB);
                    break;
                case "*":
                    requestMethod("multiply", intA, intB);
                    break;
                default:
                    break;
            }
        };

        const base_url = "http://localhost:3000/";
        const requestMethod = (op, intA, intB) => {
            fetch(`${base_url + op}?intA=${intA}&intB=${intB}`)
                .then((response) => response.json())
                .then((data) => (resultHeader.textContent = data));
        };


    }
}