import { Cordas } from "./model/cordas.js";
import { Produto } from "./model/produto.js";
import { Percussão } from "./model/percussão.js";
import { Sopro } from "./model/sopro.js";
import { Teclas } from "./model/teclas.js";
import { Carrinho } from "./model/carrinho.js";



while (1) {
    let op = menu()

    if (op == 1) {
        comprar()
    } else if (op == 2) {
        carrinho()
    } else if (op == 3) {
        minhas_compras()
    } else if (op == 4) {
        desenvolvedor()
    } else if (op == 5) {
        alert("Obrigado volte sempre!")
        break
    }
}
//FUNÇÃO PRINCIPAL
function menu() {
    let string = ""
    string = "▍BEM VINDO A LOJA DE INSTRUMENTOS PLAYTECH ▍\n"
    string += "▍🎸🎺🥁🎻🎤 \n"
    string += "▍ 1 -💸 COMPRAR\n"
    string += "▍ 2 -🛒 CARRINHO \n"
    string += "▍ 3 -📑 MINHAS COMPRAS \n"
    string += "▍ 4 -💻 AREA DO DESENVOLVEDOR \n"
    string += "▍ 5 -🔚 SAIR \n"

    let opcao = parseInt(prompt(string))
    return opcao
}

function comprar() {
    let string = ""
    string += "ESCOLHA UM DEPARTAMENTO: \n"
    string += mostrar_departamentos()
    let opcao_comprar = parseInt(prompt(string))

    //CAPTA PRODUTO NO SETOR DE CORDAS
    if (opcao_comprar == 1) {
        //LISTA OS PRODUTOS DA SEÇÃO DE CORDAS
        let opcao_corda = parseInt(prompt(listar_produtos(Cordas.LISTA)))
        //CAPTA A ESCOLHA DO INSTRUMENTO, CONFORME O INDICE 
        let instrumento = Cordas.get_instrumento(opcao_corda)
        //ADICIONA NO CARRINHO
        adiciona_carrinho(instrumento)
        //RETORNA AO MENU COMPRAR PRINCIPAL PARA ESCOLHER OUTRO PRODUTO
        return comprar()
    }
    if (opcao_comprar == 2) {
        let opcao_teclas = parseInt(prompt(listar_produtos(Teclas.LISTA)))
        let instrumento = Teclas.get_instrumento(opcao_teclas)
        adiciona_carrinho(instrumento)
        return comprar()
    }
    if (opcao_comprar == 3) {
        let opcao_sopro = parseInt(prompt(listar_produtos(Sopro.LISTA)))
        let instrumento = Sopro.get_instrumento(opcao_sopro)
        adiciona_carrinho(instrumento)
        return comprar()
    }
    if (opcao_comprar == 4) {
        let opcao_sopro = parseInt(prompt(listar_produtos(Percussão.LISTA)))
        let instrumento = Percussão.get_instrumento(opcao_sopro)
        adiciona_carrinho(instrumento)
        return comprar()
    }
    if (opcao_comprar == 5) {
        return
    }
}

function mostrar_departamentos() {
    let string = ""
    string += "▍ 1 -🎸 CORDA\n"
    string += "▍ 2 -🎹 TECLAS \n"
    string += "▍ 3 -🎺 SOPRO \n"
    string += "▍ 4 -🥁 PERCUSSÃO \n"
    string += "▍ 5 -🔙 SAIR \n"
    return string
}

function listar_produtos(lista) {
    let string = "▍ESCOLHA UM PRODUTO ▍\n"
    string += "          🎸🎺🥁🎻🎤\n\n"
    lista.forEach((produto, index) => {
        string += ` ${index + 1} - ${produto.toString}\n`
        string += "-----------------------------------------------------\n"
    })
    return string
}

