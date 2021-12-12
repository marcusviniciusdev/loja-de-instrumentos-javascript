
//import { Sopro } from "./model/sopro.js";
//import { Cordas } from "./model/cordas.js";


export class Carrinho {

    static LISTA_DE_COMPRAS = {
        lista_produtos: [
            //  new Sopro("flauta", 300, "yamaha", "madeira"),
            // new Cordas("Guitarra", 14700, "Fender", "Elétrico", "6 cordas", "Aço")
        ],
        status: "EM ANDAMENTO",
        data: "",
        total: 0

    }
    static HISTORICO_CARRINHO = []

    static adicionar_produto(item) {
        Carrinho.LISTA_DE_COMPRAS.lista_produtos.push(item)
        Carrinho.LISTA_DE_COMPRAS.total += item.preco
    }

    static mostrar_Carrinho() {
        let string = ""
        let cont = 0
        //LISTA OS PRODUTOS
        Carrinho.LISTA_DE_COMPRAS.lista_produtos.forEach((produto) => {
            cont++
            string += `▍ ${cont} - ${produto.nome} | ${produto.marca} |R$ ${produto.preco}\n`
            string += "\n";
        })
        //string += "\n"
        return string;
    }

    static finalizar_carrinho() {
        //VERIFICA SE O CARRINHO ESTA VAZIO
        let carrinho = {}
        carrinho.lista_produtos = Carrinho.LISTA_DE_COMPRAS.lista_produtos
        carrinho.status = "FINALIZADO"
        carrinho.data = new Date()
        carrinho.total = Carrinho.LISTA_DE_COMPRAS.total

        Carrinho.HISTORICO_CARRINHO.push(carrinho)
        Carrinho.LISTA_DE_COMPRAS.lista_produtos = []
        Carrinho.LISTA_DE_COMPRAS.total = 0
    }



    static mostrar_historico() {
        let string = ""
        string += `📃HISTÓRICO DE COMPRAS\n`
        Carrinho.HISTORICO_CARRINHO.forEach((carrinho, index) => {
            string += `————————————————————————\n`
            string += `🛒CARRINHO ${index + 1}\n`
            string += Carrinho.exibir_carrinho(carrinho)
        })
        return string
    }


    static exibir_carrinho(carrinho) {
        let string = ""
        string += "LISTA DE PRODUTOS: \n"
        carrinho.lista_produtos.forEach((produto) => {

            string += `- ${produto.nome} , preco: ${produto.preco}\n`

        })
        string += `- Status: ${carrinho.status}\n`
        string += `- Data: ${carrinho.data}\n`
        string += `TOTAL: R$ ${carrinho.total}\n`

        return string;
    }

    static deletar_carrinho() {
        let string = ""
        Carrinho.LISTA_DE_COMPRAS.lista_produtos = []
        string = `✅CARRINHO DELETADO!`
        return string

    }
}

