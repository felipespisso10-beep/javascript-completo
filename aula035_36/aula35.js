const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const todoscursos=[...document.querySelectorAll(".curso")]

todoscursos.map((el)=> {
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        console.log(curso)
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})

/*btn.addEventListener("click",()=>{
    const cursoselecinados=[...document.querySelectorAll(".selecionado")]
    cursoselecinados.forEach((el)=>{
        caixa2.appendChild(el)
    })
})*/


/*btn.addEventListener("click", () => {
    const cursosSelecionados = [
        ...document.querySelectorAll(".selecionado")
    ];

    cursosSelecionados.forEach((el) => {

        if (el.parentElement.id === "caixa1") {
            caixa2.appendChild(el);
        } else {
            caixa1.appendChild(el);
        }

        // Remove a seleção depois de mover
        el.classList.remove("selecionado");
    });
});*/