function checkInput() {
    checkName();
    checkSurname();
}

function checkName() {
    var elem = document.getElementById('nameInput');
    elem.setAttribute('pattern', '[A-Za-zА-Яа-я]+');
}

function checkSurname() {
    var elem = document.getElementById('surnameInput');
    elem.setAttribute('pattern', '[A-Za-zА-Яа-я]+');
}
