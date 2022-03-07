/*Las medidas están expresadas en cm, el precio en euros y la capacidad de los dispositivos en gigabytes */
/* Sacaremos las colecciones de ventas, equipos, productos y marcas/proveedores */

db.ventas.drop()
db.ventas.insertMany(  [

    {   
        idVenta: 1,
        items: [ 
            {
                idOrdenador: 11,
                caracteristicas: 
                    {
                        placa: { 
                            socket: "am4", 
                            marca:"gigabyte", 
                            puertos: ["vga", "hdmi", "usb2.0", "rj45", "jack"], 
                            formato:"atx" 
                        }, 
                        memoria: {
                            capacidad:16, 
                            tipo:"ddr4" 
                        }, 
                        procesador: {
                            marca: "amd",
                            modelo: "ryzen 5 2500 ",
                            generacion: 2
                        } , 
                        tarjeta_grafica: { 
                            tipo: "integrada" 
                        },
                        caja: {
                            color: ["balnco", "azul"], 
                            dimensiones: { h:80, w:65 },
                            usb: [ 3.0, 3.1 ] 
                        }, 
                        fuente:"650w", 
                        disco: [
                            { 
                                tipo:"hdd", 
                                capacidad:1024 
                            }, 
                            {
                                tipo: "ssd",
                                capacidad: 256
                            } 
                        ],
                        sistema_operativo: true,
                        fecha_fabricacion: new Date("2018-05-12")
                    },
                perifericos:["Teclado Krom Kernel","Raton Logitech G203", "Pantalla AOC"],   
                precio: 900.60
            },
            {
                idOrdenador: 12,
                caracteristicas: { 
                    placa: { 
                        socket: "lga 1151", 
                        marca:"aorus", 
                        puertos: ["hdmi", "dvi", "rj45", "thundervolt", ["usb2.0", "usb3.0"], "jack"], 
                        formato:"atx"
                    }, 
                    memoria: {
                        capacidad: 16, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i7 9700k", 
                        generacion: 9  
                    }, 
                    tarjeta_grafica: { 
                        marca: "nvidia", 
                        modelo: "rtx 2080ti"
                    }, 
                    caja: {
                        color: ["blanco", "rojo"], 
                        dimensiones: {h:90, w:75 }, 
                        usb: [ 3.0, 3.1 ] 
                    }, 
                    fuente:"850w", 
                    disco: [
                        { 
                            tipo:"ssd", capacidad: 512 
                        }
                    ],  
                    sistema_operativo: true, 
                    fecha_fabricacion: new Date("2019-04-22") 
                },
                perifericos:["Teclado Razer Blackwidow","Raton Corsair Pro", "Pantalla LG"],
                precio: 1200.34
            },
            {
                idOrdenador: 13,
                caracteristicas: { 
                    placa: { 
                        socket: "lga 1150", 
                        marca:"asrock", 
                        puertos: ["vga", "hdmi", "usb2.0", "rj45", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad: 8, 
                        tipo:"ddr3" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i3 6300k", 
                        generacion: 6 
                    }, 
                    tarjeta_grafica: { 
                        tipo: "integrada" 
                    }, 
                    caja: {
                        color: ["negro", "verde"], 
                        dimensiones: {h:70, w:55 }, 
                        usb: [ 3.0, 3.1 ] 
                    }, 
                    fuente:"450w", 
                    disco: [
                        { 
                            tipo:"hdd", capacidad:512 
                        }
                    ], 
                    sistema_operativo: true, 
                    fecha_fabricacion: new Date("2015-10-02") 
                },
                perifericos:["Teclado Corsair","Raton Newskill"],
                precio: 500.50
            }
        ],
        vendedor: "Real Microinformatica",
        comprador: "Instituto Jesus del Granpoder",
        fechaVenta: new Date("2022-2-22")
    },    
    {   
        idVenta: 2,
        items: [ 
            {
                idOrdenador: 21,
                caracteristicas: { 
                    placa: { 
                        socket: "am3", 
                        marca:"gigabyte", 
                        puertos: ["dvi", "hdmi", "usb2.0", "rj45", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad: 8, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"amd", 
                        modelo:"athlon", 
                        generacion: 1 
                    }, 
                    tarjeta_grafica: { 
                        tipo: "integrada" 
                    }, 
                    caja: {
                        color: ["negro", "plateado"], 
                        dimensiones: {h:60, w:50 }, 
                        usb: [ 3.0, 3.1 ] 
                    }, 
                    fuente:"550w", 
                    disco: [
                        { 
                            tipo:"hdd", capacidad: 512 
                        }
                    ], 
                    sistema_operativo: false,  
                    fecha_fabricacion: new Date("2015-05-11") 
                },
                perifericos:["Teclado Corsair","Raton Corsair Pro", "Pantalla MSI"],
                precio: 800.00
            },
            {
                idOrdenador: 22,
                caracteristicas: { 
                    placa: { 
                        socket: "am4", 
                        marca:"msi", 
                        puertos: ["vga", "hdmi", "usb3.0", "rj45", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad: 16, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"amd", 
                        modelo:"ryzen 7 2700x", 
                        generacion: 2 
                    }, 
                    tarjeta_grafica: { 
                        marca: "amd", 
                        modelo: "radeon rx590" 
                    }, 
                    caja: {
                        color: ["blanco", "azul"], 
                        dimensiones: {h:70, w:60 }, 
                        usb: [ 3.0, 3.1 ] 
                    }, 
                    fuente:"650w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad: 512 
                        }
                    ], 
                    sistema_operativo: false,  
                    fecha_fabricacion: new Date("2019-11-11") 
                },
                perifericos:["Teclado Razer Blackwidow","Raton Logitech G203", "Pantalla AOC"],
                precio: 750.40
            },
            {
                idOrdenador: 23,
                caracteristicas: { 
                    placa: { 
                        socket: "lga 1700", 
                        marca:"msi", 
                        puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], 
                        formato:"atx" 
                    }, 
                    memoria: {
                        capacidad: 32, 
                        tipo:"ddr5" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i9 12900kf", 
                        generacion: 12 
                    }, 
                    tarjeta_grafica: { 
                        marca: "nvidia", 
                        modelo: "rtx 3070 super" 
                    }, 
                    caja: {
                        color: ["negro", "morado","gris"], 
                        dimensiones: {h:80, w:70 }, 
                        usb: [ 3.0, 4.0 ] 
                    }, 
                    fuente:"950w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad: 1024 
                        }, 
                        {
                            tipo:"hdd", 
                            capacidad:1024
                        } 
                    ], 
                    sistema_operativo: true,
                    fecha_fabricacion: new Date("2021-11-03") 
                },
                perifericos:["Teclado Razer Blackwidow","Raton Corsair Pro", "Pantalla LG"],
                precio: 2500.99
            }
        ],
        vendedor: "Tecnoshop",
        comprador: "TeyMa",
        fechaVenta: new Date("2022-2-11")
    },
    {   
        idVenta: 3,
        items: [ 
            {
                idOrdenador: 31,
                caracteristicas: { 
                    placa: { 
                        socket: "am4", 
                        marca:"aorus", 
                        puertos: [
                            "vga", 
                            "hdmi", 
                            "thundervolt", 
                            "usb3.0", 
                            "rj45", 
                            "jack"
                        ], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad: 16, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"amd", 
                        modelo:"ryzen 7 3800x", 
                        generacion: 3 
                    }, 
                    tarjeta_grafica: { 
                        marca: "amd", 
                        modelo: "radeon 5700xt" 
                    }, 
                    caja: {
                        color: ["negro", "verde"], 
                        dimensiones: {h:70, w:55 }, 
                        usb: [ 3.1, 4.0 ] 
                    }, 
                    fuente:"750w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad:512 
                        }, 
                        {
                            tipo:"hdd", 
                            capacidad:512
                        } 
                    ], 
                    sistema_operativo: false, 
                    fecha_fabricacion: new Date("2021-02-22") 
                },
                perifericos:[
                    "Teclado Krom Kernel",
                    "Raton Logitech G502", 
                    "Pantalla AOC"
                ],
                precio: 1300.10
            }
        ],
        vendedor: "Mediamark",
        comprador: "Particular: Joaquin Jimenez",
        fechaVenta: new Date("2022-1-2")
    },
    {   
        idVenta: 4,
        items: [ 
            {
                idOrdenador: 41,
                caracteristicas: { 
                    placa: { 
                        socket: "lga 1151", 
                        marca:"gigabyte", 
                        puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad:16, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i5 6500k", 
                        generacion: 6  
                    }, 
                    tarjeta_grafica:{ 
                        marca: "nvidia", 
                        modelo:"gtx 1060ti" 
                    }, 
                    caja: {
                        color: ["blanco"], 
                        dimensiones: {h:65, w:50 }, 
                        usb: [ 3.0, 3.1 ] 
                    }, 
                    fuente:"500w", 
                    disco: [
                        { 
                            tipo:"hdd", 
                            capacidad: 512 
                        }
                    ], 
                    sistema_operativo: false, 
                    fecha_fabricacion: new Date("2017-09-16") 
                },
                perifericos:["Teclado Logitech","Raton Hyperex", "Pantalla ZOWI"],
                precio: 800.10
            },
            {
                idOrdenador: 42,
                caracteristicas: { 
                    placa: { 
                        socket: "lga 1150", 
                        marca:"asrock", 
                        puertos: ["vga", "usb2.0", "rj45", "jack"], 
                        formato:"atx" 
                    }, 
                    memoria: {
                        capacidad: 8, 
                        tipo:"ddr3" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"pentium", 
                        generacion: 4 
                    }, 
                    tarjeta_grafica: { 
                        tipo: "integrada"
                    }, 
                    caja: {
                        color: ["negro", "gris"], 
                        dimensiones: {h:75, w:60 }, 
                        usb: [ 2.0, 3.0 ] 
                    }, 
                    fuente:"450w", 
                    disco: [
                        { 
                            tipo:"hdd", 
                            capacidad: 512 
                        }
                    ], 
                    sistema_operativo: false, 
                    fecha_fabricacion: new Date("2010-02-02") 
                },
                perifericos:["Cascos Razer Barrakuda"],
                precio: 500.00
            },
            {
                idOrdenador: 43,
                caracteristicas: { 
                    placa: { 
                        socket: "am4", 
                        marca:"aorus", 
                        puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.1"], "rj45", "jack"], 
                        formato:"atx" 
                    }, 
                    memoria: {
                        capacidad:64, 
                        tipo:"ddr5" 
                    }, 
                    procesador: { 
                        marca:"amd", 
                        modelo:"ryzen 9 5950x", 
                        generacion: 5 
                    }, 
                    tarjeta_grafica:{ 
                        marca: "nvidia", 
                        modelo: "rtx 3090" 
                    }, 
                    caja: {
                        color: ["negro", "rojo"], 
                        dimensiones: {h:80, w:70 }, 
                        usb: [ 3.2, 4.0 ] 
                    }, 
                    fuente:"1200w", 
                    disco: [
                        { 
                            tipo:"ssd", capacidad:1024 
                        }, 
                        { 
                            tipo:"hdd", 
                            capacidad:2048
                        }
                    ], 
                    sistema_operativo: true, 
                    fecha_fabricacion: new Date("2021-10-12") 
                },
                perifericos:["Teclado Razer Blackwidow","Raton Corsair Pro", "Pantalla LG"],
                precio: 5500.00
            },
            {
                idOrdenador: 44,
                caracteristicas:  { 
                    placa: { 
                        socket: "am3", 
                        marca:"asus", 
                        puertos: ["dvi", "hdmi", "usb3.0", "rj45", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad:8, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"amd", 
                        modelo:"athlon", 
                        generacion: 1 
                    }, 
                    tarjeta_grafica: {
                        tipo: "integrada"
                    }, 
                    caja: {
                        color: ["blanco"], 
                        dimensiones: {h:60, w:50 }, 
                        usb: [ 3.0 ] 
                    }, 
                    fuente:"550w", 
                    disco: [
                        { 
                            tipo:"hdd", 
                            capacidad:2048 
                        }
                    ], 
                    sistema_operativo: false, 
                    fecha_fabricacion: new Date("2014-11-22") },
                perifericos:["Teclado Razer Blackwidow","Raton Corsair Pro", "Pantalla LG"],
                precio: 800.89
            }
        ],
        vendedor: "Informatica Sur",
        comprador: "Universidad Pablo de Olavide",
        fechaVenta: new Date("2022-3-1")
    },
    {   
        idVenta: 5,
        items: [ 
            {
                idOrdenador: 51,
                caracteristicas:  { 
                    placa: { 
                        socket: "lga 1151", 
                        marca:"asus", 
                        puertos: ["dvi", "hdmi", "thundervolt", "usb3.0", "rj45", "jack"], 
                        formato:"atx" 
                    }, 
                    memoria: {
                        capacidad:16, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i5 8500k", 
                        generacion: 8 
                    }, 
                    tarjeta_grafica: { 
                        marca:"amd", 
                        modelo:"radeon rx590" 
                    }, 
                    caja: {
                        color: ["blanco", "azul"], 
                        dimensiones: {h:75, w:60 }, 
                        usb: [ 3.0, 3.2 ] 
                    }, 
                    fuente:"650w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad:512 
                        }
                    ], 
                    sistema_operativo: true,  
                    fecha_fabricacion: new Date("2018-09-21") 
                },
                perifericos:["Teclado Corsair","Raton Razer", "Cascos Corsair"],
                precio: 1200.10
            },
            {
                idOrdenador: 52,
                caracteristicas:  { 
                    placa: { 
                        socket: "lga 1700", 
                        marca:"asus", 
                        puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], 
                        formato:"atx" 
                    }, 
                    memoria: {capacidad:32, tipo:"ddr4" }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i7 11700k", 
                        generacion: 11 
                    }, 
                    tarjeta_grafica: { 
                        marca:"nvidia", 
                        modelo:"rtx 3070 super" 
                    }, 
                    caja: {
                        color: ["negro", ], 
                        dimensiones: {h:75, w:75 }, 
                        usb: [ 3.2, 4.0 ] 
                    }, 
                    fuente:"950w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad:512 
                        }, 
                        { 
                            tipo:"hdd", 
                            capacidad:"1024"
                        }
                    ], 
                    sistema_operativo: false, 
                    fecha_fabricacion: new Date("2020-07-15") 
                },
                perifericos:["Teclado Krom Kernel","Raton Logitech G203", "Pantalla ZOWI"],
                precio: 2000.99
            }
        ],
        vendedor: "Real Microinformatica",
        comprador: "Almacenes La Isla",
        fechaVenta: new Date("2022-1-29")
    },
    {   
        idVenta: 6,
        items: [ 
            {
                idOrdenador: 61,
                caracteristicas:  { 
                    placa: { 
                        socket: "am4", 
                        marca:"aorus", 
                        puertos: ["vga", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad:16, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"amd", 
                        modelo:"ryzen 7 3700x", 
                        generacion: 3 
                    }, 
                    tarjeta_grafica: { 
                        marca:"amd",
                        modelo:"radeon 5500xt" 
                    }, 
                    caja: {
                        color: ["rojo"], 
                        dimensiones: {h:55, w:50 }, 
                        usb: [ 3.1, 3.2 ] 
                    }, 
                    fuente:"650w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad:1024 
                        }
                    ], 
                    sistema_operativo: true, 
                    fecha_fabricacion: new Date("2019-05-01") 
                },
                perifericos:["Teclado Corsair","Raton Corsair Pro", "Pantalla AOC", "Cascos Corsair"],
                precio: 1400.50
            }
        ],
        vendedor: "Tecnoshop",
        comprador: "Particular: Manuel Gutierrez",
        fechaVenta: new Date("2022-2-2")
    },
    {   
        idVenta: 7,
        items: [ 
            {
                idOrdenador: 71,
                caracteristicas:  { 
                    placa: { 
                        socket: "lga 1151", 
                        marca:"hzxt", 
                        puertos: ["hdmi", "dvi", "rj45", "usb4.0", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad: 32, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i9 9900k", 
                        generacion: 9  
                    }, 
                    tarjeta_grafica: { 
                        marca: "nvidia", 
                        modelo: "rtx 3080ti"
                    }, 
                    caja: {
                        color: ["blanco"], 
                        dimensiones: {h:80, w:75 }, 
                        usb: [ 3.2, 3.1 ] 
                    }, 
                    fuente:"850w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad: 512 
                        }, 
                        {
                            tipo:"hdd", 
                            capacidad:512
                        }
                    ],  
                    sistema_operativo: false, 
                    fecha_fabricacion: new Date("2019-12-02") 
                },
                perifericos:["Teclado Logitech","Raton Logitech G502"],
                precio: 2400.05
            },
            {
                idOrdenador: 72,
                caracteristicas:  { 
                    placa: { 
                        socket: "lga 1150", 
                        marca:"asrock", 
                        puertos: ["vga", "usb3.0", "rj45", "jack"], 
                        formato:"atx" 
                    }, 
                    memoria: {
                        capacidad: 16, 
                        tipo:"ddr3" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i3 6300k", 
                        generacion: 6 
                    }, 
                    tarjeta_grafica: { 
                        marca:"nvidia", 
                        modelo:"gtz 1050ti" 
                    }, 
                    caja: {
                        color: ["negro"], 
                        dimensiones: {h:75, w:65 }, 
                        usb: [ 2.0, 3.0, 3.1 ] 
                    }, 
                    fuente:"450w", 
                    disco: [
                        { 
                            tipo:"hdd", 
                            capacidad:512 
                        }
                    ], 
                    sistema_operativo: true, 
                    fecha_fabricacion: new Date("2016-01-12") 
                },
                perifericos:["Teclado Razer Blackwidow","Raton Razer", "Pantalla AOC"],
                precio: 800.99
            },
            {
                idOrdenador: 73,
                caracteristicas: { 
                    placa: { 
                        socket: "am4", 
                        marca:"hzxt", 
                        puertos: ["vga", "hdmi", "thundervolt", ["usb4.0", "usb3.1"], "rj45", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad: 16, 
                        tipo:"ddr5" 
                    }, 
                    procesador: { 
                        marca:"amd", 
                        modelo:"ryzen 7 4550x", 
                        generacion: 4
                    }, 
                    tarjeta_grafica: { 
                        marca: "nvidia", 
                        modelo: "rtx 2097ti" 
                    }, 
                    caja: {
                        color: ["blanco", "negro"], 
                        dimensiones: {h:80, w:70 }, 
                        usb: [ 3.1, 4.0 ] 
                    }, 
                    fuente:"900w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad: 1024 
                        }
                    ], 
                    sistema_operativo: true,  
                    fecha_fabricacion: new Date("2020-09-01") 
                },
                perifericos:["Teclado Hyperx","Raton Steelseries", "Pantalla LG"],
                precio: 3000.99
            }
                        
        ],
        vendedor: "Informatica Sur",
        comprador: "Instituto Jesus del Granpoder",
        fechaVenta: new Date("2022-2-23")
    },
    {   
        idVenta: 8,
        items: [ 
            {
                idOrdenador: 81,
                caracteristicas: { 
                    placa: { 
                        socket: "am4", 
                        marca:"gigabyte", 
                        puertos: ["dvi", "vga", "usb2.0", "rj45", "jack"], 
                        formato:"atx" 
                    },
                    memoria: {
                        capacidad: 8, 
                        tipo:"ddr4"
                    },
                    procesador: { 
                        marca:"amd", 
                        modelo:"ryzen 3 1300", 
                        generacion: 1 
                    }, 
                    tarjeta_grafica: { 
                        tipo: "integrada" 
                    }, 
                    caja: {
                        color: ["negro"], 
                        dimensiones: {h:60, w:50 }, 
                        usb: [ 2.0, 3.0 ] 
                    }, 
                    fuente:"550w", 
                    disco: [
                        { 
                            tipo:"hdd", 
                            capacidad: 512 
                        }
                    ], 
                    sistema_operativo: true, 
                    fecha_fabricacion: new Date("2017-06-14") 
                },
                perifericos:["Teclado Razer Blackwidow","Raton Corsair Pro", "Pantalla LG"],
                precio: 700.50
            }
        ],
        vendedor: "Mediamark",
        comprador: "Particular: Pablo Lopez",
        fechaVenta: new Date("2022-1-7")
    },
    {   
        idVenta: 9,
        items: [ 
            {
                idOrdenador: 91,
                caracteristicas: { 
                    placa: { 
                        socket: "am4", 
                        marca:"msi", 
                        puertos: ["vga", "hdmi", "usb3.2", "rj45", "jack"], 
                        formato:"micro atx" }, 
                        memoria: {
                            capacidad: 16, 
                            tipo:"ddr4" 
                        }, 
                        procesador: { 
                            marca:"amd", 
                            modelo:"ryzen 5 2500", 
                            generacion: 2 
                        }, 
                        tarjeta_grafica: { 
                            tipo:"integrada" 
                        }, 
                        caja: {
                            color: ["blanco", "amarillo"], 
                            dimensiones: {h:70, w:65 }, 
                            usb: [ 3.0, 3.1 ] 
                        }, 
                        fuente:"650w", 
                        disco: [
                            { 
                                tipo:"ssd", 
                                capacidad: 512 
                            }
                        ], 
                        sistema_operativo: false, 
                        fecha_fabricacion: new Date("2020-12-12") 
                    },
                perifericos:["Teclado Logitech","Raton Razer", "Pantalla AOC"],
                precio: 1200.10
            },
            {
                idOrdenador: 92,
                caracteristicas: { 
                    placa: { 
                        socket: "lga 1700", 
                        marca:"aorus", 
                        puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad: 32, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i9 12900k", 
                        generacion: 12 
                    }, 
                    tarjeta_grafica: { 
                        marca: "nvidia", 
                        modelo: "rtx 3090" 
                    }, 
                    caja: {
                        color: [ "morado","gris"], 
                        dimensiones: {h:80, w:70 }, 
                        usb: [ 3.2, 4.0 ] 
                    }, 
                    fuente:"1250w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad: 1024 
                        }, 
                        {
                            tipo:"hdd", 
                            capacidad:1024
                        } 
                    ], 
                    sistema_operativo: true, 
                    fecha_fabricacion: new Date("2021-11-23") 
                },
                perifericos:["Teclado Razer Blackwidow","Raton Logitech G203", "Pantalla Samsung"],
                precio: 3100.99
            }
        ],
        vendedor: "Trastienda",
        comprador: "GMT",
        fechaVenta: new Date("2022-1-2")
    }
])


