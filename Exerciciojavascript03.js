

var y=parseInt(prompt('Quantos usuários devem ser cadastrados?'))
var DadosdoUsuario=[]
var array=[]
for(var i=1;i<=y;i++) {
array.altura=(prompt('Digite sua altura')),
array.idade=(prompt('Digite sua idade')),
array.cordosolhos=(prompt('Qual a cor dos seus olhos?'))} 


 
DadosdoUsuario.push(array)
/* {
     altura:"",idade:0 ,cordosolhos:"",} */
  

for(var dados of DadosdoUsuario){
    document.write(`Altura: ${dados.altura}m <br>
                    Idade: ${dados.idade}anos <br>
                    Cor dos Olhos:${dados.cordosolhos}<br>
       `);}

