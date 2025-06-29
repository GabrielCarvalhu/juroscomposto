


let capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));


if (isNaN(capitalInicial) || capitalInicial <= 0) {
    console.log("Erro: Por favor, digite um valor válido para o capital inicial.");
} else {
  
    let periodoMeses = parseInt(prompt("Digite o período da aplicação em meses:"));
    
  
    if (isNaN(periodoMeses) || periodoMeses <= 0) {
        console.log("Erro: Por favor, digite um valor válido para o período em meses.");
    } else {
        
        let capitalComposto = capitalInicial * Math.pow(1 + 0.05, periodoMeses);
        
        // Exibe os resultados no console
        console.log("=== CÁLCULO DE JUROS COMPOSTOS ===");
        console.log(`Capital Inicial: R$ ${capitalInicial.toFixed(2)}`);
        console.log(`Período: ${periodoMeses} meses`);
        console.log(`Taxa de juros: 5% ao mês`);
        console.log(`Capital Final: R$ ${capitalComposto.toFixed(2)}`);
        console.log(`Juros obtidos: R$ ${(capitalComposto - capitalInicial).toFixed(2)}`);
    }
}