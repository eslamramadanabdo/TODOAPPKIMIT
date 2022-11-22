let addCart = document.getElementById('AddCart');


for (let i = 0; i < localStorage.length; i++) {
    let object = localStorage.getItem(localStorage.key(i));
    let data = JSON.parse(object);
    for (const product of data) {
        addCart.innerHTML += ` 
        <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-3">
                <img src="../iamges/portfolio/portfolio-2.jpg" class="img-fluid p-3" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${ product['title'] }</h5>
                    <p class="card-text">${ product['des'] }</p>
                    <p>Price: <span>${product['price']}</span></p>
                </div>
            </div>
    
            <div class="col-md-1">
                <h1 class="mt-5"> <i class="fa-solid fa-trash-can  delete ${product['name']}"></i></h1>
            </div>
        </div>
        </div>
    `
    }
}


document.addEventListener('click' ,  function(e){ 

        if(  e.target.classList.contains('delete') ){
            let name = e.target.classList;

            localStorage.removeItem(name[3]);
            window.location.reload();
        }

}  )





let noItem = document.getElementById('noItem');


if(localStorage.length >0  ){
    noItem.style.display = "none"
}
else{
    noItem.style.display = "block"
}