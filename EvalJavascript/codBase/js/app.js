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
        botones[i].addEventListener('click', this.validaciones, false);
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
    validaciones: function() {
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
        primerValor = 0;
        segundoValor = 0;
      } else if (tecla === 'sign') {
        if (valor !== '') {
          valor = -1 * Number(valor);
          valor = valor.toString();
          document.getElementById("display").innerHTML = valor;
        }
      } else if (valor.indexOf(".") === -1 && tecla === 'punto') {
        if(valor < 0 || valor > 0){
           valor += ".";
        }else{
          valor += "0.";
        }
        document.getElementById("display").innerHTML = valor;
      } else if (tecla === 'dividido' || tecla === 'por' || tecla === 'menos' || tecla === 'mas') {
        document.getElementById("display").innerHTML = "";
        primerValor = Number(valor)
        segundoValor = 0;
        operador = tecla;
        valor = "";
      } else if (tecla === 'igual' && operador !== "") {
        if (segundoValor === 0) {
          segundoValor = Number(valor);
        }
        Calculadora.operaciones();
        primerValor = valor;
      }

    },
    operaciones: function() {
      if (operador === 'mas') {
        valor = Calculadora.suma(primerValor, segundoValor).toString();
        document.getElementById("display").innerHTML = valor;
      } else if (operador === 'menos') {
        valor = Calculadora.resta(primerValor, segundoValor).toString();
        document.getElementById("display").innerHTML = valor;
      } else if (operador === 'por') {
        valor = Calculadora.multiplicacion(primerValor, segundoValor).toString();
        document.getElementById("display").innerHTML = valor;
      } else if (operador === 'dividido') {
        if (segundoValor !== 0) {
          valor = Calculadora.division(primerValor, segundoValor).toString();
          document.getElementById("display").innerHTML = valor;
        } else {
          document.getElementById("display").innerHTML = "INFINITO";
          valor = "";
          primerValor = 0;
          segundoValor = 0;
        }
      }
    }
  };
})();

Calculadora.init();
