const caixacursos=document.querySelector("#caixacursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btncursoselecionado=document.getElementById("btncursoselecionado")

cursos.map((el,chave)=>{
    const novoelemento=document.createElement("div")
    novoelemento.setAttribute("id","c"+chave)
    novoelemento.setAttribute("class", "curso c1")
    novoelemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoelemento.appendChild(comandos)

    caixacursos.appendChild(novoelemento)
})

btncursoselecionado.addEventListener("click", (evt)=>{
    const todosradios=[...document.querySelectorAll("input[type=radio]")]
    let radioselecionados=todosradios.filter((ele)=>{
        return ele.checked
    })

    radioselecionados=radioselecionados[0]
    const cursoselecionado=radioselecionados.parentNode.parentNode.textContent

    console.log(todosradios)
    console.log(cursoselecionado)
})