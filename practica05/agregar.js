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
    for(let tarea in listaTodo){
        if(Object.hasOwnProperty.call(listaTodo,tarea)){
            console.log(listaTodo[tarea].childNodes[0])
            a = listaTodo[tarea].childNodes[0]
            b = leer ()
            console.log("a ", typeof a.textContent, "b ",typeof b)

            if (a == b){
                console.log (" ya existe")
            }
        }

    }

        if(document.getElementById(leer()) != null ){
            alert("Ya existe")
           
        }else{
            console.log("No existe")
        }
        
}