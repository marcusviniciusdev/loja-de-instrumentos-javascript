import { Produto } from "./produto.js";

export class Sopro extends Produto {
    #tipo
    static LISTA = [

        new Sopro("Sax", 8745, "Yamaha", "Metal",),
        new Sopro("Flauta Doce", 1760, "yamaha", "Madeira",)

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
        let string = "Sopro: \n\n"
        //percorrer a lista de instrumentos de Sopro
        Sopro.LISTA.forEach((instrumento, index) => {
            string += `${index + 1} - ${instrumento.toString}`
            string += "\n"
        })
        return (string)
    }
    static get_instrumento(indice) {
        return Sopro.LISTA[indice - 1]
    }
    static insert_instrumento(indice, x) {
        return Sopro.LISTA.push(x)[indice - 1]
    }
    static cadastrar_sopro() {
        let sopro = new Sopro()
        sopro.nome = prompt("DIGITE O NOME DO PRODUTO:")
        sopro.marca = prompt("DIGITE A MARCA DO PRODUTO:")
        sopro.preco = prompt("DIGITE O PREÇO DO PRODUTO:")
        sopro.tipo = prompt("DIGITE O TIPO DO PRODUTO")
        if (confirm(`VOCÊ REALMENTE DESEJA CADASTRAR O PRODUTO ABAIXO:\n\n ${sopro.nome} | ${sopro.marca} | R$ ${sopro.preco}`)) {
            Sopro.inserir_lista(sopro)
            alert("PRODUTO CADASTRADO COM SUCESSO")
        }
    }
    static inserir_lista(sopro = new sopro()) {
        Sopro.LISTA.push(sopro)
    }

    static alterar_sopro() {
        let string = ""
        string += "ESCOLHA QUAL PRODUTO DESEJA ALTERAR: \n\n"
        //percorrer a lista de instrumentos de teclas
        Sopro.LISTA.forEach((instrumento, index) => {
            string += `${index + 1} - ${instrumento.toString}`
            string += "\n"
        })
        let opcao_alterar = parseInt(prompt(string))
        let escolha = Sopro.get_instrumento(opcao_alterar)

        if (confirm(`VOCÊ ESCOLHEU:\n 
        ${escolha.nome} | ${escolha.preco} | ${escolha.marca} | ${escolha.tipo}\n
        DESEJA REALMENTE ALTERAR?`)) {

            escolha.nome = prompt("DIGITE O NOME")
            Sopro.insert_instrumento(opcao_alterar, escolha.nome)
            escolha.marca = prompt("DIGITE A MARCA")
            Sopro.insert_instrumento(opcao_alterar, escolha.marca)
            escolha.preco = parseInt(prompt("DIGITE O NOVO PREÇO"))
            Sopro.insert_instrumento(opcao_alterar, escolha.preco)
            escolha.tipo = prompt("DIGITE O TIPO")
            Sopro.insert_instrumento(opcao_alterar, escolha.tipo)
            alert("ALTERAÇÃO REALIZADA COM SUCESSO")
        }
    }


}