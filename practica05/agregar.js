function leer(){
    return document.getElementById("todo").value
}

function agregar( ) {
    nodo = document.createElement("li")
    //texto.document.createTextNode("hola")
    texto = document.createTextNode(leer())
    //console.log(texto)
    nodo.appendChild(texto)
    nodo.setAttribute("id",leer());
    document.getElementById("lista").appendChild(nodo)

}

function buscar( ){
    listaTodo = document.getElementsByTagName("li")


        if(document.getElementById(leer()) != null ){
            alert("Ya existe")
           
        }else{
            console.log("No existe")
        }
        
}