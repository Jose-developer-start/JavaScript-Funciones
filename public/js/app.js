//Ejercicio 1:
const inputText = document.getElementById('user');
var res = document.getElementById('res'); //Sirve para mostrar el resultado de distintos ejercicios
inputText.addEventListener('keyup',()=>{
    res.textContent = 'Hola ' + inputText.value
})
//Ejercicio 2:
var numberOne = document.getElementById('number1');
var numberTwo = document.getElementById('number2');
var sumaButton = document.getElementById('suma');
var resSuma = document.getElementById('res-suma'); //Sirve para mostrar el resultado de distintos ejercicios
suma.addEventListener('click',()=>{
    var num1 = parseInt(numberOne.value);
    var num2 = parseInt(numberTwo.value);
    if(isNaN(num1) || isNaN(num2)){
        alert('Los campos estan vacios')
    }else{
        var suma = sumNumber(num1,num2);
        resSuma.textContent = suma;
    }
})


//Ejercicio 3
var number1 = document.getElementById('numberUno');
var number2 = document.getElementById('numberDos');
var number3 = document.getElementById('numberTres');
var calBtn = document.getElementById('calBtn');
var respuesta = document.getElementById('res-mayor'); //Sirve para mostrar el resultado de distintos ejercicios
calBtn.addEventListener('click',()=>{
    var num1 = parseInt(number1.value);
    var num2 = parseInt(number2.value);
    var num3 = parseInt(number3.value);
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        alert('Los campos estan vacios')
    }else{
        var isNumeroMayor = NumberMayor(num1,num2,num3);
        respuesta.textContent = isNumeroMayor;
    }
})
//Ejercicio 4
var num1 = document.getElementById('num1');
var res1 = document.getElementById('res1');
num1.addEventListener('keyup',()=>{
    var number = Number(num1.value);
    if(number != ''){
        if(isNumberDivisible(number)){
            res1.textContent = 'El número es divisible entre 2';
        }else{
            res1.textContent = 'El número no es divisible entre 2';
        }
    }else res1.textContent = '';
})
//Ejercicio 5
var frase = document.getElementById('frase');
var res2 = document.getElementById('res2');
frase.addEventListener('keyup',()=>{
    var palabra = frase.value;
    res2.textContent = 'La letra a aparece: ' + isCountChar(palabra);
})
//Ejercicio 6
var frase1 = document.getElementById('frase1');
var res3 = document.getElementById('res3');
frase1.addEventListener('keyup',()=>{
    var palabra1 = frase1.value;
    res3.textContent = 'Las vocales que aparecen en la palabra '+palabra1+' son: ' + CountVocal(palabra1);
})
//Ejercicio 7
var frase2 = document.getElementById('frase2');
var res4 = document.getElementById('res4');
frase2.addEventListener('keyup',()=>{
    var palabra2 = frase2.value;
    var result = (CountCharVocals(palabra2) === 1) ? 'vocal' : 'vocales';
    res4.textContent = 'La frase contiene '+ CountCharVocals(palabra2) +' '+ result;
})
//Ejercicio 8
var frase3 = document.getElementById('frase3');
var res5 = document.getElementById('res5');
frase3.addEventListener('keyup',()=>{
    var palabra3 = frase3.value;
    var vocalExist = CountVocalesFull(palabra3);
    res5.textContent = `En frase "${palabra3}" aparecen las vocales: a: ${vocalExist.a} | e: ${vocalExist.e} | i: ${vocalExist.i} | o: ${vocalExist.o} | u: ${vocalExist.u}`;
})
//Ejercicio 9
var txtNumber1 = document.getElementById('txtNumber1');
var res6 = document.getElementById('res6');
txtNumber1.addEventListener('keyup',()=>{
    var number = Number(txtNumber1.value);
    if(number != ''){
        res6.textContent = 'El número '+number+' es divisible por ' + numberDivisible(number);
    }else res6.textContent = "";
})
//Ejercicio 10
var txtNumber2 = document.getElementById('txtNumber2');
var res7 = document.getElementById('res7');
txtNumber2.addEventListener('keyup',()=>{
    var number = Number(txtNumber2.value);
    if(number != ""){
        res7.textContent = 'Es divisible por ' + numberDivisible(number);
    }else res7.textContent = "";
})
//Ejercicio 11
var txtNumber3 = document.getElementById('txtNumber3');
var res8 = document.getElementById('res8');
txtNumber3.addEventListener('keyup',()=>{
    var number = Number(txtNumber3.value);
    if(number != ""){
        res8.textContent = "Los divisores de " + number + ' son: '+ Divisores(number);
    }else res8.textContent = '';
})
//Ejercicio 12
var txtNumber4 = document.getElementById('txtNumber4');
var txtNumber5 = document.getElementById('txtNumber5');
var calNumberComun = document.getElementById('calNumberComun');
var res9 = document.getElementById('res9');
calNumberComun.addEventListener('click',()=>{
    var number1 = Number(txtNumber4.value);
    var number2 = Number(txtNumber5.value);
    res9.textContent = `Los divisores comunes de ${number1} y ${number2} son : ` + DivisoresComunes(number1,number2);
})
//Ejercicio 13
var txtNumber6 = document.getElementById('txtNumber6');
var res10 = document.getElementById('res10');
txtNumber6.addEventListener('keyup',()=>{
    var number = Number(txtNumber6.value);
    if(number != ""){
        if(numberPrimo(number)){
            res10.textContent = 'Es primo';
        }else{
            res10.textContent = 'No es primo';
        }
    }else{
        res10.textContent = '';
    }
    
})

