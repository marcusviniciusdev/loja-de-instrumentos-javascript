import { Produto } from "./produto.js";

export class Percussão extends Produto {
    #tipo
    static LISTA = [

        new Percussão("Bateria", 7890, "TAMA", "Acústico"),
        new Percussão("Bateria", 25000, "PDP", "Acústico")

    ]

    constructor(nome, preco, marca, tipo) {
        super(nome, preco, marca)
        this.#tipo = tipo
    }

    get tipo() {
        return this.#tipo
    }
    set tipo(tipo) {
        this.#tipo = tipo;
    }

    get toString() {
        return `${this.nome}\n` +
            `Marca: ${this.marca}\n` +
            `Preço: R$ ${this.preco}\n` +
            `Tipo: ${this.#tipo}`

    }

    static listar() {
        let string = "Percussão: \n\n"
        //percorrer a lista de instrumentos de Percussão
        Percussão.LISTA.forEach((instrumento, index) => {
            string += ` ${index + 1} - ${instrumento.toString}\n`
            string += "\n"
        })
        return (string)
    }
    static get_instrumento(indice) {
        return Percussão.LISTA[indice - 1]
    }
    static insert_instrumento(indice, x) {
        return Percussão.LISTA.push(x)[indice - 1]
    }

    static cadastrar_percussao() {
        let percussao = new Percussão()
        percussao.nome = prompt("DIGITE O NOME DO PRODUTO:")
        percussao.marca = prompt("DIGITE A MARCA DO PRODUTO:")
        percussao.preco = prompt("DIGITE O PREÇO DO PRODUTO:")
        percussao.tipo = prompt("DIGITE O TIPO DO PRODUTO")
        if (confirm(`VOCÊ REALMENTE DESEJA CADASTRAR O PRODUTO ABAIXO:\n\n ${percussao.nome} | ${percussao.marca} | R$ ${percussao.preco}`)) {
            Percussão.inserir_lista(percussao)
            alert("PRODUTO CADASTRADO COM SUCESSO")
        }
    }
    static inserir_lista(percussao = new percussao()) {
        Percussão.LISTA.push(percussao)
    }

    static alterar_percussao() {
        let string = ""
        string += "ESCOLHA QUAL PRODUTO DESEJA ALTERAR: \n\n"
        //percorrer a lista de instrumentos de teclas
        Percussão.LISTA.forEach((instrumento, index) => {
            string += `${index + 1} - ${instrumento.toString}`
            string += "\n\n"
        })
        let opcao_alterar = parseInt(prompt(string))
        let escolha = Percussão.get_instrumento(opcao_alterar)

        if (confirm(`VOCÊ ESCOLHEU:\n 
        ${escolha.nome} | ${escolha.preco} | ${escolha.marca} | ${escolha.tipo}\n
        DESEJA REALMENTE ALTERAR?`)) {

            escolha.nome = prompt("DIGITE O NOME")
            Percussão.insert_instrumento(opcao_alterar, escolha.nome)
            escolha.marca = prompt("DIGITE A MARCA")
            Percussão.insert_instrumento(opcao_alterar, escolha.marca)
            escolha.preco = parseInt(prompt("DIGITE O NOVO PREÇO"))
            Percussão.insert_instrumento(opcao_alterar, escolha.preco)
            escolha.tipo = prompt("DIGITE O TIPO")
            Percussão.insert_instrumento(opcao_alterar, escolha.tipo)
            alert("ALTERAÇÃO REALIZADA COM SUCESSO")
        }
    }

}