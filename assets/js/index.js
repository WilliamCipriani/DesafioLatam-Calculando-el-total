const precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const cantidadElemento = document.querySelector('.cantidad');
const botonMas = document.getElementById('simbolo-mas');
const botonMenos = document.getElementById('simbolo-menos');
const precioInicialElemento = document.querySelector('.precio-inicial');
const valorTotalElemento = document.querySelector('.valor-total');

const precioBase = Number(precioInicialElemento.textContent);
let cantidad = 0;

function actualizarTotalAPagar() {
    cantidadElemento.innerHTML = cantidad;
    const total = cantidad * precioBase;
    valorTotalElemento.innerHTML = total 
}

botonMas.onclick = function() {
    cantidad++; 
    actualizarTotalAPagar(); 
};

botonMenos.onclick = function() {
    if (cantidad > 0) {
      cantidad--; 
      actualizarTotalAPagar(); 
    }
}   

actualizarTotalAPagar();