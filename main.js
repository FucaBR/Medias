function calcular() {
    
    var n1 = +document.getElementById("n1").value ;
    var n2 = +document.getElementById("n2").value;
    var n3 = +document.getElementById("n3").value;
    var n4 = +document.getElementById("n4").value;
    var notaFinal = (n1+ n2 + n3+ n4) / 4;
    var notaFixada = notaFinal.toFixed(0);
    console.log(notaFixada);
    
    var resultado = document.getElementById("resultado");
    var resultadoFim = "A média das notas é: " + notaFixada;
    resultado.innerHTML = resultadoFim;
    }