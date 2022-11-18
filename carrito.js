function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
let preciot = getParameterByName("total");

let itemstotal = getParameterByName("items");
function agregarFilas(){
    $("#subtotal").text(preciot.replace('S/.',''));
    $("#preciofinal").text( Number(preciot.replace('S/.','')) + 100 );
    for(let i = 0; i < itemstotal; i++){
        $("#tablaProductos").append(`
        <tr>
            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
            <td>${getParameterByName("nombre"+i)}</td>
            <td>En stock</td>
            <td>
                <select class="form-select" aria-label="example" id="selectstock${i}" onchange="stock('selectstock${i}','precioid${i}' )" >
                    <option value="0">0</option>
                    <option value="1"selected>1</option>
                    <option value="2">2</option>
                </select>
            </td>
            <td class="text-center" id="precioid${i}">${getParameterByName("precio"+i)}</td>
            <td class="text-center"><button class="btn btn-sm btn-danger"><span class="iconify" data-icon="bi:trash-fill" data-width="20" data-height="20"></span> </button> </td>
        </tr>
        `);
    }
    
}
$(document).ready(agregarFilas);


function stock(id, precio){
    //alert($(`#${id}`).val())
    let cantidad = $(`#${id}`).val()
    let precioMulti = $(`#${precio}`).text();
    
    //let precio = 0
    let precioSuma = Number(cantidad)* Number(precioMulti.replace('S/.',''))

    $(`#${precio}`).text(`S/.${precioSuma}.00`)
    //alert(precio)
    let subtotal = Number($("#subtotal").text().replace('S/.','')) + Number(precioMulti.replace('S/.',''))
    $("#subtotal").text(subtotal);
    $("#preciofinal").text( subtotal + 100 );
    
}