function carrinho() {
    if (Carrinho.LISTA_DE_COMPRAS.lista_produtos.length == 0) {
        alert("❌O CARRINHO ESTÁ VAZIO!")
        return
    }

    let string = "▍🛒CARRINHO: \n\n"
    string += `${Carrinho.mostrar_Carrinho()}`
    string += `TOTAL: R$ ${Carrinho.LISTA_DE_COMPRAS.total}\n`
    string += `________________________________________\n`
    string += `STATUS: ${Carrinho.LISTA_DE_COMPRAS.status}\n`
    string += `DIGITE:\n`
    string += `1-FINALIZAR CARRINHO\n`
    string += `2-APAGAR CARRINHO\n`
    string += `3-VOLTAR`

    let opcao = parseInt(prompt(string))

    if (opcao == 1) {
        if (confirm("👍VOCÊ DESEJA REALMENTE FINALIZAR O CARRINHO?")) {
            Carrinho.finalizar_carrinho()
            alert("✅ CARRINHO FINALIZADO")
        }
    }
    if (opcao == 2) {
        if (confirm("❌DESEJA REALMENTE APAGAR O CARRINHO?")) {
            alert(Carrinho.deletar_carrinho())
        }
    }
}

function adiciona_carrinho(produto) {
    let string = ""
    if (confirm(`Deseja adicionar o produto ${produto.nome} | ${produto.marca} | R$ ${produto.preco} ao carrinho?`)) {
        Carrinho.adicionar_produto(produto)
        alert(string = `🆗ENVIADO PARA O CARRINHO🛒: ${produto.nome} | ${produto.marca} | R$ ${produto.preco}`)
    }
}

function minhas_compras() {
    let string = ""
    if (Carrinho.HISTORICO_CARRINHO.length == 0) {
        string += ("VOCÊ AINDA NÃO EFETUOU COMPRAS!")
        alert(string)
    } else {
        string += Carrinho.mostrar_historico()
        alert(string)
    }
}

function desenvolvedor() {
    let senha = prompt("Digite a senha: ")

    if (senha == 1009) {
        let string = "💻AREA DO DESENVOLVEDOR: \n"
        string = "ESCOLHA UMA OPÇÃO ABAIXO: \n"
        string += "▍  1 -CADASTRAR PRODUTOS\n"
        string += "▍  2 -ATUALIZAR PRODUTOS \n"
        string += "▍  3 -VOLTAR \n"
        let opcao_desenvolvedor = parseInt(prompt(string))

        if (opcao_desenvolvedor == 1) {
            cadastrar_produtos()
        } else if (opcao_desenvolvedor == 2) {
            atualizar_produto()
        } else if (opcao_desenvolvedor == 3) {
            return
        } else {
            alert("OPÇÃO INVÁLIDA")
            return desenvolvedor()
        }
    } else { alert("SENHA INCORRETA -> PROFESSOR USE A SENHA: 1009") }
}

function cadastrar_produtos() {
    let string = ""
    string = "ESCOLHA EM QUAL DEPARTAMENTO QUER CADASTRAR UM PRODUTO:\n"
    string += mostrar_departamentos()
    let opcao_cadastrar_produto = parseInt(prompt(string))

    if (opcao_cadastrar_produto == 1) {
        Cordas.cadastrar_cordas()
    } else if (opcao_cadastrar_produto == 2) {
        Teclas.cadastrar_teclas()
    } else if (opcao_cadastrar_produto == 3) {
        Sopro.cadastrar_sopro()
    } else if (opcao_cadastrar_produto == 4) {
        Percussão.cadastrar_percussao()
    } else if (opcao_cadastrar_produto == 5) {
        return desenvolvedor()
    } else if (alert("OPÇÃO INVALIDA")) {
        return desenvolvedor()
    }
}

function atualizar_produto() {
    let string = ""
    string = "ESCOLHA UM DEPARTAMENTO:\n"
    string += mostrar_departamentos()
    let opcao_atualizar_produto = parseInt(prompt(string))

    if (opcao_atualizar_produto == 1) {
        Cordas.alterar_cordas()
    } else if (opcao_atualizar_produto == 2) {
        Teclas.alterar_teclas()
    } else if (opcao_atualizar_produto == 3) {
        Sopro.alterar_sopro()
    } else if (opcao_atualizar_produto == 4) {
        Percussão.alterar_percussao()
    } else if (opcao_atualizar_produto == 5) {
        return desenvolvedor()
    } else if (alert("OPÇÃO INVALIDA")) {
        return desenvolvedor()
    }

}





