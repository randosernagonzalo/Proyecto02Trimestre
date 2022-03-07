/* Operadores nuevos: $let, $cond, $dateToString*/

/* Ver el ordenador mas caro y el mas barato */
db.soldItems.aggregate( [
    {
        $group: {
            _id: null,
            pcMasCaro: {
                $max: "$precio"
            },
            pcMasBarato: {
                $min: "$precio"
            }
        }
    }
] )

/* Ver todos los productos de cada marca. */
db.providers.aggregate( [
    {
        $lookup: {
            from: 'products',
            localField: '_id',
            foreignField: '_id.idMarca',
            as: 'productos'
        }
    },
    {
        $project: {
            name: 1,
            productos: "$productos._id.name"
        }
    }
] )

/* Muestra la media de precio de todos los ordenadores de cada mes, usamos el operador dateToString usando el formato
año y mes. */
db.soldItems.aggregate([
    {
      $group : {
         _id : { 
             $dateToString: { 
                 format: "%Y-%m", 
                 date: "$caracteristicas.fecha_fabricacion" 
                } 
            },
         mediaPrecios: { 
             $avg: "$precio" 
            }
        }
    },
])

/* Muestra el ordenador mas caro y el mas barato fabricados en 2021 */
db.soldItems.aggregate([
    {
      $match : { 
          "caracteristicas.fecha_fabricacion": { 
              $gte: new ISODate("2021-01-01"), 
              $lt: new ISODate("2022-01-01") 
            } 
        }
    },
    {
      $group : {
         _id : null,
         ordenadorMasCaro: { 
             $max: "$precio"
            },
         ordenadorMasBarato: { 
             $min: "$precio" 
            },
        }
    },
])

/* Queremos saber en cuantas unidades se ha vendido de cada articulo de cada proveedor. */
db.providers.aggregate( [
    {
        $lookup: {
            from: 'products',
            localField: '_id',
            foreignField: '_id.idMarca',
            as: 'productos'
        }
    },
    {
        $unwind: {
            path:"$productos"
        }
    },
    {
        $project:{
            _id: 0,
            proveedor: "$name",
            producto: "$productos._id.name",
            noVentas: "$productos.noArticulos"
        }
    },
] )

/* La instalacion del sistema operativo cuesta 150 euros, queremos ver el precio 
de la maquina sin sistema operativo instalado y el precio normal. */
db.soldItems.aggregate( [
    {
       $project: {
            _id: 0,
            _idOrdenador:1,
            precio: 1,
            precioSinSistema: {
                $let: {
                    vars: {
                        price: { 
                            $cond: { 
                                if: '$caracteristicas.sistema_operativo', 
                                then: 150, 
                                else: 0 
                            } 
                        }
                    },
                    in: { 
                        $subtract: [ 
                            "$precio", 
                            "$$price" 
                        ] 
                    }
                }
            }
        }
    }
] )

/* Queremos saber todo el dinero que ha generado cada vendedor ordenadas de mayor a menor. */
db.sales.aggregate( [
    {
        $lookup:{
            from: 'soldItems',
            localField: 'idVenta',
            foreignField: 'idVenta',
            as: 'equipo'
        }
    },
    {
        $unwind: {
            path:"$equipo"
        }
    },
    {
       $project: {
            _id: 0,
            vendedor:1,
            _idOrdenador:"$equipo._idOrdenador",
            precio: 1,
            ganancias: {
                $let: {
                    vars: {
                        price: { 
                            $cond: { 
                                if: '$equipo.caracteristicas.sistema_operativo', 
                                then: 150, 
                                else: 0 
                            } 
                        }
                    },
                    in: { 
                        $subtract: [ 
                            "$equipo.precio", 
                            "$$price" 
                        ] 
                    }
                }
            }
        }
    },
    {
        $group:{
            _id: "$vendedor",
            ganancias:{
                $sum: "$ganancias"
            }
        }
    },
    {
        $sort:{
            ganancias:-1
        }
    }
] )

/* Ver quien es el mejor comprador, saber cuanto dinero ha gastado cada uno y ordenarlo de mayor a menor sin decimales. */
db.sales.aggregate( [
    {
        $lookup: {
            from: 'soldItems',
            localField: 'idVenta',
            foreignField: 'idVenta',
            as: 'productos'
        }
    },
    {
        $project:{
            _id: 0,
            comprador: 1,
            precioCompras: "$productos.precio",
        }
    },
    {
        $unwind: {
            path:"$precioCompras"
        }
    },
    {
        $group:{
            _id:"$comprador",
            precioCompras: {
                $sum: "$precioCompras"
            }
        }
    },
    {
        $project:{
            _id: 1,
            precioCompras: {
                $round: [
                    "$precioCompras",
                    0
                ]
            },
        }
    },
    {
        $sort:{
            precioCompras:-1
        }
    }
] )

/* Informatica sur quiere hacer un descuento del 15% a los compradores que hayan gastado mas de 1500 euros en un ordenador. */
db.sales.aggregate( [
    {
        $lookup:{
            from: 'soldItems',
            localField: 'idVenta',
            foreignField: 'idVenta',
            as: 'equipo'
        }
    },
    {
        $unwind: {
            path:"$equipo"
        }
    },
    {
        $match: {
            "vendedor": "Informatica Sur"
        }
    },
    {
       $project: {
            _id: 0,
            precio: "$equipo.precio",
            _idOrdenador:"$equipo._idOrdenador",
            precioDescuento: {
                $let: {
                    vars: {
                        descuento: { 
                            $cond: { 
                                if: {
                                    $gt:[
                                        "$equipo.precio",
                                        1500
                                    ]
                                }, 
                                then: 0.85, 
                                else: 1 
                            } 
                        }
                    },
                    in: { 
                        $multiply: [ 
                            "$equipo.precio", 
                            "$$descuento" 
                        ] 
                    }
                }
            }
        }
    },
    {
        $addFields: {
            applyDiscount:{
                $cond: {
                    if:{
                        $gte: [
                            "$precio",
                            1500
                        ]
                    },
                    then: true,
                    else: false
                }
            }
        }
    },
    {
        $project:{
            _idOrdenador: 1,
            applyDiscount: 1,
            price: "$precioDescuento"
        }
    },
    {
        $sort:{
            price:-1
        }
    }
] )
