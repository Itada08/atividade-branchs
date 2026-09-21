// 4. Sorteio de numero de 0 a 100
(function(){
  var resultado = document.getElementById('numero-resultado');
  document.getElementById('btn-sortear-numero').addEventListener('click', function(){
    var numero = Math.floor(Math.random() * 101);
    resultado.textContent = numero;
  });
})();