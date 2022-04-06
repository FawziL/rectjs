const productos = [
    {
        id: 1,
        name: 'Producto',
        price: 200,
        stock: 20,
        img: "./img/producto.png"
    },
    {
        id: 2,
        name: 'Producto2',
        price: 2000,
        stock: 200,
        img: "./img/producto.png"
    },
    {
        id: 3,
        name: 'Producto3',
        price: 1200,
        stock: 5,
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