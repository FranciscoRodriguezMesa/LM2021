  
function validar(campo) {
    //var campo = document.getElementById("nombre");
    if (campo.value == null || campo.value.length == 0) {
        ///campo.style = "border-color: red";
        //campo.focus();
        //setTimeout("document.getElementById('nombre').focus();",1);        
        mostrarError(campo.id, "Error: Nombre vacío");        
    } else {
        //campo.style = "border-color: none";
        borrarError(campo.id);
    }
}

function mostrarError(id, mensaje) {
    document.getElementById("sp" + id).innerHTML = mensaje;
    setTimeout("document.getElementById('nombre').focus();",1);
}

function borrarError(id) {
    document.getElementById("sp" + id).innerHTML = "";
}

function mostrarEdad(campo) {
    document.getElementById("sp" + campo.id).innerHTML = campo.value;
}

function validarFormulario () {
    var cadenaErrores = "";
    
    var cp = document.getElementById ("postal");
    if (cp.value == null || cp.value.length == 0) {
        cadenaErrores = "<li> Error Cod. Postal: Campo vacío</li>";
    } else if (cp.value.length != 5) {  
        cadenaErrores = cadenaErrores + "<li> Error Cod. Postal: 5 cifras</li>";
    }

    var tel = document.getElementById ("telefono");
    if (tel.value == null || tel.value.length == 0) {
        cadenaErrores = cadenaErrores + "<li> Error Teléfono: Campo vacío</li>";
    }   else if (tel.value.length != 9 ){   
        cadenaErrores = cadenaErrores + "<li> Error Teléfono: 9 cífras</li>";
    } else if (!tel.value.startWith(9) && !tel.valuestartWith(6))
    cadenaErrores = cadenaErrores + "<li> Error Teléfono: 9 o 6 en primera cifra</li>";

    if (cadenaErrores.length == 0) {
        return true;
    }   else{
            verErrores(cadenaErrores);
            return false;
        }
    }


function verErrores(mensaje) {
    document.getElementById("errores").innerHTML = mensaje;
    document.getElementById("capaerrores").style.visibility = "visible";
}
