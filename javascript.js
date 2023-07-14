// Dados de fome das cidades
var cidadeDados = [
  { cidade: "Belem, Para", porcentagem: 10 },
  { cidade: "Manaus, Amazonas", porcentagem: 20 },
  { cidade: "Sao Luis, Maranhao", porcentagem: 30 },
  { cidade: "Recife, Pernambuco", porcentagem: 40 },
  { cidade: "Salvador, Bahia", porcentagem: 50 },
  { cidade: "Fortaleza, Ceara", porcentagem: 60 },
  { cidade: "Porto Alegre, Rio Grande do Sul", porcentagem: 70 },
  { cidade: "Belo Horizonte, Minas Gerais", porcentagem: 80 },
  { cidade: "Rio de Janeiro, Rio de Janeiro", porcentagem: 90 },
  { cidade: "São Paulo, São Paulo", porcentagem: 100 }
];

// Função para atualizar os dados com a cidade selecionada
function atualizarDados() {
  var cidadeSelector = document.getElementById("cidadeSelector");
  var cidadeSelecionada = cidadeSelector.value;
  var dadosCidade = document.getElementById("dadosCidade");
  var nomeCidade = document.getElementById("nomeCidade");
  var barraProgressoFilho = document.getElementById("barraProgressoFilho");
  var porcentagemNumero = document.getElementById("porcentagemNumero");

  if (cidadeSelecionada === "") {
    dadosCidade.style.display = "none";
  } else {
    for (var i = 0; i < cidadeDados.length; i++) {
      var cidade = cidadeDados[i];
      if (cidadeSelecionada === cidade.cidade) {
        nomeCidade.innerHTML = cidade.cidade;
        barraProgressoFilho.style.width = cidade.porcentagem + "%";
        porcentagemNumero.innerHTML = cidade.porcentagem + "%";
        dadosCidade.style.display = "block";
        animateProgressBar(barraProgressoFilho, cidade.porcentagem);
        break;
      }
    }
  }
}

// Função para animar a barra de progresso
function animateProgressBar(barra, porcentagem) {
  var width = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= porcentagem) {
      clearInterval(id);
    } else {
      width++;
      barra.style.width = width + "%";
    }
  }
}