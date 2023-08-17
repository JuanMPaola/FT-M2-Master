let getAmigos = function() {
    let ul = document.getElementById('lista');
    let lista =$('#lista');
    lista.empty();
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/amigos",
        success: (amigos) => {
            console.log(amigos)
            for (let i = 0; i < amigos.length; i++) {
                let li = document.createElement('li');
                li.innerHTML = amigos[i].name;
                ul.appendChild(li);
            }
        }
    });
};

let searchAmigos = function (){
    let valor = $("#input").val();
    if(valor){
     $.get("http://localhost:5000/amigos/" + valor, (data) =>{
     $("#amigo").text(data.name)})
    }else{
      console.log("Inserte un valor");
    }

}

let deleteAmigo = function() {
    let valor = $("#inputDelete").val();
    if(valor){

        $.ajax({
            type: "DELETE",
            url: "http://localhost:5000/amigos/"+ valor,
            success: (amigos) => {
                console.log(amigos)
                $("#success").text("Amigo eliminado")
                getAmigos();
            }
        });
    }else{
        $('#success').html("Inserta un valor");
    }
}


$("#delete").on("click", deleteAmigo);

$("#boton").on("click", getAmigos);

$("#search").on("click", searchAmigos);
