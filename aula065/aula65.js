const pessoa={
    noma:"Bruno",
    canal:"CFB Cursos",
    curso:"JavaScript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Cons=dicioal"
    }
}
const string_pessoa='{"noma":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Cons=dicioal"}}'

const s_json_pessoa=JSON.stringify(pessoa) //Converte um objeto JavaScript em uma string JSON.

// const obj = { nome: "Bruno" }

// const texto = JSON.stringify(obj)

// console.log(texto)
// {"nome":"Bruno"}


const o_json_pessoa=JSON.parse(string_pessoa) //Converte uma string JSON em um objeto JavaScript.

// const texto = '{"nome":"Bruno"}'

// const obj = JSON.parse(texto)

// console.log(obj.nome)
// Bruno

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)