import { useEffect } from "react";


function State(){
    useEffect( () => { console.log("componente ativo!")},[]
    )

     return <h1>componente ativo</h1>
}

export default State