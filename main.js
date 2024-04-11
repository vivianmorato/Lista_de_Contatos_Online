//window.alert('Hello, world!')

const form = document.getElementById('form-dados')
const nomes = []
const telefones = []
let linhas = ''


form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaCadastrados()

})

function adicionaLinha(){
    const nome = document.getElementById('nome-contato')
    const tel = document.getElementById('tel-contato')
    let cad = document.getElementById('cadastrados')

    nomes.push(nome.value)
    telefones.push(Number(tel.value))
    cad.innerHTML = `${nomes.length}`



    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>${tel.value}</td>`
    linha +=`</tr>`

    linhas += linha
    
    nome.value = ''
    tel.value = ''
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaCadastrados (){
    console.log(nomes)
    console.log(telefones)
}