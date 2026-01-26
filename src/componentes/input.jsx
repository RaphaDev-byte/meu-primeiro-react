import { useState } from "react";

function Input(){
    const [nome,setNome] = useState("")


    return(
        <input value={nome} onChange={(e) => setNome(e.target.value)}/>
    )
}

export default Input

/* 
"e" é o evento temporario que descreve oque acabou de acontecer

usestate() = valor inicial
nome = guarda algo
setnome = o que acontece dentro da funcao é guardado dentro do nome.

o nome é como uma caixa, ela pode comecar com coisa dentro por causa do usestate(), mas pode ser atualizada,oque tinha dentro some e oque esta dentro da funcao setnome entra dentro dela, so tenque fazer sentido pra renderizar, depende do contexto.

1- usuario digita no input
2- dispara a funcao onchange

*/