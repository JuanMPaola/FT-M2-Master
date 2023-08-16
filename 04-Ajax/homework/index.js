
let ul = document.getElementById('lista');

let getAmigos = function() {
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

$("#boton").on("click", getAmigos);


$("#search").on("click", ()=>{
    let valor = $("#input").val();
    $.get("http://localhost:5000/amigos/" + valor, (data) =>{
        $("#amigo").text(data.name)
    })
})

$("#delete").on("click", ()=>{
    let valor = $("#inputDelete").val();
    $.ajax({
        type: "DELETE",
        url: "http://localhost:5000/amigos/"+ valor,
        success: (amigos) => {
            console.log(amigos)
            $("#success").text("Amigo eliminado")
        }
    });
})

