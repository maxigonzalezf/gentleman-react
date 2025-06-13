// objetivo: memorizar (crea un cache) el resultado de ejecutar una funcion 'costosa', para evitar que se vuelva a llamar el metodo
// controlar si el beneficio de memorizarlo es superior al de recalcularlo

import { useMemo, useState } from "react";

// Ejemplo:
// Tenemos una lista de compras y ya calculaste el costo total de hacer toda la compra
// Si no agregamos nada ni tampoco cambio nada, cual es el costo total?

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1, name: "Manzana", price: 1.5
        },

        {
            id: 2, name: "Pera", price: 2.0
        },

        {
            id: 3, name: "Leche", price: 1.0
        },
    ]);

    const [discount, setDiscount] = useState<number>(0)

    // esto esta mal hecho (si tiene muchisimos productos por ejemplo)
                    // reduce una coleccion de elementos a un valor. En este caso tenemos un valor total (0 valor inicial) y cada uno de los items que van sumando, con la operacion 'total + item.price'
    //const totalCost = items.reduce((total, item) => total + item.price, 0)
    
    const totalCost = useMemo(() => 
    items.reduce((total, item) => total + item.price, 0)
    , [items]) // la logica primer parametro, arreglo de dependencias el segundo parametro (en este caso cuando cambia items)
    
    const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Producto ${items.length + 1}`,
            price: Math.random() * 5
        }

        setItems([...items, newItem])
    }

    return (
        <div>
            <h2>Lista de Compras</h2>

            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            {item.name}: ${item.price.toFixed(2)}
                        </li>
                    ))
                }
            </ul>

            <p>Costo Total: ${totalCost.toFixed(2)}</p>

            <p>
                Descuento: $
                <input type="number" value={discount} onChange={e => setDiscount(parseFloat(e.target.value) || 0)} />
            </p>

            <p>Costo Final: ${finalCost.toFixed(2)}</p>

            <button onClick={addItem}>Agregar Producto</button>
        </div>
    )
}