const butones = document.querySelectorAll('button')
butones.forEach(boton =>{
    boton.addEventListener('click',(event)=>{
        if(event.target.id == 1){
            /*
            Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y
            scriba un texto que diga “Hola nombre Usuario”
            */
            const saludarUser = (nameUser)=> alert("Hola " + nameUser);
            saludarUser(prompt('Ingrese su nombre'))
        }else if(event.target.id == 2){
            /*
            ejercicio 2:
            Escribe un programa que pida dos números y escriba en la pantalla la suma de ellos
            */
            do{
                var number1 = parseInt(prompt('Ingrese un numero: '));
                var number2 = parseInt(prompt('Ingrese otro numero: '));
            }while(isNaN(number1) || isNaN(number2));
            alert('La suma es '+ sumNumber(number1,number1));
        }else if(event.target.id == 3){
            /*
            ejercicio 3:
            Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
            */
            do{
                var number1 = parseInt(prompt('Ingrese un numero: '));
                var number2 = parseInt(prompt('Ingrese un numero: '));
                var number3 = parseInt(prompt('Ingrese un numero: '));
            }while(isNaN(number1) || isNaN(number2) || isNaN(number3));
            alert('El número mayor es ' + NumberMayor(number1,number2,number3))

        }else if(event.target.id == 4){
            /*
            ejercicio 4:
            Escribe un programa que pida un número y diga si es divisible por 2
            */
            do{
                var number = Number(prompt('Ingrese un numero: '));
            }while(isNaN(number));

            if(isNumberDivisible(number)){
                alert('El número es divisible entre 2');
            }else{
                alert('El número no es divisible entre 2');
            }
            

        }else if(event.target.id == 5){
            /*
            ejercicio 6:
            Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
            */
           var frase = prompt('Digite una frase: ');
            alert('La letra a aparece: ' + isCountChar(frase));
            
        }else if(event.target.id == 6){
            /*
            ejercicio 6:
            Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
            */
            var frase = prompt('Digite una frase: ');
            alert('Las vocales que aparecen en la palabra '+frase+' son: '+ CountVocal(frase));
            
        }else if(event.target.id == 7){
            /*
            ejercicio 7:
            Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
            */

            var frase = prompt('Digite una frase: ');
            var result = (CountCharVocals(frase) === 1) ? 'vocal' : 'vocales';
            alert('La frase contiene '+ CountCharVocals(frase) +' '+ result);
        }else if(event.target.id == 8){
            /*
            ejercicio 8:
            Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
            */

            var frase = prompt('Digite una frase: ');
            var vocalExist = CountVocalesFull(frase);
            alert(`En frase "${frase}" aparecen las vocales: a: ${vocalExist.a} | e: ${vocalExist.e} | i: ${vocalExist.i} | o: ${vocalExist.o} | u: ${vocalExist.u}`);
        }else if(event.target.id == 9){
            /*
            ejercicio 9:
            Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
            */
            var number = parseInt(prompt('Digite un número: '));
            alert('El número '+number+' es divisible por ' + numberDivisible(number));
        }else if(event.target.id == 10){
            /*
            ejercicio 10:
            Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
            */
            do{
                var number = parseInt(prompt('Ingrese un número: '))
            }while(isNaN(number));
            alert('Es divisible por ' + numberDivisible(number))
            
        }else if(event.target.id == 11){
            /*
            ejercicio 11:
            Escribir un programa que escriba en pantalla los divisores de un número dado
            */
            do{
                var number = parseInt(prompt('Ingrese un numero: '))
            }while(isNaN(number));
            alert("Los divisores de " + number + ' son: '+ Divisores(number))
        }else if(event.target.id == 12){
            /*
            ejercicio 12:
            Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
            */
            do{
                var number1 = parseInt(prompt('Ingrese un número: '));
                var number2 = parseInt(prompt('Ingrese un segundo número: '));
            }while(isNaN(number1) || isNaN(number2));
            alert(`Los divisores comunes de ${number1} y ${number2} son : ` + DivisoresComunes(number1,number2));
            
        }else if(event.target.id == 13){
            /*
            ejercicio 13:
            Escribir un programa que nos diga si un número dado es primo
            (no es divisible por ninguno otro número que no sea él mismo o la unidad)
            */
            do{
                var number = parseInt(prompt('Ingrese un numero: '))
            }while(isNaN(number));
            if(numberPrimo(number)){
                alert('Es primo');
            }else{
                alert('No es primo');
            }
            
        }
    })
})