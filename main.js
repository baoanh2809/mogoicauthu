var list = [{
        id:1,
        name: 'Cầu thủ Dỏm',
    },
    {
        id: 2,
        name: 'Cầu thủ Thường'
    },
    {
        id: 3,
        name: 'Cầu thủ Vip'
    }
]





var creat = document.querySelector('#open');

function render() {
    var outputs = document.querySelector("#test")
    var htmls = list.map(function (maps) {
        return `
        <li class="item-${maps.id}">
            <h4>${maps.name}</h4>
        </li>
        `
    })
    outputs.innerHTML = htmls.join('');
}

render(list);
    ;

creat.onclick = function () {
    var random = Math.floor(Math.random() * 100);
    var test = document.getElementById("heading").innerText
    = 'Chúc Mừng Bạn Đã Nhận Được'
    if (random < 5) {
        var a = document.querySelector('.item-3').innerHTML;
        document.querySelector('#output').innerHTML = a;
    }
     if (random < 30 && random > 5) {
   var b = document.querySelector('.item-2').innerHTML;
        document.querySelector('#output').innerHTML = b;
    }
    if (random > 30) {
    var c = document.querySelector('.item-1').innerHTML;
        document.querySelector('#output').innerHTML = c;
    }
}