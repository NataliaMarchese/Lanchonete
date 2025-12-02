let opcao = Number(prompt(`Escolha uma opção
==========================
[1]Salgado
[2]Bebidas
[3]Lanches
[4]Sobremesas
[5]Sair
==========================
`))

function Salgados(){
    alert("salgado")
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
    
        case 2: {
    
            let unidadeKibe = Number(prompt("Quantas unidades de kibe você deseja comprar?"))
    
            let totalCompra = unidadeKibe * 5
    
            alert(`${unidadeKibe} Und Total =${totalCompra}`)
            break;
    
    
        }
        case 3: {
    
            let unidadeBolinhodeQueijo = Number(prompt("Quantas unidades de bolinho de queijo você deseja comprar?"))
    
            let totalCompra = unidadeBolinhodeQueijo * 5
    
            alert(`${unidadeBolinhodeQueijo} Und Total =${totalCompra}`)
            break;
    
    
        }
        case 4: {
    
            let unidadeRisole = Number(prompt("Quantas unidades de risole você deseja comprar?"))
    
            let totalCompra = unidadeRisole * 5
    
            alert(`${unidadeRisole} Und Total =${totalCompra}`)
            break;
    
    
        }
    };

}

switch (opcao) {
    case 1:
Salgados()
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
        switch (sacolaBebidas) {
            case 1:
                let unidadeGuarana = Number(prompt("Quantas unidades de Guarana você deseja comprar?"))

                let totalCompra = unidadeGuarana * 7
                alert(`${unidadeGuarana} Und Total =${totalCompra}`)
                break;

            case 2: {

                let unidadeÁgua = Number(prompt("Quantas unidades de água você deseja comprar?"))

                let totalCompra = unidadeÁgua * 5

                alert(`${unidadeÁgua} Und Total =${totalCompra}`)
                break;


            }
            case 3: {

                let unidadeSucodeUva = Number(prompt("Quantas unidades de suco de uva você deseja comprar?"))

                let totalCompra = unidadeSucodeUva * 8

                alert(`${unidadeSucodeUva} Und Total =${totalCompra}`)
                break;


            }
            case 4: {

                let unidadeCocaCola = Number(prompt("Quantas unidades de Coca cola você deseja comprar?"))

                let totalCompra = unidadeCocaCola * 7

                alert(`${unidadeCocaCola} Und Total =${totalCompra}`)
                break;


            }

        }
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
             switch (sacolaLanches) {
            case 1:
                let unidadeMistoQuente = Number(prompt("Quantas unidades de Misto quente você deseja comprar?"))

                let totalCompra = unidadeMistoQuente * 10
                alert(`${unidadeMistoQuente} Und Total =${totalCompra}`)
                break;

            case 2: {

                let unidadeXburguer = Number(prompt("Quantas unidades de X-Burguer você deseja comprar?"))

                let totalCompra = unidadeXburguer * 15

                alert(`${unidadeXburguer} Und Total =${totalCompra}`)
                break;


            }
            case 3: {

                let unidadeXsalada = Number(prompt("Quantas unidades de X-Salada você deseja comprar?"))

                let totalCompra = unidadeXsalada * 15

                alert(`${unidadeXsalada} Und Total =${totalCompra}`)
                break;


            }
            case 4: {

                let unidadeXegg = Number(prompt("Quantas unidades de X-Egg você deseja comprar?"))

                let totalCompra = unidadeXegg * 15

                alert(`${unidadeXegg} Und Total =${totalCompra}`)
                break;


            }

        }
        break;

    case 4:
        alert("Sobremesas")
        let sacolaSobremesas = Number(prompt(`
            Qual sobremesa deseja comprar?
            ============================
            [1]Brigadeiro
            [2]Trufa
            [3]Torta Holandesa
            [4]Mousse 
            ============================
            `))
             switch (sacolaSobremesas) {
            case 1:
                let unidadeBrigadeiro = Number(prompt("Quantas unidades de brigadeiro você deseja comprar?"))

                let totalCompra = unidadeBrigadeiro * 8
                alert(`${unidadeBrigadeiro} Und Total =${totalCompra}`)
                break;

            case 2: {

                let unidadeTrufa = Number(prompt("Quantas unidades de trufa você deseja comprar?"))

                let totalCompra = unidadeTrufa * 8

                alert(`${unidadeTrufa} Und Total =${totalCompra}`)
                break;


            }
            case 3: {

                let unidadeTortaHolandesa = Number(prompt("Quantas unidades de Torta Holandesa você deseja comprar?"))

                let totalCompra = unidadeTortaHolandesa * 12

                alert(`${unidadeTortaHolandesa} Und Total =${totalCompra}`)
                break;


            }
            case 4: {

                let unidadeMousse = Number(prompt("Quantas unidades de mousse você deseja comprar?"))

                let totalCompra = unidadeMousse * 12

                alert(`${unidadeMousse} Und Total =${totalCompra}`)
                break;


            }

        }
        break;

    case 5:
        alert("Sistema Finalizado!")
        break;

    default:
        alert("Não existe essa opção!")
        break;
}