let gpaScore = 6.5;
let type;
type = gpaScore >= 8 ? "hoc sinh gioi" :
    gpaScore >= 6.5 ? "hoc sinh kha" :
    gpaScore >= 5 ? "hoc sinh trung binh" :
    "hoc sinh yeu";
console.log(type);

console.log(caredSolve(1, -3, 2));
console.log(isPrimeNumber(53));

//ax^2 + bx + c = 0
function caredSolve() {
    let number1 = document.getElementById('txtNumber1').value;
    let number2 = document.getElementById("txtNumber2").value;
    let number3 = document.getElementById("txtNumber3").value;
    let delta = number2 * number2 - 4 * number1 * number3;
    document.getElementById("Result").value = delta < 0 ? "Vô nghiệm" :
        delta == 0 ? "Nghiệm kép x1 = x2 = " + (-number2 / 2 * number1) :
        "2 nghiệm x1 = " + (-number2 - Math.sqrt(delta)) / (2 * number1) + ", x2 = " + (-number2 + Math.sqrt(delta)) / (2 * number1);
}

function isPrimeNumber() {
    let number = document.getElementById('txtNumber4').value;
    let counter = 0;
    if (number == 2) {
        document.getElementById("Result2").value = "Số nguyên tố";
        return;
    }

    for (i = 1; i <= number; i++) {
        if (number % i == 0) {
            counter++;
        }
    }
    document.getElementById("Result2").value = counter == 2 ? "Số nguyên tố" : "Không phải số nguyên tố";
}