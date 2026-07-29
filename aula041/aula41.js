const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML1","HTML2","HTML3","HTML4","HTML5","HTML6",]

cursos.map((el,chave)=> {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("Id","c" + (chave + 1))
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el
    
    const btn_lixeira=document.createAttribute("img")
    btn_lixeira.setAttribute("src","")
    
    novoElemento.addEventListener("click",(evt)=>{
        console.log(evt.target)
    })
    caixa1.appendChild(novoElemento)
})

 