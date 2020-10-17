
            /*control con mouse*/
function pulsada (tecla) {
    var listaTeclaPantalla = document.getElementsByClassName('pantalla');
    var textoTeclaPantalla = listaTeclaPantalla[0].firstChild;
    
    if (tecla=='='){
        var resultado = eval(textoTeclaPantalla.nodeValue);
        textoTeclaPantalla.nodeValue = resultado;
    }
    else {
        textoTeclaPantalla.nodeValue = textoTeclaPantalla.nodeValue + tecla;
    }
    if (tecla=="C"){
        textoTeclaPantalla.nodeValue = ' ';
     }
    
    }
            /*control con teclado*/
            var listaPantalla = document.querySelector('pantalla');
            var log = document.getElementById('log');
            var textoPantalla = listaPantalla[0].firstChild;
            input.onkeypress = logKey;

    function logKey (boton) {
    
    if (boton=='='){
        var resultado = eval(textoPantalla.nodeValue);
        textoPantalla.nodeValue = resultado;
    }
    else {
        textoPantalla.nodeValue = textoPantalla.nodeValue + boton;
    }
    if (boton=="C"){
        textoPantalla.nodeValue = ' '; 
    }
    
    }