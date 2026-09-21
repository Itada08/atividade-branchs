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

// 3. Nomes aleatorios
(function(){
  var primeiros = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elisa', 'Felipe', 'Gabriela', 'Hugo', 'Ivana', 'João', 'Larissa', 'Marcos'];
  var sobrenomes = ['Silva', 'Souza', 'Oliveira', 'Costa', 'Pereira', 'Ferreira', 'Rodrigues', 'Almeida', 'Nogueira', 'Barros'];
  var resultado = document.getElementById('nome-resultado');
  document.getElementById('btn-nome-aleatorio').addEventListener('click', function(){
    var p = primeiros[Math.floor(Math.random() * primeiros.length)];
    var s = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    resultado.textContent = p + ' ' + s;
  });
})();

// 4. Sorteio de numero de 0 a 100
(function(){
  var resultado = document.getElementById('numero-resultado');
  document.getElementById('btn-sortear-numero').addEventListener('click', function(){
    var numero = Math.floor(Math.random() * 101);
    resultado.textContent = numero;
  });
})();

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
