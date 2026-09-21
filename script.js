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