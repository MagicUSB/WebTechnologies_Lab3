function checkInput() {
    checkName();
    checkSurname();
}

function checkName() {
    var elem = document.getElementById('nameInput');
    elem.setAttribute('pattern', '[A-Za-zА-Яа-яІіЇїЄє]+');
}

function checkSurname() {
    var elem = document.getElementById('surnameInput');
    elem.setAttribute('pattern', '[A-Za-zА-Яа-яІіЇїЄє]+');
}
