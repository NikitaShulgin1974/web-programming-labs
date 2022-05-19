console.log("Всем привет!!! :)");
console.error("Сообщение об ошибке");
console.warn("Сообщение - предупреждение");

function showButton(card) {
    let b=card.getElementsByTagName("input")[0];
    b.style.display="inline";
}

function hideButton(card) {
    let b2=card.getElementsByTagName("input")[0];
    b2.style.display="none";
}

function buy() {
    alert('Вы уже купили этот товар');
    return false;
}

function tit() {
    alert('Вы уже находитесь на главной странице');
    return false;
}

function email() {
    alert('Вы уже написали нам сообщения! Извините за ожидание.');
    return false;
}

function notReadyAlert() {
    alert('Sorry, not ready yet!\nИзвините, еще не готово!');
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'Adidas-yeezy') {
        productNumber = 0;
    } else if (name == 'Nike') {
        productNumber = 1;
    } else if (name == 'New Balance') {
        productNumber = 2;
    } else {
        alert('Товар не найден');
    }

    let cards = document.getElementsByClassName('card');
    if (name == '') {
        cards[0].style.display = "inline-block";
        cards[1].style.display = "inline-block";
        cards[2].style.display = "inline-block";
    }
    else {
        cards[0].style.display = "none";
        cards[1].style.display = "none";
        cards[2].style.display = "none";
    }

        let card = cards[productNumber];
    card.style.display = "inline-block";
    card.style.border = '1px dashed red';
    card.style.backgroundColor = 'rgb(240, 98, 98)';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if (key.key == 'Enter')
            search();
    });
}