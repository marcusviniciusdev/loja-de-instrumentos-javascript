import { Produto } from "./produto.js";

export class Teclas extends Produto {
    #tipo
    static LISTA = [

        new Teclas("Piano", 57800, "Yamaha", "Acustico"),
        new Teclas("Sintetizador", 12500, "NordStage", "Elétrico")
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
            `Tipo: ${this.#tipo}\n`
    }
    static listar() {
        let string = "Teclas: \n\n"
        //percorrer a lista de instrumentos de Teclas
        Teclas.LISTA.forEach((instrumento, index) => {
            string += `${index + 1} - ${instrumento.toString}`
            string += "\n"
        })
        return (string)
    }
    static get_instrumento(indice) {
        return Teclas.LISTA[indice - 1]
    }
    static insert_instrumento(indice, x) {
        return Teclas.LISTA.push(x)[indice - 1]
    }
    static cadastrar_teclas() {
        let teclas = new Teclas()
        teclas.nome = prompt("DIGITE O NOME DO PRODUTO:")
        teclas.marca = prompt("DIGITE A MARCA DO PRODUTO:")
        teclas.preco = prompt("DIGITE O PREÇO DO PRODUTO:")
        teclas.tipo = prompt("DIGITE O TIPO DO PRODUTO")
        if (confirm(`VOCÊ REALMENTE DESEJA CADASTRAR O PRODUTO ABAIXO:\n\n ${teclas.nome} | ${teclas.marca} | R$ ${teclas.preco}`)) {
            Teclas.inserir_lista(teclas)
            alert("PRODUTO CADASTRADO COM SUCESSO")
        }
    }
    static inserir_lista(teclas = new teclas()) {
        Teclas.LISTA.push(teclas)
    }
    static alterar_teclas() {
        let string = ""
        string += "ESCOLHA QUAL PRODUTO DESEJA ALTERAR: \n\n"
        //percorrer a lista de instrumentos de teclas
        Teclas.LISTA.forEach((instrumento, index) => {
            string += `${index + 1} - ${instrumento.toString}`
            string += "\n"
        })
        let opcao_alterar = parseInt(prompt(string))
        let escolha = Teclas.get_instrumento(opcao_alterar)

        if (confirm(`VOCÊ ESCOLHEU:\n 
        ${escolha.nome} | ${escolha.preco} | ${escolha.marca} | ${escolha.tipo}\n
        DESEJA REALMENTE ALTERAR?`)) {

            escolha.nome = prompt("DIGITE O NOME")
            Teclas.insert_instrumento(opcao_alterar, escolha.nome)
            escolha.marca = prompt("DIGITE A MARCA")
            Teclas.insert_instrumento(opcao_alterar, escolha.marca)
            escolha.preco = parseInt(prompt("DIGITE O NOVO PREÇO"))
            Teclas.insert_instrumento(opcao_alterar, escolha.preco)
            escolha.tipo = prompt("DIGITE O TIPO")
            Teclas.insert_instrumento(opcao_alterar, escolha.preco)
            alert("ALTERAÇÃO REALIZADA COM SUCESSO")
        }
    }
}