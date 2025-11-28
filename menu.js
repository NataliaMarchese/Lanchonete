let opcao = Number(prompt(`
    Escolha uma opção
==========================
[1]Salgado
[2]Bebidas
[3]Lanches
[4]Sobremesas
[5]Sair
==========================
`
))

switch (opcao) {
    case 1:
        alert("Salgado")
        let sacolaSalgado = Number(prompt(`
            Qual salgado deseja comprar?
            ============================
            [1]Coxinha 6.00
            [2]Kibe  6.00
            [3]Bolinho de Queijo 6.00
            [4]Risole 6.00
            ============================
            `))

        switch (sacolaSalgado) {
            case 1:
                let unidadeCoxinha = Number(prompt("Quantas unidades de coxinha você deseja comprar?"))

                let totalCompra = unidadeCoxinha * 6
                alert(`${unidadeCoxinha} Und Total =${totalCompra}`)
                break;

            case 2:
                let unidadeKibe = Number(prompt("Quantas unidades de Kibe você deseja comprar?"))

                let totalCompra = unidadeKibe * 6
                alert(`${unidadeKIBE} Und Total =${totalCompra}`)
                break;
            
            default:
                break;
        }
        break;

    case 2:
        alert("Bebidas")
        let sacolaBebidas = Number(prompt(`
            Qual bebida deseja comprar?
            ============================
            [1]Guarana
            [2]Água
            [3]Suco de Uva
            [4]Coca Cola
            ============================
            `))
        break;

    case 3:
        alert("Lanches")
        let sacolaLanches = Number(prompt(`
            Qual lanche deseja comprar?
            ============================
            [1]Misto Quente
            [2]X-Burguer
            [3]X-Salada
            [4]X-Egg
            ============================
            `))
        break;

    case 4:
        alert("Sobremesas")
        let sacolaSobremesas = Number(prompt(`
            Qual sobremesa deseja comprar?
            ============================
            [1]Brigadeiro
            [2]Trufa
            [3]Torta Holandesa
            [4]Mouse 
            ============================
            `))
        break;

    case 5:
        alert("Sistema Finalizado!")
        break;

    default:
        alert("Não existe essa opção!")
        break;
}