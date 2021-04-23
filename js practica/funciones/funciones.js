function transformarTexto (texto){

    var resultado = ""

    var textominuscula = texto.tolowerCase().split("");

    var a = 0, e = 0, i = 0, o = 0, u = 0, blanco = 0;
    
    for (let j = 0; j < textominuscula.length; j++){
        if (textominuscula[j] == 'a') {
            a++;
        }
        else if (textominuscula[j] == 'e') {
            e++;
        }
        else if (textominuscula[j] == 'i') {
            i++;
        }
        else if (textominuscula[j] == 'o') {
            o++;
        }
        else if (textominuscula[j] == 'u') {
            u++;
        }
        else if (textominuscula[j] == ' ') {
            blanco++;
        }
    }

    resultado += "Hay " + a + " vocales 'a'</br>" 
    resultado += "Hay " + e + " vocales 'e'</br>"
    resultado += "Hay " + i + " vocales 'i'</br>"
    resultado += "Hay " + o + " vocales 'o'</br>"
    resultado += "Hay " + u + " vocales 'u'</br>"
    resultado += "Total de vocales: "+ eval(a+e+i+o+u) + "</br>"
    resultado += "Total de espacios en blanco "+ blanco + "</br>"
    resultado += "Total de caracteres escritos: " + textominuscula.length + "</br>"
    resultado += "Texto original: <b>"+ texto + "</b>"
    
    
    
    document.getElementById("resultadoTexto").innerHTML = texto.tolowerCase
}