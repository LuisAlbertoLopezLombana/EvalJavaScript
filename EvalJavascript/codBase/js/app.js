var Calculadora = (function(){
    var iva = 0.18;

    return {
        suma: function(monto) {
            return monto * iva;
        },
        resta: function(monto){
            return monto / (1 + iva);
        },
        multiplicacion: function(costo, ingreso) {
            return ingreso - costo;
        },
        division: function(capital, interes, periodos) {
            return capital * Math.pow(1 + interes, periodos);
        }
    };
})();

//Adición de regla para control de escalados de los botones, se debe agregar a cada botón
document.styleSheets[0].addRule('.resizeButton:active','transform: scale(0.95,0.95)');

//Obtener todos los botones de la calculadora a través de la clase tecla
var botones = document.getElementsByClassName("tecla");

//Función que permite controlar la operación a ejecutar.
var operaciones = function() {
    var attribute = this.getAttribute("id");
};


//Uteración de las telas obtenidas y adición de regla resizeButton
for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', operaciones, false);
    botones[i].className += ' resizeButton'
}
