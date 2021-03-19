//Ejercicio 2: Funcion
const sumNumber = (number1, number2)=> {
    return parseInt(number1) + parseInt(number2);
};

//Ejericio 3: Funcion
function NumberMayor(number1,number2,number3){
    if(parseInt(number1) && parseInt(number2) && parseInt(number3)){
        if(number1 > number2 && number1 > number3) return number1;
        else if(number2 > number1 && number2 > number3) return number2;
        else if(number1 === number2 && number3 === number1 && number2 === number3) return 'son iguales';
        else return number3;
    }else return 0;            
}
//Ejercicio 4: Funcion
function isNumberDivisible(number){
    if(Number(number)){
        if(number % 2 === 0){
            return 1;
        }
    }else{
        return false;
    }
}
//Ejercicio 5: Funcion
function isCountChar(cadena){
    var contador = 0;
    var char = cadena.split('');
    for (let index = 0; index < char.length; index ++){
        if(char[index] == 'a' || char[index] == "A"){
            contador +=1;
        }
    }
    return contador;
}
//Ejercicio 6: Funcion
function CountVocal(cadena){
    var vocalesExists = '';
    var char = cadena.split('');
    var vocales = "AaEeIiOoUu";
    for (let index = 0; index < vocales.length; index ++){
        for (let index2 = 0; index2 < char.length; index2 ++){
            if(vocales[index] === char[index2] ){
                vocalesExists +=' '+char[index2];
            }
        }
    }
    return vocalesExists;
}
//Ejercicio 7: Funcion
function CountCharVocals(cadena){
    var counter = 0;
    var char = cadena.split('');
    var vocales = "AaEeIiOoUu";
    for (let index = 0; index < vocales.length; index ++){
        for (let index2 = 0; index2 < char.length; index2 ++){
            if(vocales[index] === char[index2] ){
                counter++;
            }
        }
    }
    return counter;
}
//Ejercicio 8: Funcion
function CountVocalesFull(cadena){
    var vocales = {a:0,e:0,i:0,o:0,u:0};
    var char = cadena.split('');
    for (let index = 0; index < char.length; index ++){
        if('a' === char[index] || 'A' === char[index]){
            vocales.a += 1;
        }else if('e' === char[index] || 'E' === char[index]){
            vocales.e += 1;
        }else if('i' === char[index] || 'I' === char[index]){
            vocales.i += 1;
        }else if('o' === char[index] || 'O' === char[index]){
            vocales.o += 1;
        }else if('u' === char[index] || 'U' === char[index]){
            vocales.u += 1;
        }
    }
    return vocales;
}
//Ejercicio 9: Funcion
function numberDivisible(number){
    if(number % 2 == 0){
        return 2;
    }else if(number % 3 == 0){
        return 3;
    }else if(number % 5 == 0){
        return 5;
    }else if(number % 7 == 0){
        return 7;
    }
}
//Ejercicio 10: Funcion
function numberDivisible(number){
    var numeros = '';
    if(number % 2 == 0){
        numeros +='2,';
    }else if(number % 3 == 0){
        numeros +='3,';
    }else if(number % 5 == 0){
        numeros +='5,';
    }else if(number % 7 == 0){
        numeros +='7';
    }
    return numeros;
}
//Ejercicio 11: Funcion
function Divisores(number){
    var numerosDivisores = '';
    if(number > 0){
        for(let index = 1; index <= number; index++){
            if(number % index == 0){
                numerosDivisores += index + ' ';
            }
        }
        return numerosDivisores;
    }else return false;
}
//Ejercicio 12: Funcion
function DivisoresComunes(number1, number2){
    var numerosDivisores = '';
    if(number1 > 0 && number2 > 0){
        for (let index = 1; index <= number1; index++){
            if(number1 % index === 0 && number2 % index === 0){
                numerosDivisores += index + '   ';
            }
        }
        return numerosDivisores;
    }else return false;
}
//Ejercicio 13: Funcion
function numberPrimo(number){
    var contador = 0; //contador para identificar si es primo el numero
    let esNumberInicial = 2;
    if(number > 1){
        while (number > esNumberInicial && contador === 0){
            if(number % esNumberInicial === 0){//Comprueba si son numeros con division exacta
                contador ++;
            }
            esNumberInicial ++;
        }
        if(contador === 0){
            return 1;
        }else{
            return 0;
        }
    }else return false;
}