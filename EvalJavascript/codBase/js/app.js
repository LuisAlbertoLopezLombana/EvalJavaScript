var Calculadora = (function() {
  var valor;
  var primerValor;
  var segundoValor;
  var operador;
  valor = "";
  primerValor = 0;
  segundoValor = 0;
  operador = "";

  return {
    init: function() {
      //Adición de regla para control de escalados de los botones, se debe agregar a cada botón
      document.styleSheets[0].addRule('.resizeButton:active', 'transform: scale(0.95,0.95)');
      //Obtener todos los botones de la calculadora a través de la clase tecla
      var botones = document.getElementsByClassName("tecla");
      //Iteración de las teclas obtenidas y adición de regla resizeButton
      for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', this.operaciones, false);
        botones[i].className += ' resizeButton'
      }

    },
    suma: function(primerValor, segundoValor) {
      return primerValor + segundoValor;
    },
    resta: function(primerValor, segundoValor) {
      return primerValor - segundoValor;
    },
    multiplicacion: function(primerValor, segundoValor) {
      return primerValor * segundoValor;
    },
    division: function(primerValor, segundoValor) {
      return primerValor / segundoValor;
    },
    operaciones: function() {
      //Función que permite controlar la operación a ejecutar.
      var tecla;
      tecla = "";

      tecla = this.getAttribute("id");
      console.log("tecla: ", tecla);
      if (!isNaN(tecla)) {
        valor += this.getAttribute("id");
        console.log("valor.length: ", valor);
        if (valor.length <= 8) {
          document.getElementById("display").innerHTML = valor;
        }
        if (valor.length == 1 && valor === '0') {
          document.getElementById("display").innerHTML = "0";
          valor = "";
        }
      } else if (tecla === 'on') {
        document.getElementById("display").innerHTML = "0";
        valor = "";
      } else if (tecla === 'sign') {
        document.getElementById("display").innerHTML = -1 * Number(valor);
      } else if (tecla === 'raiz' || tecla === 'dividido' || tecla === 'por' || tecla === 'menos' || tecla === 'mas') {
        document.getElementById("display").innerHTML = "";
        if (primerValor === 0) {
          primerValor = Number(valor)
        }
        operador = tecla;
        valor = "";
      }
      if (tecla === 'igual' && operador !== "") {
        if (segundoValor === 0) {
          segundoValor = Number(valor);
          valor = "";
        }
        if (operador === 'mas') {
          document.getElementById("display").innerHTML = Calculadora.suma(primerValor, segundoValor);
        } else if (operador === 'menos') {
          document.getElementById("display").innerHTML = Calculadora.resta(primerValor, segundoValor);
        } else if (operador === 'por') {
          document.getElementById("display").innerHTML = Calculadora.multiplicacion(primerValor, segundoValor);
        } else if (operador === 'dividido') {
          document.getElementById("display").innerHTML = Calculadora.division(primerValor, segundoValor);
        }

        primerValor = 0;
        segundoValor = 0;

      }

    }
  };
})();

Calculadora.init();
