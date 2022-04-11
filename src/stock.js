const productos = [
    {
        id: '1',
        name: 'Producto',
        price: 200,
        año: 2008,
        stock: 20,
        description: "Soy una descripcion del producto",
        img: "./img/producto.png"
    },
    {
        id: '2',
        name: 'Producto2',
        price: 2000,
        año: 2010,
        stock: 200,
        description: "Soy una descripcion del producto",
        img: "./img/producto.png"
    },
    {
        id: '3',
        name: 'Producto3',
        price: 1200,
        año: 2012,
        stock: 5,
        description: "Soy una descripcion del producto",
        img: "./img/producto.png"
    }
]

export const getProductos = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
}

export const getProductosById = (id) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === id))
        }, 2000)
    })
}