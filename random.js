function getRndInteger(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min)%37;
}
function getInteger(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min);
}
i=0;
while (i<10){ 
num=getRndInteger(185,370);
valal=getInteger(400,700);
i+=1;
console.log("Numero de jugadas= "+i);
console.log("Numero de la ruleta= "+num);
console.log("Valor aleatorio= "+valal);
console.log ("----------------------")
}
