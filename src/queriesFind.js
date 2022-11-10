/*Realizamos un diagnostico de la base de datos para comprobar que se ha insertado correctamente*/
db.equipos.validate()
/*Todos los equipos con procesador intel*/
db.equipos.find({"procesador.marca": { $eq: "intel" } } )

/*Todos los equipos con grafica dedicada*/
db.equipos.find({"tarjeta_grafica.marca": {$exists: true }})

/*Todos los equipos con puerto usb3.2 o superior*/
db.equipos.find({ $or: [ { "placa.puertos":{ $in: ["usb3.2", "usb4.0"] } }, { "caja.usb": { $gte: 3.2 } } ] } )

/*Un cliente nos dice que necesita un equipo para jugar, nos pide que tenga procesador intel, que 
que tenga grafica dedicada y que necesita pruertos usb3.2 o superior.*/
db.equipos.find( {
    $and: [ {"procesador.marca": { $eq: "intel" } }, 
    {"tarjeta_grafica.marca": {$exists: true } }, 
    { $or: [ { "placa.puertos":{ 
        $in: ["usb3.2", "usb4.0"] } }, 
        { "caja.usb": { $gte: 3.2 } } 
    ] } 
] } )

/*Todos los equipos con un precio igual o inferior a 700€*/
db.equipos.find( { precio: { $lte: 700 } } )

/*Todos los equipos con memoria ddr3*/
db.equipos.find( { "memoria.tipo": "ddr3" } )

/*Todos los equipos con placa asrock*/
db.equipos.find( { "placa.marca": { $regex: /^a.ro/i } } )

/*Un cliente tiene un presupuesto de 700 euros, nos pide un equipo con placa asrock, pero no sabemos si se escribe azrok o asrock, tampoco sabemos si en la base de datos está en mayúscula, 
el cliente nos pide que el equipo use memoria DDR3 ya que el tiene dos módulos en su casa que va a usar para mejorar el equipo y que tenga sistema operativo instalado. */
db.equipos.find( { $and: [ 
    { precio: { $lte: 700 } }, 
    { "memoria.tipo": "ddr3" }, 
    { "placa.marca": { $regex: /^a.ro/i } }, 
    { sistema_operativo: true}  
] } )

/*Todos los equipos que se hayan fabricado en este ultimo año.*/
db.equipos.find( { fecha_fabricacion: { $gt: new Date( "2020-12-31" ) } } )

/*Todos los equipos que no tengan socket de intel*/
db.equipos.find( { "placa.socket": { $nin: [ "lga 1151", "lga 1150", "lga 1700" ] } } )

/*Todos los equipos que no tenga gráfica amd*/
db.equipos.find( { "tarjeta_grafica.marca": { $ne: "amd" } } )

/*Un cliente nos pide un equipo de ultima generación con procesador amd y grafica nvidia por menos de 3500€ */
db.equipos.find( 
    { $and: [ 
        { "tarjeta_grafica.marca": { $ne: "amd" } 
     }, { "tarjeta_grafica.marca": {$exists: true }
     }, { "placa.socket": { $nin: [ "lga 1151", "lga 1150", "lga 1700" ] }
     }, { fecha_fabricacion: { $gt: new Date( "2020-12-31" ) } 
     }, { precio: { $lt: 3500 } } 
    ] 
} )

/*Todos los equipos con puerto thundervolt y dvi*/
db.equipos.find( { "placa.puertos": { $all: ["thundervolt", "dvi"] } } )

/*Todos los equipos que tengan entre usb 3.0 y .,2*/
db.equipos.find( { "caja.usb": { $elemMatch: { $gte: 3.0, $lte: 3.2 } } } )

/*Todos los equipos que midan menos de 75cm de alto*/
db.equipos.find( { "caja.dimensiones.h": { $not: {  $gt: 75 } } } )

/*Todos los equipos que midan menos de 75cm de alto y un ancho menor o igual a 60cm*/
db.equipos.find( { $nor: [ { "caja.dimensiones.h": { $not: {  $lt: 75 } } }, { "caja.dimensiones.w": { $gte: 60 } } ] } )

/*Un cliente nos pide un ordenador, necesita que tenga puerto thundervolt y dvi, tambien necesita que la caja lleve puertos usb entre 3.0 y 3.2 y que las medidas 
sean inferiores o igual a 75cm de alto y 60 de ancho*/
db.equipos.find( { 
    $and: [ 
        { "placa.puertos": { $all: ["thundervolt", "dvi"] }  
     }, { "caja.usb": { $elemMatch: { $gte: 3.0, $lte: 3.2 } } 
     }, { $nor: [ 
            { "caja.dimensiones.h": { $not: {  $lt: 75 } } 
         }, { "caja.dimensiones.w": { $gte: 60 } } ] } 
    ] 
} )

/*Un cliente quiere una placa con 5 puertos y quiere saber que procesador y que tarjeta grafica usa.*/
db.equipos.find( { "placa.puertos": { $size: 5 } } , { "placa.puertos": 1, tarjeta_grafica: 1, procesador: 1 }  )

/*Estamos haciendo inventario y necesitamos saber todas las marcas de placas base con las que trabajamos, aparte de un recuento de los distintos modelos de procesador  y graficas amd 
con los que trabajan nuestros equipos*/
db.runCommand ( { distinct: "equipos", key: "placa.marca" } )
db.runCommand ( { distinct: "equipos", key: "procesador.modelo", query: { "procesador.marca": "amd"} } )
db.runCommand ( { distinct: "equipos", key: "tarjeta_grafica.modelo", query: { "tarjeta_grafica.marca": "amd"} } )

/*Realizamos un estudio y queremos saber con que marca de procesadores ganamos mas dinero, si usando procesadores intel o usando procesadores amd. */
db.equipos.aggregate(
    [
        {$match: { "procesador.marca": {$in: [ "amd", "intel" ] } } },
        { $group: { _id:"$procesador.marca", precio_total: { $sum: "$precio" } } }
    ]
)
