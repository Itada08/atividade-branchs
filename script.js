// 5. Mudar a cor do nome
(function(){
  var nomeEl = document.getElementById('nome-colorido');
  var input = document.getElementById('input-nome-cor');
  document.getElementById('btn-atualizar-nome-cor').addEventListener('click', function(){
    nomeEl.textContent = input.value.trim() || 'Chico';
  });
  var swatches = document.querySelectorAll('.swatch');
  swatches.forEach(function(sw){
    sw.addEventListener('click', function(){
      nomeEl.style.color = sw.getAttribute('data-cor');
    });
  });
})();