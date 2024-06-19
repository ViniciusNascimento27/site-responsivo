let nome, email, cartao, validade, cvv
    const btnPagar = document.getElementById('btn-pagar');
    const formPagamento = document.getElementById('form-pagamento');

    btnPagar.addEventListener('click', function() {
    document.querySelector('.plano').style.display = 'none';
    document.querySelector('.pagamento').style.display = 'block';
});
function pagar(){
    nome = document.getElementById('nome').value
    email = document.getElementById('email').value
    cartao = document.getElementById('cartao').value
    validade = document.getElementById('validade').value
    cvv = document.getElementById('cvv').value
    if(nome != "" && email != "" && cartao != "" && validade != "" && cvv !="" ){
        alert("Pagamento efetuado no nome de " +nome)
    }
}
form