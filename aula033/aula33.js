const divtodas=[...document.getElementsByTagName('div')]
const cursostodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursoC2=[...document.getElementsByClassName("c2")]
const cursoespecial=document.getElementById('c1')

const query_divtodas=[...document.querySelectorAll("div > p")]
const query_cursostodas=[...document.querySelectorAll(".curso")]
const query_curosC1=[...document.querySelectorAll(".c1,p")]
const query_divtodasC2=[...document.querySelectorAll(".c2")]
const query_cursoespecial=document.querySelectorAll("#c1")[0]

console.log(query_divtodas)

cursosC2.map((el)=> {
    el.classlist.add("destaque")
})
