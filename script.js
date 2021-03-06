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

function notReadyAlert(event) {
    alert('Sorry, not ready yet!\nИзвините, еще не готово!');
    event.preventDefault();
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

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: '', text: 'Контакты'},
        {href: '', text: 'Доставка'},
        {href: '', text: 'Акция'},
        {href: 'about-us.html', text: 'О нас'},
    ];

    for (let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == ''){
            link.addEventListener('click', notReadyAlert);            
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }    
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if (key.key == 'Enter')
            search();
    });

    generateMenu();

    function generateList(){
        let list = document.querySelector('main');     
    
        let items = [    
            {text:'Adidas-yeezy', src:"15625937_28645464_1000.jpg", price:'Цена: 90025'},    
            {text:'Nike кроссовки SB Dunk Low из коллаборации с Grateful Dead', src:"15645873_28291167_1000.jpg", price:'Цена: 90500'},    
            {text:'New Balance кроссовки 992 Joe Freshgoods No Emotions Are Emotions', src:"15193294_26127853_1000.jpg", price:'Цена: 236787'}    
        ];    
        for(let i=0; i<items.length; i++) {    
            let card = document.createElement('div');    
            card.className = "card";    
            card.innerHTML = `        
                <div class="product-name">${items[i].text}</div>    
                <div class="image"><img src="${items[i].src}"></div>    
                <div>${items[i].price}</div>
    
            </a>
    
            <input type="button" value="Купить" onclick="return notReadyYet()">  `;    
            list.appendChild(card);    
        }    
    }   
        generateList();
}