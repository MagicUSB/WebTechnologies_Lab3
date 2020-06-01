function divideString() {
    var str = document.getElementById('strInput').value;
    if (str.length % 2 === 1) {
        str += '_';
    }
    var n = str.length - 1;
    document.getElementById('resultList').innerHTML = '';
    for (var i = 0; i < n; i += 2) {
        document.getElementById('resultList').innerHTML += '<li class="list-group-item">' + str[i] + str[i + 1] + '</li>';
    }
}