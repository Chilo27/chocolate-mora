import { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount ] = useState(initial);

    const incrementar = () => {
        setCount (count + 1);
    };

    const decrementar = () => {
        setCount ((valAnt) => (valAnt > 0 ? count - 1 : count))
    }
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={decrementar}>-</button>
        <button disabled={count >= stock} onClick={incrementar}>+</button>
        
        <button 
        onClick={() => {
            if(count <= stock) {
                onAdd(count);
            } else {
                alert ("no puede llevar mas de 5 productos")
            }
        }}
        >
            Agregar Al Carrito
        </button>
  </div>
  )
}

export default ItemCount