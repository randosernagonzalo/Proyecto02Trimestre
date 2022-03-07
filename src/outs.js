/* Operadores nuevos: $concatArrays, $concat y $merge */

/* Crear una coleccion soldItems  en la que se incuyen los productos vendidos. */
db.ventas.aggregate( [
    { 
        $unwind: { 
            path: "$items" 
        } 
    },
    {
        $project: {
            _id: 0,  
            _idOrdenador: "$items.idOrdenador", 
            idVenta:1, 
            caracteristicas: "$items.caracteristicas", 
            perifericos:"$items.perifericos", 
            precio:"$items.precio"
        }
    },
    { 
        $out: "soldItems" 
    } 
] )

/* Crear una coleccion sales en la que se incluyan las ventas */
db.ventas.aggregate( [
    {
        $project: {
            _id: 0,
            items: 0,
        }
    },
    {
        $out: "sales"
    }
])

/* Crear una coleccion con los proveedores de componentes usando $concatArrays. */
db.ventas.aggregate( [
    {
        $project: {
            name: {
                $concatArrays:[
                    "$items.caracteristicas.placa.marca",
                    "$items.caracteristicas.procesador.marca",
                    "$items.caracteristicas.tarjeta_grafica.marca"
                ]
            }
        }
    },
    {
        $unwind: {
            path: "$name"
        }
    },
    {
        $group: {
            _id: "$name",
            noProvisiones: {
                $sum: 1
            }
        }
    },
    {
        $project:{
            _id: 0,
            name: "$_id",
            noProvisiones: "$noProvisiones"
        }
    },
    {
        $out: "providers"
    }
])


/* Crear coleccion products con los productos que usamos, debemos usar 4 aggregate, 
uno para los procesadores, otro para los perifericos, otro para las placas y otro 
para las tarjetas gráficas. */
db.ventas.aggregate( [
    {
        $unwind: {
            path: "$items"
        }
    },
    {
        $lookup: {
            from: 'providers',
            localField: 'items.caracteristicas.procesador.marca',
            foreignField: 'name',
            as: 'idmarca'
        }
    },
    {
        $project: {
            name: {
                $concat:[ 
                    "$items.caracteristicas.procesador.marca", 
                    " ",
                    "$items.caracteristicas.procesador.modelo" 
                ]
            },
            idMarca: {
                $arrayElemAt: [
                    "$idmarca._id", 
                    0
                ]
            }
        }
    },
    {
        $group: {
            _id: {
                name:"$name",
                idMarca:"$idMarca"
            },
            noArticulos: {
                $sum: 1
            }
        }
    },
    {
        $out: "products"
    }
])


db.ventas.aggregate( [
    {
        $unwind: {
            path: "$items"
        }
    },
    {
        $lookup: {
            from: 'providers',
            localField: 'items.caracteristicas.tarjeta_grafica.marca',
            foreignField: 'name',
            as: 'idmarca'
        }
    },
    {
        $project: {
            name: {
                $concat:[ 
                    "$items.caracteristicas.tarjeta_grafica.marca", 
                    " ",
                    "$items.caracteristicas.tarjeta_grafica.modelo" 
                ]
            },
            idMarca: {
                $arrayElemAt: [
                    "$idmarca._id", 
                    0
                ]
            }
        }
    },
    {
        $group: {
            _id: {
                name:"$name",
                idMarca:"$idMarca"
            },
            noArticulos: {
                $sum: 1
            }
        }
    },
    {
        $merge: {
            into: "products",
            whenMatched: "merge"
        }
    }
])

db.ventas.aggregate( [
    {
        $unwind: {
            path: "$items"
        }
    },
    {
        $lookup: {
            from: 'providers',
            localField: 'items.caracteristicas.placa.marca',
            foreignField: 'name',
            as: 'idmarca'
        }
    },
    {
        $project: {
            name: {
                $concat:[ 
                    "$items.caracteristicas.placa.marca", 
                    " ",
                    "socket",
                    " ",
                    "$items.caracteristicas.placa.socket",
                    " ",
                    "$items.caracteristicas.placa.formato"
                ]
            },
            idMarca: {
                $arrayElemAt: [
                    "$idmarca._id", 
                    0
                ]
            }
        }
    },
    {
        $group: {
            _id: {
                name:"$name",
                idMarca:"$idMarca"
            },
            noArticulos: {
                $sum: 1
            }
        }
    },
    {
        $merge: {
            into: "products",
            whenMatched: "merge"
        }
    }
])

db.ventas.aggregate( [
    {
        $unwind: {
            path: "$items"
        }
    },
    {
        $project: {
            name: "$items.perifericos",
            idMarca: null
        }
    },
    {
        $unwind: {
            path: "$name"
        }
    },
    {
        $group: {
            _id: {
                name:"$name",
                idMarca:"$idMarca"
            },
            noArticulos: {
                $sum: 1
            }
        }
    },
    {
        $merge: {
            into: "products",
            whenMatched: "merge"
        }
    }
])

