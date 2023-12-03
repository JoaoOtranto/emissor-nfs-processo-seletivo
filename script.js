function emitirNotaFiscal() {
    // Dados Prestador
    document.getElementById("prestadorCnpj").innerText = document.getElementById("cnpjPrestador").value;
    document.getElementById("prestadorInscricao").innerText = document.getElementById("inscricaoPrestador").value;
    document.getElementById("prestadorRazao").innerText = document.getElementById("nomePrestador").value;
    document.getElementById("prestadorEndereco").innerText = document.getElementById("enderecoPrestador").value;
    document.getElementById("prestadorMunicipio").innerText = document.getElementById("municipioPrestador").value;
    document.getElementById("prestadorUf").innerText = document.getElementById("ufPrestador").value;
    document.getElementById("prestadorEmail").innerText = document.getElementById("emailPrestador").value;

    // Dados Tomador
    document.getElementById("tomadorCnpj").innerText = document.getElementById("cnpjTomador").value;
    document.getElementById("tomadorInscricao").innerText = document.getElementById("inscricaoTomador").value;
    document.getElementById("tomadorRazao").innerText = document.getElementById("nomeTomador").value;
    document.getElementById("tomadorEndereco").innerText = document.getElementById("enderecoTomador").value;
    document.getElementById("tomadorMunicipio").innerText = document.getElementById("municipioTomador").value;
    document.getElementById("tomadorUf").innerText = document.getElementById("ufTomador").value;
    document.getElementById("tomadorEmail").innerText = document.getElementById("emailTomador").value;

    // Dados Nota Fiscal
    document.getElementById("servicosDesc").innerText = document.getElementById("descricaoNfs").value;
    document.getElementById("notaValor").innerText = calcularValorNota();
    document.getElementById("deducoesValor").innerText = calcularDeducoes();
    document.getElementById("calculoBase").innerText = document.getElementById("baseCalcNfs").value;
    document.getElementById("issAliquota").innerText = document.getElementById("aliquotaNfs").value + "%";
    document.getElementById("issValor").innerText = calcularValorISS();
    
    calcularValorTotalNota();
}

function calcularDeducoes() {
    const valorNfs = parseFloat(document.getElementById("valorNfs").value);
    const deducaoNfs = parseFloat(document.getElementById("deducaoNfs").value);
    return (valorNfs * (deducaoNfs / 100)).toFixed(2);
}

function calcularBaseCalculo() {
    const valorNfs = parseFloat(document.getElementById("valorNfs").value);
    const deducaoNfs = parseFloat(document.getElementById("deducaoNfs").value);
    return (valorNfs - (valorNfs * (deducaoNfs / 100))).toFixed(2);
}

function calcularValorISS() {
    const baseCalcNfs = parseFloat(document.getElementById("baseCalcNfs").value);
    const aliquotaNfs = parseFloat(document.getElementById("aliquotaNfs").value);
    return (baseCalcNfs * (aliquotaNfs / 100)).toFixed(2);
}

function calcularValorNota() {
    const valorNfs = parseFloat(document.getElementById("valorNfs").value);
    const deducaoNfs = parseFloat(document.getElementById("deducaoNfs").value);
    return (valorNfs - (valorNfs * (deducaoNfs / 100))).toFixed(2);
}

function calcularValorTotalNota() {
    const valorNota = parseFloat(document.getElementById("notaValor").innerText);
    const valorISS = parseFloat(document.getElementById("issValor").innerText);
    const deducoes = parseFloat(document.getElementById("deducoesValor").innerText);

    const valorTotal = (valorNota + valorISS - deducoes).toFixed(2);

    document.getElementById("totalValor").innerText = valorTotal;
}




