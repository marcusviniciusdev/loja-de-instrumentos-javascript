

export class Produto {
    #nome
    #preco;
    #marca;
    constructor(nome, preco, marca) {
        this.#nome = nome;
        this.#preco = preco;
        this.#marca = marca;
    }
    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    } get preco() {
        return this.#preco;
    }
    set preco(preco) {
        this.#preco = preco;
    }
    get marca() {
        return this.#marca;
    }
    set marca(marca) {
        this.#marca = marca;
    }

}