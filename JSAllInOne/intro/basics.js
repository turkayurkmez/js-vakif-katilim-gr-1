// function buttonGetAge_Click() {
//     let currentYear = new Date().getFullYear();
//     let birthYear = document.getElementById('birthYear').value;
//     if (!isNaN(birthYear)) {
//         let age = currentYear - birthYear;
//         document.getElementById('age').innerText = `Yaşınız ${age}`;
//     }
//     else {
//         document.getElementById('age').innerText = 'Lütfen 4 haneden oluşan doğum yılınızı girin!'
//     }
// }

let getAgeByBirthYear = (birthYear)=>{
    let currentYear = new Date().getFullYear();
    //let birthYear = birthYearInput.value;
    if (!isNaN(birthYear)) {
        let age = currentYear - birthYear;
        return age;
    }
    else {
        return 'Lütfen 4 haneden oluşan doğum yılınızı girin!'
    }

    
}

var todoItems = [];

function addTodoItem() {
    let inputElement = document.getElementById('textTodo')
    let warning = document.getElementById('warning');
    warning.innerText = '';
    let todoDescription = inputElement.value;
    if (isNaN(todoDescription)) {

        let isInclude = todoItems.includes(todoDescription, 0);
        if (!isInclude) {
            todoItems.push(todoDescription);
        }
        else {
            warning.innerText = `Eklemeye çalıştığınız ${todoDescription} zaten var.`
        }

    } else {
        warning.innerText = 'Lütfen sadece sözel ifade girin';
    }

    showItemsInList(todoItems);
    changeHeader(todoItems.length);


    inputElement.value = '';
    inputElement.focus();

}

function showItemsInList(array) {

    let ul = document.getElementById('todoList');
    ul.innerHTML = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let li = document.createElement('li');
        li.innerText = element;
        ul.append(li);

    }
}

let changeHeader = number => {
    let h5 = document.getElementById('title');
    h5.classList.value = number % 2 == 0 ? 'red' : 'green';
    document.getElementById('count').innerText = number;

}

function compare() {
    let number = 5;
    let str = '5';

    if (number == str) {
        console.log(`number == str sonucu eşittir ${number} == ${str}`);
    }

    if (str === '5') {
        console.log(`number === str sonucu eşittir ${number} === ${str}`);

    }
    else {
        console.log('iki ifade eşit değildir!');
    }



}

function getPowerTwo(number) {
    return Math.pow(number, 2);
}

let arrowForGetPowerTwo = num => Math.pow(num, 2);
let getPower = (x, y) => Math.pow(x, y);
let noParam = () => console.log('parametre yok!');
let multiline = isOk => {
    if (isOk) {

    }
    else {

    }

};

console.log(arrowForGetPowerTwo(5));
console.log(getPower(2, 6));
