let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p> <br> <p>Tipo | Descrição | Valor</p>'
    
    // AQUI VEM A IMPLEMENTAÇÃO
    
    const print = (item, i, array) => {

        divDespesas.innerHTML += `<br><p> ${item.tipo}, ${item.descricao}, ${item.valor}</p>`
    }
    despesas.forEach(print)
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0

    // AQUI VEM A IMPLEMENTAÇÃO 

    const sumValorOfTipo = (item, i, array) => {
        if (item.tipo === "alimentação") {
            gastoAlimentacao += item.valor
        } else if (item.tipo === "utilidades") {
            gastoUtilidades += item.valor
        } else if (item.tipo === "viagem") {
            gastoViagem += item.valor
        }
    }
    arrDespesas.forEach(sumValorOfTipo)

    const sumValorOfAll = (item, i, array) => {
        gastoTotal += item.valor
    }
    arrDespesas.forEach(sumValorOfAll)

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)


     // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    
    const checkFiltro = (item, i, array) => {
        if (item.tipo === tipoFiltro && (item.valor >= valorMin && item.valor <= valorMax)){
            
            return true
        }
        return false
    }

    let despesasFiltradas = arrDespesas.filter(checkFiltro)
    
    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}