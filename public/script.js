const catalogo = [
    {
        id: 1,
        titulo: "The Walking Dead",
        tipo: "serie",
        ano: 2010,
        generos: ["terror", "drama"],
        nota: 8.7,
        assistido: true
    },
    {
       id: 2,
        titulo: "La Casa de Papel",
        tipo: "serie",
        ano: 2017,
        generos: ["ação", "crime"],
        nota: 8.2,
        assistido: true
    },
    {
        id: 3,
        titulo: "Titanic",
        tipo: "filme",
        ano: 1997,
        generos: ["romance", "drama"],
        nota: 9.0,
        assistido: true
    },
    {
        id: 4,
        titulo: "Sintonia",
        tipo: "serie",
        ano: 2019,
        generos: ["drama"],
        nota: 8.4,
        assistido: false
    },
    {
        id: 5,
        titulo: "Os Donos do Jogo",
        tipo: "serie",
        ano: 2025,
        generos: ["crime", "ação"],
        nota: 7.5,
        assistido: false
    },
    {
        id: 6,
        titulo: "Cidade de Deus",
        tipo: "serie",
        ano: 2002,
        generos: ["crime", "drama"],
        nota: 9.3,
        assistido: true
    },
    {
        id: 7,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["ação", "aventura"],
        nota: 9.1,
        assistido: false
    }
];

console.log("\n---------- CATÁLOGO ----------");
console.log("Lista de títulos:");
for (let i = 0; i < catalogo.length; i++) {
    console.log((i + 1) + ". " + catalogo[i].titulo);
}
console.log("\n---------- INFORMAÇÕES ----------");
console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último item:",catalogo[catalogo.length - 1].ano);
if (catalogo[2].generos[1]) {
    console.log("Segundo gênero do terceiro item:",catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}
let filmes = 0;
let series = 0;
let naoAssistidos = 0;
let somaNotas = 0;
for (let i = 0; i < catalogo.length; i++) {
    somaNotas += catalogo[i].nota;
    if (catalogo[i].tipo === "filme") {
        filmes++;
    } else {
        series++;
    }
    if (catalogo[i].assistido === false) {
        naoAssistidos++;
    }
}
let media = somaNotas / catalogo.length;
let ranking = [...catalogo];
ranking.sort(function(a, b) {
    return b.nota - a.nota;
});
console.log("\n---------- MÉDIAS ----------");
console.log("Média geral das notas:",media.toFixed(1));
document.getElementById("output").innerHTML = `
    <h3>Resumo do Catálogo</h3>
    <p>Total de itens: ${catalogo.length}</p>
    <p>Quantidade de filmes: ${filmes}</p>
    <p>Quantidade de séries: ${series}</p>
    <p>Quantidade de não assistidos: ${naoAssistidos}</p>
    <p>Média geral das notas: ${media.toFixed(1)}</p>
    <p>Top 3 Maiores Notas: </p> 1. ${ranking[0].titulo} - ${ranking[0].nota}<br>
    2. ${ranking[1].titulo} - ${ranking[1].nota}<br>
    3. ${ranking[2].titulo} - ${ranking[2].nota}
`;
