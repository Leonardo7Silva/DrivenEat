let opcaoselecionada1;
let opcaoselecionada2;
let opcaoselecionada3;

function selecionarcomida(opcao){
    opcaoselecionada1 = document.querySelector('.comida .verde');
    if (opcaoselecionada1 !== null){
        opcaoselecionada1.classList.remove('verde');
    }
    opcao.classList.add("verde");
    
    fazerpedido();
}
function selecionarbebida(opcao){
    opcaoselecionada2 = document.querySelector('.bebida .verde');
    if (opcaoselecionada2 !== null){
        opcaoselecionada2.classList.remove('verde');
    }
    opcao.classList.add("verde");
    fazerpedido();

}
function selecionarsobremesa(opcao){
    opcaoselecionada3 = document.querySelector('.sobremesa .verde');
    if (opcaoselecionada3 !== null){
        opcaoselecionada3.classList.remove('verde');
    }
    opcao.classList.add("verde");
    fazerpedido();

}
function fazerpedido(){
    opcaoselecionada1 = document.querySelector('.comida .verde');
    opcaoselecionada2 = document.querySelector('.bebida .verde');
    opcaoselecionada3 = document.querySelector('.sobremesa .verde');
   
    if ( opcaoselecionada1 && opcaoselecionada2 && opcaoselecionada3){
       
        const botao = document.querySelector(".botao")
        const confi = document.querySelector(".confirmacao")
        botao.classList.add("remove")
        confi.classList.remove("remove")
    }
}
function zapzap(){
    const nome = prompt('Insira seu nome');
    const endereco = prompt('insira o seu endereco');
    let comida = document.querySelector('.comida .verde h2');
    let bebida = document.querySelector('.bebida .verde h2');
    let sobremesa = document.querySelector('.sobremesa .verde h2');
    let p1 = document.querySelector('.comida .verde R1');
    let p2 = document.querySelector('.bebida .verde R1');
    let p3 = document.querySelector('.sobremesa .verde R1');
    let total = Number(p1.innerHTML) +Number(p2.innerHTML) +Number(p3.innerHTML);
    
    let txt = `Olá, Gostaria de fazer meu pedido: \n
    - ${comida.innerHTML} 
    - ${bebida.innerHTML} 
    - ${sobremesa.innerHTML} 
    Total: R$ ${total.toFixed(2)}. \n
    Nome: ${nome}
    Endereço: ${endereco}`;
    let final = encodeURIComponent(txt)

    let corno = document.querySelector("a");
    corno.href = ('https://wa.me/5521992474909?text='+ final);

}