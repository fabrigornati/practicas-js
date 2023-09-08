etc=Math.floor(Math.random ()*360);
vueltas=Math.floor((Math.random ()*(10-5)+5)*360);
randnum=Math.floor( (etc * (vueltas)));
angfinal=Math.floor (etc * vueltas)%360;
console.log ("Posicion de angulo inicial: "+etc);
console.log ("Valor aleatorio Generado en Grados: "+randnum);
console.log ("Angulo Final: "+angfinal);

