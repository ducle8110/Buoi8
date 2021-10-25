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

function getPrimeNumber() {
    document.getElementById("Result2").value = "";
    let number = document.getElementById('txtNumber4').value;

    for (i = 1; i <= number; i++) {
        let counter = 0;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                counter++;
                break;
            }
        }
        if (counter == 0 && i != 1) {
            document.getElementById("Result2").value += i + ",";
        }
    }
}

function getTotalFrom1Ton() {
    document.getElementById("Result5").value = "";
    let number = Number(document.getElementById('txtNumber5').value);
    document.getElementById("Result5").value = (number * (number + 1)) / 2;
}

function getTotalSquareFrom1Ton() {
    document.getElementById("Result6").value = "";
    let number = Number(document.getElementById('txtNumber6').value);
    let total = 0;
    for (i = 1; i <= number; i++) {
        total += i * i;
    }
    document.getElementById("Result6").value = total;
}

function getTotalOddNumberFrom1Ton() {
    document.getElementById("Result7").value = "";
    let number = Number(document.getElementById('txtNumber7').value);
    let total = 0;
    for (i = 1; i <= number; i += 2) {
        total += i;
    }
    document.getElementById("Result7").value = total;
}

function isAllOddNumber() {
    document.getElementById("Result8").value = "";
    let number = document.getElementById('txtNumber8').value;
    for (i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            document.getElementById("Result8").value = "NO";
            return;
        }
    }
    document.getElementById("Result8").value = "YES";
}

function isSymmetryNumber() {
    document.getElementById("Result9").value = "";
    let number = document.getElementById('txtNumber9').value;
    if (number.length % 2 == 0) {
        document.getElementById("Result9").value = "NO";
        return;
    }
    for (i = 0; i < number.length; i++) {
        if (i == (number.length + 1) / 2) {
            continue;
        }
        if (number.charAt[i] != number.charAt[number.length - i]) {
            document.getElementById("Result9").value = "NO";
            return;
        }
    }
    document.getElementById("Result9").value = "YES";
}

function printMultiplicationTable() {
    for (i = 2; i <= 9; i++) {
        for (j = 1; j <= 10; j++) {
            document.getElementById("Result10").value += i + " x " + j + " = " + i * j + '\n';
        }
        document.getElementById("Result10").value += "------------------------------------------------------" + '\n'
    }
}