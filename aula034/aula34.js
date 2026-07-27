const cursos=[...document.querySelectorAll(".curso")]

cursos.map((el)=> {
    el.addEventListener("click", (evt)=>{
        const el=evt.target
        el.classlist.add("destaque")
        console.log(el.innerHTML + " foi clicado")
    })
})
