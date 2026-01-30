import { useState, useEffect } from "react"


function Conteffect(){

const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log("o contador agora é:", contador)
  }, [contador])

  return (
    <div>
        <p>{contador}</p>
        <button onClick={() => setContador(prev => prev +1)}>
          Incrementar
        </button>
    </div>
  )}

  export default Conteffect