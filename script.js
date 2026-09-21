// 1. Aumentar a escrita com um botão
(function(){
  var texto = document.getElementById('texto-crescente');
  var btn = document.getElementById('btn-aumentar');
  var tamanho = 16;
  btn.addEventListener('click', function(){
    tamanho = Math.min(tamanho + 4, 48);
    texto.style.fontSize = tamanho + 'px';
  });
})();