const productos = [
    {
        id: '1',
        name: 'Bujías',
        price: 3,
        año: 2008,
        stock: 200,
        description: "Soy una bujía",
        img: 'https://i.ibb.co/ZVZMMDp/bujias-repuestos.jpg',
        category: 'respuestos'
    },
    {
        id: '2',
        name: 'Llave Cruz',
        price: 13,
        año: 2010,
        stock: 50,
        description: "Soy una herramienta muy necesaria",
        img: 'https://i.ibb.co/5rX0ZM5/llave-cruz.jpg',
        category: 'herramientas',
    },
    {
        id: '3',
        name: 'Forro de volante',
        price: 8,
        año: 2012,
        stock: 9,
        description: "Soy un protector para tu volante",
        img: 'https://i.ibb.co/cXHQ9Fg/dsc01236.jpg',
        category: 'accesorios'
    }
]





const categories =[
    {id: 'respuestos', description: 'Respuestos'},
    {id: 'herramientas', description: 'Herramientas'},
    {id: 'accesorios', description: 'Accesorios'},
]
export const getCategories = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(categories)
        }, 1000)
    })
}


export const getProductos = (categoryId) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(categoryId ? productos.filter(prod=> prod.category === categoryId): productos)
        },1000)
    })
}

export const getProductosById = (id) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === id))
        }, 1000)
    })
}