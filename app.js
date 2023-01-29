/* ESTA APP ESTA EN CODIGO JS EC5 -----> TAMBIEN SE PUEDE HACER EN EC6 O CON ALGUNA LIBRERIA COMO REACT<--------
/* cuando se pone la funcion dentro de los parentesis es una funcion auntoinvocada*/
/* para la parte de JS lo primero es determinar todas las variables que mecesito para
que funcione mi app en este caso generados de password*/


(function(){
    var app = document.getElementById("app"); /*linckea la app entre html y js*/ 
    var inputCaracteres = document.getElementById("numero-caracteres"); /*este lnkea el numero de caracteres que vana poner */

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value), /* parseInt es necesario por que el input recibe strings y hay que pasarlo a entero*/
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }
    
    var caracteres = {
        numeros: "0 1 2 3 4 5 6 7 8 9",
        simbolos: "! @ # ¢ $ ∞ % & / ( ) - _ + = { [ } ] ; : < , > . ? ",
        mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W Y Z",
        minusculas: "a b c d e f g h i j k l m n o p q r s t u v w y z"
    }
/*------------------- hasta aca definimos todas las var y obj de la app--------------------------------------------------------*/

/*------------------- aca definimos los eventos de la app--------------------------------------------------------*/

//evento para evitar que la app haga un submit//
app.addEventListener("submit", function(e){
    e.preventDefault();
});

// evento para que el formulario haga algo cuando presionen los botones//

app.elements.namedItem("btn-mas-uno").addEventListener("click", function(){
    configuracion.caracteres++;
    inputCaracteres.value = configuracion.caracteres;
});

app.elements.namedItem("btn-menos-uno").addEventListener("click", function(){
    if (configuracion.caracteres > 1) {
        configuracion.caracteres--;
    inputCaracteres.value = configuracion.caracteres;
    }
});

app.elements.namedItem("btn-simbolos").addEventListener("click", function(){
   btnToggle(this);
   configuracion.simbolos = !configuracion.simbolos;

});

app.elements.namedItem("btn-numeros").addEventListener("click", function(){
    btnToggle(this);
    configuracion.numeros = !configuracion.numeros;
});
 
app.elements.namedItem("btn-mayusculas").addEventListener("click", function(){
    btnToggle(this);
    configuracion.mayusculas = !configuracion.mayusculas;
});

app.elements.namedItem("btn-generar").addEventListener("click", function(){
    generarPassword();
});

app.elements.namedItem ("input-password").addEventListener("click", function(){
    copiarPassword();
});
     

/*---------------------------------------
-----FUNCIONES---------------------------
-----------------------------------------*/
function btnToggle(elemento) {
    elemento.classList.toggle("false");
    elemento.childNodes[1].classList.toggle("fa-check");
    elemento.childNodes[1].classList.toggle("fa-times");
}

function generarPassword() {
    let caracteresFinales = "";
    let password = "";
    
    for (propiedad in configuracion){
        if (configuracion[propiedad] == true) {
            caracteresFinales += caracteres[propiedad] + " ";
            
        }
    }

    caracteresFinales = caracteresFinales.trim(); // la funcion trim permite sacar espaciado al inicio y al final de la cadena de texto
    caracteresFinales = caracteresFinales.split(" ");
    //console.log(caracteresFinales);

    for (var i = 0; i < configuracion.caracteres; i++) {
       password = password + caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
       //password += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)]; ---> otra forma mas corta de escribir el mismo codigo
    
    }
    app.elements.namedItem("input-password").value = password;
    console.log(password);

}

    function copiarPassword(){
        app.elements.namedItem("input-password").select();
        document.execCommand("copy");
        document.getElementById("alerta-copiado").classList.add("active");
        setTimeout(function(){
            document.getElementById("alerta-copiado").classList.remove("active");
        },2000);
    };

    generarPassword();
}())
