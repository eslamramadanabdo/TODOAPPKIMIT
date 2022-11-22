
let btn1 = document.getElementById('b1');
let btn2 = document.getElementById('b2');
let btn3 = document.getElementById('b3');
let btn4 = document.getElementById('b4');
let btn5 = document.getElementById('b5');
let btn6 = document.getElementById('b6');
let btn7 = document.getElementById('b7');
let btn8 = document.getElementById('b8');

let products =[]

// localStorage.clear()

function addproduct(name ,  T , D , P ){
    let product = {
        title : T,
        des   : D,
        price  : P,
        name 
    }
    products.push(product);
    localStorage.setItem(name , JSON.stringify(products) )
}

// product 1==========================================
function addToCart1(){
    let title1 = document.getElementById('title1');
    let des1 = document.getElementById('des1');
    let price1 = document.getElementById('price1');

    addproduct( "product1",  title1.innerText  , des1.innerText  , price1.innerText)

}
btn1.addEventListener('click', addToCart1);




// product 2==========================================

function addToCart2(){
    let title2 = document.getElementById('title2');
    let des2 = document.getElementById('des2');
    let price2 = document.getElementById('price2');

    addproduct( "product2" , title2.innerText , des2.innerText , price2.innerText)
}
btn2.addEventListener('click', addToCart2);


// product 3==========================================

function addToCart3(){
    let title3 = document.getElementById('title3');
    let des3 = document.getElementById('des3');
    let price3 = document.getElementById('price3');

    addproduct( "product3" , title3.innerText , des3.innerText , price3.innerText)
}
btn3.addEventListener('click', addToCart3);


// product 4==========================================

function addToCart4(){
    let title4 = document.getElementById('title4');
    let des4 = document.getElementById('des4');
    let price4 = document.getElementById('price4');

    addproduct( "product4" , title4.innerText , des4.innerText , price4.innerText)
}
btn4.addEventListener('click', addToCart4);

// product 5==========================================

function addToCart5(){
    let title5 = document.getElementById('title5');
    let des5 = document.getElementById('des5');
    let price5 = document.getElementById('price5');

    addproduct( "product5" , title5.innerText , des5.innerText , price5.innerText)
}
btn5.addEventListener('click', addToCart5);

// product 6==========================================

function addToCart6(){
    let title6 = document.getElementById('title6');
    let des6 = document.getElementById('des6');
    let price6 = document.getElementById('price6');

    addproduct( "product6" , title6.innerText , des6.innerText , price6.innerText)
}
btn6.addEventListener('click', addToCart6);



// product 7==========================================

function addToCart7(){
    let title7 = document.getElementById('title7');
    let des7 = document.getElementById('des7');
    let price7 = document.getElementById('price7');

    addproduct( "product7" , title7.innerText , des7.innerText , price7.innerText)
}
btn7.addEventListener('click', addToCart7);

// product 8==========================================

function addToCart8(){
    let title8 = document.getElementById('title8');
    let des8 = document.getElementById('des8');
    let price8 = document.getElementById('price8');

    addproduct( "product8" , title8.innerText , des8.innerText , price8.innerText)
}
btn8.addEventListener('click', addToCart8);















// ==========

let list  = document.getElementById('list');

let child = list.children;

function addactive1(){
    child[0].classList.add('active')
    child[1].classList.remove('active')
    child[2].classList.remove('active')
}
function addactive2(){
    child[0].classList.remove('active')
    child[1].classList.add('active')
    child[2].classList.remove('active')
}
function addactive3(){
    child[0].classList.remove('active')
    child[1].classList.remove('active')
    child[2].classList.add('active')
}
child[0].addEventListener('click' , addactive1)
child[1].addEventListener('click' , addactive2)
child[2].addEventListener('click' , addactive3)


// ===========================




let btnchange = document.getElementById('btnchange');
let divchange = document.getElementById('divchange');

function darkandlight(){
    if( divchange.classList.contains('lightDiv') ){
        divchange.classList.remove('lightDiv') 
        divchange.classList.add('darkDiv') 


        btnchange.classList.remove('dark');
        btnchange.classList.add('light');

        btnchange.innerHTML = "<i class='fa-regular fa-moon'></i>"

        


    }
    else if( divchange.classList.contains('darkDiv') ){
        divchange.classList.remove('darkDiv') 
        divchange.classList.add('lightDiv') 
        btnchange.classList.remove('light');
        btnchange.classList.add('dark');

        btnchange.innerHTML = "<i class='fa-solid fa-moon'></i>"
    }
}
btnchange.addEventListener('click' , darkandlight)














