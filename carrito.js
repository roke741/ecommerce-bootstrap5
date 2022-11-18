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
                <select class="form-select" aria-label=" example"  >
                    <option value="1">0</option>
                    <option value="2"selected>1</option>
                    <option value="3">2</option>
                </select>
            </td>
            <td class="text-center">${getParameterByName("precio"+i)}</td>
            <td class="text-center"><button class="btn btn-sm btn-danger"><span class="iconify" data-icon="bi:trash-fill" data-width="20" data-height="20"></span> </button> </td>
        </tr>
        `);
    }

}
$(document).ready(agregarFilas);



//document.getElementById("botonRegresar").innerHTML = `<i class='ri-arrow-left-s-line'></i><a onclick='window.location.href="https://jorgitoayala.github.io/Sneakers/index.html"' id='regresar'>Regresar</a>`;
