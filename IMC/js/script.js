//capturar evento do formulário
const form = window.document.querySelector('#formulario');
form.addEventListener('submit',
function (evento) 
{ evento.preventDefault();
  //console.log('evento prevenido');
  //setResultado('ola mundo');

  const inputPeso = evento.target.querySelector('#input-peso');
  const inputAltura = evento.target.querySelector('#input-altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso){
    setResultado('peso invalido',false);
    return;
  }
  
  if (!altura){
    setResultado('altura invalido',false);
    return;
  }
  
  const imc = getImc(peso,altura);
  const categoriaImc = checkImc(imc);

  const msg = `Seu IMC é ${imc} (${categoriaImc})`;
  setResultado(msg,true);

});

function checkImc(imc){
 const categoria = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1'];


 if (imc >= 39.9){
   return categoria[5];
 } else if( imc >= 34.9 ){
    return categoria[4];
 }
 else if(imc >= 29.9 ){
    return categoria[3];
 }
 else if(imc >= 24.9){
    return categoria[2];
 }
 else if(imc >= 18.5){
    return categoria[1];
 }
 else if(imc < 18.5 ){
    return categoria[0];
 }
 
}

function criaP () {
    const p = document.createElement('p');
    return p;

}

function getImc(peso,altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function setResultado (msg,isValid){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ' ';
  const p = criaP();

  if(isValid) {
    p.classList.add('paragrafo-resultado');
  }else{
    p.classList.add('paragrafo-resultadoInvalido');
  }
  
  p.innerHTML = msg;
  resultado.appendChild(p);
 
}