function tratarErroELancar(erro) {
    throw new Error('Houve um erro de processamento. Mas acalme seu coração porque a nossa equipe já está trabalhando para corrigir o problema!😉')
}

function imprimirNomeGritado(obj) {
    try {    
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Bobou!')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)