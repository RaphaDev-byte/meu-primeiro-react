import { useState } from "react";

import Hello from './componentes/Hello.jsx'
import Counter from './componentes/counter.jsx'
import Input from './componentes/input.jsx'
import State from './componentes/State.jsx'
import Conteffect from './componentes/contadoreffect.jsx'
import Title from './componentes/title.jsx'
import Card from './componentes/testprops.jsx'

function App() {
  const [contador, setContador] = useState(0)
  const [counter, setcounter] = useState(0)

  return (
     
       <div>
        <h2>meu primeiro componente:</h2>
        <Hello/>

        <h2>contador</h2>
        <p>{contador}</p>
        

        <button onClick={() => setContador(contador + 1)}>+1</button>


        <Counter counter={counter} setcounter={setcounter}/>

        <Input/>

        <State/>
        

        <Conteffect/>

        <Title/>

        <Card titulo = 'isso foi feito com props'/>
        </div>


     

  )
}

export default App
