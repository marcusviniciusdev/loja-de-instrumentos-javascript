
import { Produto } from "./produto.js";

export class Cordas extends Produto {
    #tipo
    #qtd_cordas
    #tipo_de_corda
    static LISTA = [

        new Cordas("Violão", 12780, "Godin", "Elétrico", "6 cordas", "Nylon"),
        new Cordas("Guitarra", 14700, "Fender", "Elétrico", "6 cordas", "Aço")

    ]

    constructor(nome, preco, marca, tipo, qtd_cordas, tipo_de_corda) {
        super(nome, preco, marca)
        this.#tipo = tipo
        this.#qtd_cordas = qtd_cordas
        this.#tipo_de_corda = tipo_de_corda
    }

    get tipo() {
        return this.#tipo
    }
    set tipo(tipo) {
        this.#tipo = tipo;
    }

    get qtd_cordas() {
        return this.#qtd_cordas
    }
    set qtd_cordas(qtd_cordas) {
        this.#qtd_cordas = qtd_cordas;
    }

    get tipo_de_corda() {
        return this.#tipo_de_corda
    }
    set tipo_de_corda(tipo_de_corda) {
        this.#tipo_de_corda = tipo_de_corda
    }

    get toString() {
        return `${this.nome}\n` +
            `Marca: ${this.marca}\n` +
            `Preço: R$ ${this.preco}\n` +
            `Tipo: ${this.#tipo}\n` +
            `Cordas: ${this.#qtd_cordas}\n` +
            `Tipo de corda: ${this.#tipo_de_corda}\n`

    }

    static listar() {
        let string = "Cordas: \n\n"
        //percorrer a lista de instrumentos de corda
        Cordas.LISTA.forEach((instrumento, index) => {
            string += `${index + 1} - ${instrumento.toString()}`
            string += "\n"
        })
        return (string)
    }

    static get_instrumento(indice) {
        return Cordas.LISTA[indice - 1]
    }
    static insert_instrumento(indice, x) {
        return Cordas.LISTA.push(x)[indice - 1]
    }

    static cadastrar_cordas() {
        let cordas = new Cordas()
        cordas.nome = prompt("DIGITE O NOME DO PRODUTO:")
        cordas.marca = prompt("DIGITE A MARCA DO PRODUTO:")
        cordas.preco = prompt("DIGITE O PREÇO DO PRODUTO:")
        cordas.tipo = prompt("DIGITE O TIPO DO PRODUTO")
        cordas.qtd_cordas = prompt("DIGITE A QUANTIDADE DE CORDAS DO PRODUTO")
        cordas.tipo_de_corda = prompt("DIGITE O TIPO DE CORDA DO PRODUTO")
        if (confirm(`VOCÊ REALMENTE DESEJA CADASTRAR O PRODUTO ABAIXO:\n\n ${cordas.nome} | ${cordas.marca} | R$ ${cordas.preco}`)) {
            Cordas.inserir_lista(cordas)
            alert("PRODUTO CADASTRADO COM SUCESSO")
        }

    }
    static inserir_lista(cordas = new Cordas()) {
        Cordas.LISTA.push(cordas)
    }

    static alterar_cordas() {
        let string = ""
        string += "ESCOLHA QUAL PRODUTO DESEJA ALTERAR: \n\n"
        //percorrer a lista de instrumentos de corda
        Cordas.LISTA.forEach((instrumento, index) => {
            string += `${index + 1} - ${instrumento.toString}`
            string += "\n"
        })
        let opcao_alterar = parseInt(prompt(string))
        let escolha = Cordas.get_instrumento(opcao_alterar)

        if (confirm(`VOCÊ ESCOLHEU:\n 
        ${escolha.nome} | ${escolha.preco} | ${escolha.marca} | ${escolha.tipo}\n
        DESEJA REALMENTE ALTERAR?`)) {

            escolha.nome = prompt("DIGITE O NOME")
            Cordas.insert_instrumento(opcao_alterar, escolha.nome)
            escolha.marca = prompt("DIGITE A MARCA")
            Cordas.insert_instrumento(opcao_alterar, escolha.marca)
            escolha.preco = parseInt(prompt("DIGITE O NOVO PREÇO"))
            Cordas.insert_instrumento(opcao_alterar, escolha.preco)
            escolha.tipo = prompt("DIGITE O TIPO")
            Cordas.insert_instrumento(opcao_alterar, escolha.tipo)
            escolha.qtd_cordas = parseInt(prompt("DIGITE A QUANTIDADE DE CORDAS"))
            Cordas.insert_instrumento(opcao_alterar, escolha.qtd_cordas)
            escolha.tipo_de_corda = prompt("DIGITE O TIPO DE CORDAS")
            Cordas.insert_instrumento(opcao_alterar, escolha.tipo_de_corda)
            alert("ALTERAÇÃO REALIZADA COM SUCESSO")
        }
    }
}