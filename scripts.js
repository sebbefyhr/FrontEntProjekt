$(document).ready(function(){
    changeContentScreen('loginScreen');
});


const admin_get_customer = document.querySelector("#admin_get_customer");
const admin_get_products= document.querySelector("#admin_get_products");
const admin_add_product = document.querySelector("#admin_add_product");
const admin_delete_product = document.querySelector("#admin_delete_product");
const admin_update_product = document.querySelector("#admin_update_product");

admin_get_customer.addEventListener('click', function(){
    changeContentScreen('adminGetCustomers');
});
admin_get_products.addEventListener('click', function(){
    changeContentScreen('adminGetProducts');
});
admin_add_product.addEventListener('click', function(){
    changeContentScreen('adminAddProduct');
});
admin_delete_product.addEventListener('click', function(){
    changeContentScreen('adminDeleteProduct');
});
admin_update_product.addEventListener('click', function(){
    changeContentScreen('adminUpdateProduct');
});

function changeContentScreen(page){

    let menuDiv = document.querySelector("#top-nav-bar");
    let contentDiv = document.querySelector("#content");

    switch(page){
        case 'loginScreen':
            

        break;

        case 'adminAddCustomer':
            menuDiv.innerHTML  = '<div id="top-nav-bar">'+
        '<ul>'+
        '<li><a href="#" id="admin_get_customer">Kunder</a></li>'+
        '<li><a href="#" id="admin_get_products">Produkter</a></li>'+
        '<li><a href="#" id="admin_add_product">Lägg till produkt</a></li>'+
        '<li><a href="#" id="admin_delete_product">Ta bort produkt</a></li>'+
        '<li><a href="#" id="admin_update_product">Uppdatera produkt</a></li>'+
            '<li>'+
        '</ul>'+
    '</div>';

    contentDiv.innerHTML = '<div id="content">'+
    '</div>';

            break;


        default:
            break;
    }
}

function fetchLoginCreds(){
    const username = '';
    const password = '';

    const base64Credentials = btoa('${username}:${password}');

    const url = //sätt in URL för att hämta username och password

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        },
    })
    .then(response =>{
        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        return response.json;
    })
    .then(data => {
        //hantera datan här
        console.log(data);

        //uppdatera DOM eller använda data på annat sätt
        let contentDiv = document.querySelector("#contnt").innerHTML = data.fact;
    })
    .catch(error => {
        //hantera eventuella fel här

        console.log('Error: ', error)
    });
}

