import { useState, useEffect } from "react"

function Title(){
    const [texto, setTexto] = useState("")

  useEffect(() => {
    document.title = (texto)
  }, [texto])

  return (
    <input
      value={texto}
      onChange={e => setTexto(e.target.value)}
    />
  )
}

export default Title