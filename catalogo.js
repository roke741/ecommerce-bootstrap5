let contador = 0
let totalPagar = 0

function agregar(nombre, precio, img){
    if(contador < 1) {
        $("#bodycarrito").text("");
    }
    console.log(nombre, precio);
    $("#bodycarrito").append(`
        <span class="d-flex justify-content-between align-self-center px-3 my-2 " id="item${contador}">
        <span class="align-self-center">${contador+1}</span> 
        <img src="${img}" alt="" width="60">
        
        <span class="align-self-center">${nombre}</span> 
        <span class="align-self-center">S/. ${precio}</span>
        <button class="btn btn-sm btn-danger" onclick="borrar('#item${contador}', ${precio})"><span class="iconify" data-icon="bi:trash-fill" data-width="20" data-height="20"></span> </button>
        </span>
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