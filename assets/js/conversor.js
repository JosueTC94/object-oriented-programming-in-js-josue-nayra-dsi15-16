(function(exports) {
  "use strict";
  function Medida(valor,tipo)
  {
    console.log("Accedo a clase Medida");
    this.valor = valor || 0;
    this.tipo  = tipo  || "Sin tipo";
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
  }

  function Temperatura(valor,tipo)
  {
    console.log("Accedo a clase Temperatura");
    Medida.call(this,valor,tipo);
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
  }

  function Celsius(valor)
  {
    console.log("Accedo a clase Celsius");
    Temperatura.call(this,valor,'c');
    this.toFarenheit = function()
    {
      console.log("Cambiando a Farenheit...");
      return (valor * 9/5) + 32;
    }
    this.toKelvin = function()
    {

    }
  }

  function Farenheit(valor)
  {

  }

  function Kelvin(valor)
  {

  }

  function Metro(valor)
  {


  }

  function Centimetros(valor)
  {


  }

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Kelvin = Kelvin;

  exports.convertir = function() {
    var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
        /* Extienda la RegeExp a la especificación. use una XRegExp */
        regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]+)\s*$/i,
        valor     = valor.match(regexp);

    if (valor) {
      var numero = valor[1],
          tipo   = valor[2].toLowerCase();
      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);

      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          console.log("Celsius: "+celsius.valor+",Farenheit:"+celsius.toFarenheit());
          elemento.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
          break;
        case 'f':
          var farenheit = new Farenheit(numero);
//	  var f_toc = farenheit.toCelsius().toFixed(2);
//	  var f_tok = f_toc.toKelvin().toFixed(2);
          //  elemento.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";

          break;
        case 'k':
	  var kelvin = new kelvin(numero);
//          var k_toc = kelvin.toCelsius().toFixed(2);
//          var k_tof = f_toc.toFarenheit().toFixed(2);
//	  elemento.innerHTML = k_toc + " Celsius" + ", " + k_tof + " Farenheit";

	  break;
	case 'm':

	   break;
	default:
          /* rellene este código */
      }
    }
    else
      elemento.innerHTML = "";
  }

})(this);
