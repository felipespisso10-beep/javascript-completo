const caixa=document.querySelector("#caixa")

// const curso="Javascript"
// const canal="CFP Cursos"
// const frase=`Este é o curso<br/>\n de ${curso} do<br/>\n canal ${canal}`


// caixa.innerHTML=frase

const carros=["Polo","Golf","T-Cross","HRV"]

let ul=`<ul>`
carros.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul+`</ul>`

caixa.innerHTML=ul
