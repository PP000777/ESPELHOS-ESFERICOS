document.getElementById('botao').addEventListener('click', espelhosEsfericos);

function espelhosEsfericos() {

    const P = parseFloat(document.getElementById('P').value);
    const F = parseFloat(document.getElementById('F').value);
    const Y = parseFloat(document.getElementById('Y').value);

    const unidadeP = document.getElementById('unidadeP').value;
    const unidadeF = document.getElementById('unidadeF').value;
    const unidadeY = document.getElementById('unidadeY').value;

    let Plinha, Ylinha, A;

    if (P !== F) {
        Plinha = (F * P) / (P - F);
        A = (-Plinha / P);
        Ylinha = A * Y;
    } else {
        Plinha = Infinity; 
        A = 0;
        Ylinha = 0;
    }

    let resultado = '';

  
    if (F > 0) {
        resultado += "Seu espelho é Côncavo.<br>";
    } else if (F === 0) {
        resultado += "Seu espelho é plano e não corresponde ao programa.<br>";
    } else if (F < 0) {
        resultado += "Seu espelho é Convexo.<br>";
    }

  
    if (P > 0) {
        resultado += "A distância do objeto é positiva.<br>";
    } else {
        resultado += "A distância do objeto é negativa.<br>";
    }

   
    if (Y > 0) {
        resultado += "Seu objeto está para cima.<br>";
    } else if (Y === 0) {
        resultado += "Seu objeto está no ponto.<br>";
    } else if (Y < 0) {
        resultado += "Seu objeto está para baixo.<br>";
    }

   
    if (P === F) {
        resultado += "Imagem Imprópria.<br>";
    }

   
    if (Plinha > 0) {
        resultado += "A imagem está fora do espelho.<br>";
    } else if (Plinha < 0) {
        resultado += "A imagem está dentro do espelho.<br>";
    }

    
    if (A > 0) {
        resultado += "A imagem é " + A + " vezes maior que o objeto e está direita.<br>";
    } else if (A < 0) {
        resultado += "A imagem é " + Math.abs(A) + " vezes menor que o objeto e está invertida.<br>";
    }

    
    if (Ylinha < 0) {
        resultado += "A altura da imagem é " + Math.abs(Ylinha) + " " + unidadeY + " e está invertida.<br>";
    } else {
        resultado += "A altura da imagem é " + Ylinha + " " + unidadeY + " e está direita.<br>";
    }

    document.getElementById('mensagem').innerHTML = resultado;
}