/* Queremos añadir un nuevo ordenador a la última venta. */
db.ventas.updateOne(
    {
        idVenta: 9
    },
    {
        $push: {
            items:{
                idOrdenador: 93,
                caracteristicas:  { 
                    placa: { 
                        socket: "lga 1151", 
                        marca:"hzxt", 
                        puertos: [
                            "hdmi", 
                            "dvi", 
                            "rj45", 
                            "usb4.0", 
                            "jack"
                        ], 
                        formato:"micro atx" 
                    }, 
                    memoria: {
                        capacidad: 32, 
                        tipo:"ddr4" 
                    }, 
                    procesador: { 
                        marca:"intel", 
                        modelo:"i7 9700k", 
                        generacion: 9  
                    }, 
                    tarjeta_grafica: { 
                        marca: "nvidia", 
                        modelo: "rtx 3090ti"
                    }, 
                    caja: {
                        color: ["blanco"], 
                        dimensiones: {h:80, w:75 }, 
                        usb: [ 3.2, 3.1 ] 
                    }, 
                    fuente:"850w", 
                    disco: [
                        { 
                            tipo:"ssd", 
                            capacidad: 512 
                        }, 
                        {
                            tipo:"hdd", 
                            capacidad:512
                        }
                    ],  
                    sistema_operativo: false, 
                    fecha_fabricacion: new Date("2019-12-02") 
                },
                perifericos:["Teclado Corsair","Raton Logitech G502"],
                precio: 2700.00    
            }
        }
    }
)