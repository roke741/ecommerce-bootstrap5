let contador = 0
let totalPagar = 0
let listaTotal = []
function agregar(nombre, precio, img){
    if(contador < 1) {
        $("#bodycarrito").text("");
    }
    console.log(nombre, precio);
    $("#bodycarrito").append(`
        <span class="d-flex justify-content-between align-self-center px-3 my-2 " id="item${contador}">
        <span class="align-self-center" id="idproducto${contador}">${contador+1}</span> 
        <img src="${img}" alt="" width="60">
        
        <span class="align-self-center" id="nombre${contador}" >${nombre}</span> 
        <span class="align-self-center" id="precio${contador}">S/. ${precio}</span>
        <button class="btn btn-sm btn-danger" onclick="borrar('#item${contador}', ${precio})"><span class="iconify" data-icon="bi:trash-fill" data-width="20" data-height="20"></span> </button>
        </span>
        <hr>
    `);
    $("#countcard").text(contador+1);
    contador += 1
    totalPagar += Number(precio);
    $("#totalpagarcarrito").text("S/."+totalPagar);

}

function borrar(itemid, precio){
    $(itemid).remove()
    contador -= 1
    $("#countcard").text(contador+1 -1);
    if(contador == 0){
        $("#bodycarrito").text("Carrito vacio 😔");
    }
    totalPagar -= Number(precio);
    $("#totalpagarcarrito").text("S/."+totalPagar);
}

function linkinfopago(){
    let total = $("#totalpagarcarrito").text();
    let itemslink = `https://roke741.github.io/ecommerce-bootstrap5/cart.html?items=${contador}&total=${total}`;
    //let itemslink = `http://127.0.0.1:5501/carrito.html?items=${contador}&total=${total}`;
    
    for(let i = 0 ; i <= contador-1; i++){
        itemslink = itemslink + "&idproducto"+i+"="+$("#idproducto"+i).text()+"&"+"nombre"+i+"="+$("#nombre"+i).text()+"&"+"precio"+i+"="+$("#precio"+i).text()
    }
    
    
    window.location.href= itemslink
}