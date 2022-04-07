
function orarioSet() {
    var data = new Date();
    var ore = data.getHours();
    var minuti = data.getMinutes();
    var secondi = data.getSeconds();
if(ore < 10){
    ore = "0" + ore;
}

if(minuti < 10){
    minuti = "0" + minuti;
}

if(secondi < 10){
    secondi = "0" + secondi;
}



document.getElementById("orario").innerHTML = ore + ":" + minuti + ":" + secondi;

}
setInterval(orarioSet, 1000);


