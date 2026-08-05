const Pessoa={
    nome:"Bruno",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome
    },
    setIdade:function(){
        this.idade
    }
}

const p2=Pessoa
const p3=Pessoa

p3.nome="Cladisvardson"
p2["nome"]="Bridgertrudismelda"
Pessoa.setNome("Paricscrerdison")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)

