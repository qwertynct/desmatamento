const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

    const perguntas = [
        {
        enunciado: "Quais são os motivos que ocasionam o desmatamento?",
        alternativas: [
            {
       texto: "A expansão agrícola: novas terras para cultivo. Urbanização: expansão de áreas urbanas. Exploração madeireira: corte de árvores.",
       afirmacao:"Essas ações acabam com a fauna e a flora." 
            },
            {
       texto:"Criação e manutenção de parques nacionais,reservas ecológicas, e áreas de conaervação.",
       afirmacao:"Essas situações são positivas, o desmatamento é cruel."
            }
    ]
        },
        {
            enunciado: "Como o desmatamento contribui para a desertificação e outras tragédias ambientais?",
            alternativas: [
                {
        texto:"Expondo o solo a erosão levando a degradação, causando secas, criando condições mais áridas, desestabilizando ecossistemas.",
        afirmacao:"Nossa! Você realmente sabe o desmatamento funciona."
                },
                {
        texto:"O desmatamento não contribui para a desertificação, até porque ele ajuda o ambiente.",
        afirmacao:"O desmatamento causa diversos problemas, a resposta não é essa!"
                }
        ]
            },
            {
                enunciado: "Quais são as principais estratégias para previnir o desmatamento?",
                alternativas: [
                    {
            texto: "Criar parques e reservas naturais, reforçar leis, integrar árvore, fontes de renda sustentável, etc.",
            afirmacao:"Uau! Aparentemente você ama o planeta."
                    },
                    {
            texto:"È necessário a expansão agrícola, assim, feita derrubada de diversas árvores.",
            afirmacao:"A expansão agrícola é uma das formas mais terríveis de acabar com a fauna e flora."
                    }
            ]
                }
       ];
      
       let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que pensamos sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();