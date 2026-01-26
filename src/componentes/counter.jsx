function Counter({counter , setcounter}){
    return(<div style={{display:'flex', gap:'16px', alignItems:'center'}}>
            <h3>contador</h3>
            <button onClick={() => setcounter(prev => (prev > 0 ? prev - 1 : 0))}>-</button>
            <p>{counter}</p>
            <button onClick={() => setcounter(prev => prev + 1)}>+</button>
            
    </div>
    )
}

export default Counter