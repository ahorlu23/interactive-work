let firstButton = document.getElementsByClassName('btn1');
let secondButton = document.getElementsByClassName('btn2');
let thirdButton = document.getElementsByClassName('btn3');
let fourthButton = document.getElementsByClassName('btn4');
let fifthButton = document.getElementsByClassName('btn5');

function selectNum1(){
    for (let i = 0; i < firstButton.length; i++) {
        let element = firstButton[i];
        element.style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
}

function selectNum2(){
    for (let i = 0; i < secondButton.length; i++) {
        let element = secondButton[i];
        element.style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
}

function selectNum3(){
    for (let i = 0; i < thirdButton.length; i++) {
        let element = thirdButton[i];
        element.style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
}

function selectNum4(){
    for (let i = 0; i < fourthButton.length; i++) {
        let element = fourthButton[i];
        element.style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
}

function selectNum5(){
    for (let i = 0; i < fifthButton.length; i++) {
        let element = fifthButton[i];
        element.style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
}

function submit() {
    let submitButton = document.querySelector('.sub-mit');
        submitButton.style.backgroundColor = 'white';

        // Display the sec-box element
    let secBox = document.querySelector('.sec-box');
        secBox.style.display = 'block';

    let firstBox = document.querySelector('.first-box');
        firstBox.style.display = 'none';
}