// 1. Aumentar a escrita com um botão
(function(){
  var texto = document.getElementById('texto-crescente');
  var btn = document.getElementById('btn-aumentar');
  var tamanho = 16;
  btn.addEventListener('click', function(){
    tamanho = Math.min(tamanho + 4, 48);
    texto.style.fontSize = tamanho + 'px';
// 2. Tabela com dados do input
(function(){
  var inputNome = document.getElementById('input-nome-tabela');
  var inputInfo = document.getElementById('input-info-tabela');
  var btn = document.getElementById('btn-add-tabela');
  var tabela = document.getElementById('tabela-dados');
  var corpo = document.getElementById('tabela-corpo');
  var vazio = document.getElementById('tabela-vazia');

  btn.addEventListener('click', function(){
    var nome = inputNome.value.trim();
    var info = inputInfo.value.trim();
    if(!nome){ return; }
    var linha = document.createElement('tr');
    var tdNome = document.createElement('td');
    var tdInfo = document.createElement('td');
    tdNome.textContent = nome;
    tdInfo.textContent = info || '—';
    linha.appendChild(tdNome);
    linha.appendChild(tdInfo);
    corpo.appendChild(linha);

    vazio.hidden = true;
    tabela.hidden = false;

    inputNome.value = '';
    inputInfo.value = '';
    inputNome.focus();
  });
})();