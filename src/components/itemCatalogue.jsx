const items = [
    { id:'1', category:'Producto', name:'Lana de Vidrio (m)', price:450 , picture:require('../assets/acustiverR.png')},
    { id:'2', category:'Producto', name:'Placa de Yeso (m2)', price:500 , picture:require('../assets/durlock.png')},
    { id:'3', category:'Producto', name:'Placa de Lana de Vidrio', price:450 , picture:require('../assets/acustiverP.png')},
    { id:'4', category:'Producto', name:'Vidrio PVB (m2)', price:10000 , picture:require('../assets/glass.png')},
    { id:'5', category:'Servicio', name:'Asesoramiento (h)', price:1500 , picture:require('../assets/absorcion.png')},
    { id:'6', category:'Servicio', name:'Instalación (h)', price:1500 , picture:require('../assets/aislamiento.png')},
    { id:'7', category:'Servicio', name:'Mantenimiento (h)', price:1000 , picture:require('../assets/aislamiento.png')},
    { id:'8', category:'Programación', name:'Desarrollo de Aplicaciones (h)', price:2500 , picture:require('../assets/logoISV.png')}
];

export const getItems = new Promise( (res,rej) => {
    let condition = true;
    if (condition) {
        setTimeout(()=>{
            res(items);
        }, 2000)
    }
    else{
        rej('No Items found')
    }
})