import { useState } from "react";

function Input() {
  const [nome, setNome] = useState("");

  function handleChange(e) {
    const valor = e.target.value;

    if (valor.includes("@")){ 
        console.log("'@' bloqueado")
        return; // bloqueia

    }setNome(valor);
  }

  return (
    <input
      value={nome}
      onChange={handleChange}
    />
  );
}

export default Input

/* 
"e" é o evento temporario que descreve oque acabou de acontecer

usestate() = valor inicial
nome = guarda algo
setnome = o que acontece dentro da funcao é guardado dentro do nome.

o nome é como uma caixa, ela pode comecar com coisa dentro por causa do usestate(), mas pode ser atualizada,oque tinha dentro some e oque esta dentro da funcao setnome entra dentro dela, so precisa fazer sentido pra renderizar, depende do contexto.

1- usuario digita no input
2- dispara a funcao onchange
3- chama a funcao setnome
4- e.target.value se torna o valor nome + oque foi digitado
*/