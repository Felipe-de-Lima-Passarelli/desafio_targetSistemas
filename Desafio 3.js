function calcularJuros(valor, dataVencimentoBR) {
  const hoje = new Date();

  const [dia, mes, ano] = dataVencimentoBR.split("/");
  const vencimento = new Date(`${ano}-${mes}-${dia}`);

  //Diferença em milissegundos de atraso
  const diffMs = hoje - vencimento;

  //Conversão para dias de atraso
  const diasAtraso = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diasAtraso <= 0) {
    return {
      diasAtraso: 0,
      juros: formatarValor(0),
      valorFinal: formatarValor(valor),
    };
  }

  const multaDiaria = 0.025;
  const juros = valor * multaDiaria * diasAtraso;
  const valorFinal = valor + juros;

  return {
    diasAtraso,
    juros: formatarValor(juros),
    valorFinal: formatarValor(valorFinal),
  };
}

function formatarValor(num) {
  return num.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

console.log(calcularJuros(1000, "10/01/2025"));
