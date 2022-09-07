var nombres=[];

function searching()
{
    var s= document.getElementById("buscar_nombre").value;
    var found=0;
    var j;

    for(j=0; j<nombres.length; j++)
    {
        if(s==nombres[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+"time/s";
    console.log("found name "+found+"time/s");
}

function show()
{
    var i= nombres.join("<br>");
    console.log(nombres);
    document.getElementById("mostrar").innerHTML=i.toString();
    document.getElementById("boton_ordenar").style.display="block";
}

function sorting()
{
    nombres.sort();
    var i = nombres.join("<br>");
    console.log(nombres);
    document.getElementById("ordenar").innerHTML=i.toString();
}

function submit()
{
    var nombreinvitado = document.getElementById("enviar").value;
    nombres.push(nombreinvitado);

    console.log(nombreinvitado);

    console.log(nombres);
    var lenght_of_the_name = nombres.lenght;
    console.log(lenght_of_the_name);
    document.getElementById("display_name").innerHTML=nombres.toString();
}