const data = {
  estoque: [
    { codigoProduto: 101, descricaoProduto: "Caneta Azul", estoque: 150 },
    {
      codigoProduto: 102,
      descricaoProduto: "Caderno Universitário",
      estoque: 75,
    },
    { codigoProduto: 103, descricaoProduto: "Borracha Branca", estoque: 200 },
    { codigoProduto: 104, descricaoProduto: "Lápis Preto HB", estoque: 320 },
    {
      codigoProduto: 105,
      descricaoProduto: "Marcador de Texto Amarelo",
      estoque: 90,
    },
  ],
};

let movimentacoes = [];
let ultimoId = 0;

function movimentarEstoque(codigoProduto, tipo, quantidade, descricao) {
  // Encontrar produto pelo código
  const produto = data.estoque.find((p) => p.codigoProduto === codigoProduto);

  // Gerar ID único
  const id = ++ultimoId;

  const estoqueInicial = produto.estoque;
  console.log(estoqueInicial);

  if (tipo === "entrada") {
    produto.estoque += quantidade;
  } else if (tipo === "saida") {
    produto.estoque -= quantidade;
  } else {
    return "Tipo inválido. Use 'entrada' ou 'saida'.";
  }

  // Registrar movimentação
  movimentacoes.push({
    id,
    codigoProduto,
    tipo,
    quantidade,
    descricao,
    estoqueInicial,
    estoqueFinal: produto.estoque,
  });

  return `Estoque final do produto ${codigoProduto}: ${produto.estoque}`;
}

// Entrada de 20 unidades da Caneta Azul (101)
console.log(movimentarEstoque(101, "entrada", 20, "Reposição do fornecedor"));

// Saída de 10 unidades do Lápis Preto (104)
console.log(movimentarEstoque(104, "saida", 10, "Venda realizada"));

console.log(movimentacoes);
