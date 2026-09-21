// 6. Inverter palavras
(function(){
  var input = document.getElementById('input-inverter');
  var resultado = document.getElementById('inverter-resultado');
  document.getElementById('btn-inverter').addEventListener('click', function(){
    var frase = input.value.trim();
    if(!frase){ resultado.textContent = ''; return; }
    var invertida = frase.split(' ').reverse().join(' ');
    resultado.textContent = invertida;
  });
})();